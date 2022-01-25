import { useState } from 'react';
import { IndexPage } from './IndexPage';
import { buildNeoFile } from 'neosdconv/lib/buildNeoFile';

type ConvertState = 'waiting-on-files' | 'converting' | 'success' | 'error';

function getSafeFileName(root: string, ext: string): string {
	// TODO: might need some scrubbing here
	return `${root}.${ext}`;
}

function sendBlobToAnchorTag(fileBlob: Blob, fileName: string) {
	// stupid browser hack needed to download the file with a usable name
	const a = document.createElement('a');
	a.style.setProperty('display', 'none');

	const fileUrl = window.URL.createObjectURL(fileBlob);

	a.href = fileUrl;
	a.download = fileName;
	a.click();
	window.URL.revokeObjectURL(fileUrl);
}

function loadFile(file: File): Promise<{ file: File; data: Uint8Array }> {
	return new Promise((resolve, reject) => {
		const fileReader = new FileReader();
		fileReader.addEventListener('loadend', () => {
			resolve({ file, data: new Uint8Array(fileReader.result as ArrayBuffer) });
		});
		fileReader.onerror = (e) => {
			reject(e);
		};

		fileReader.readAsArrayBuffer(file);
	});
}

async function loadFiles(files: FileList): Promise<Record<string, Uint8Array>> {
	const loadPromises = [];

	for (let i = 0; i < files.length; ++i) {
		loadPromises.push(loadFile(files[i]));
	}

	const loadedFiles = await Promise.all(loadPromises);

	return loadedFiles.reduce<Record<string, Uint8Array>>(
		(building, loadedFile) => {
			building[loadedFile.file.name] = new Uint8Array(loadedFile.data);
			return building;
		},
		{}
	);
}

function ConnectedIndexPage() {
	const [convertState, setConvertState] =
		useState<ConvertState>('waiting-on-files');
	async function handleFilesChosen(files: FileList) {
		setConvertState('converting');
		try {
			const filesInMemory = await loadFiles(files);

			const neoFile = buildNeoFile(
				{
					genre: 9,
					manufacturer: 'SNK',
					name: 'Art of Fighting',
					year: 1994,
					ngh: '123',
				},
				filesInMemory
			);

			console.log({ neoFile });

			const fileBlob = new Blob([neoFile.buffer], {
				type: 'application/octet-stream',
			});

			sendBlobToAnchorTag(fileBlob, getSafeFileName('aof', 'neo'));

			setConvertState('success');
		} catch (e) {
			setConvertState('error');
		}
	}

	return <IndexPage state={convertState} onFilesChosen={handleFilesChosen} />;
}

export { ConnectedIndexPage };
export type { ConvertState };
