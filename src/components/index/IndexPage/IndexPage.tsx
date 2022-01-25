import { ConvertOptions } from 'neosdconv/lib/buildNeoFile';
import { Root } from '../../layout/Root';
import { LoadingBar } from '../../LoadingBar';
import { ConvertState } from './ConnectedIndexPage';
import { DropZone } from './DropZone';
import { Options } from './Options';

type InternalIndexPageProps = {
	state: ConvertState;
	onFilesChosen: (files: FileList) => void;
	onConvert: (options: ConvertOptions, fileNameRoot: string) => void;
};

function IndexPage({
	state,
	onFilesChosen,
	onConvert,
}: InternalIndexPageProps) {
	return (
		<Root
			title="To NeoSD"
			metaDescription="Convert a Neo Geo ROM to NeoSD format"
		>
			<div className="mx-auto mt-16 max-w-2xl">
				{state === 'waiting-on-files' && (
					<DropZone
						className="border-4 border-dashed border-gray-500"
						onFilesChosen={onFilesChosen}
					>
						Drag all of the individual ROM files (c, m, p, v, s), here
						<div className="mt-4 text-center">
							<label className="mt-4 w-full cursor-pointer p-1 font-bold hover:bg-gray-500">
								or click here to choose
								<input
									style={{ width: 0.01, height: 0.01 }}
									type="file"
									multiple
									onChange={(e) => {
										if (e.target.files) {
											onFilesChosen(e.target.files);
										}
									}}
								/>
							</label>
						</div>
					</DropZone>
				)}
				{state === 'waiting-on-options' && <Options onConvert={onConvert} />}
				{state === 'converting' && (
					<div>
						<div className="mb-2 text-center font-bold">Converting...</div>
						<LoadingBar percent={100} />
					</div>
				)}
				{state === 'error' && (
					<div className="bg-red-300 px-4 py-2 text-red-800">
						An unexpected error occurred
					</div>
				)}
				{state === 'success' && (
					<div className="bg-green-600 px-4 py-2 font-bold text-white">
						Successfully converted the file, your browser should have downloaded
						it. To convert another ROM, refresh the page.
					</div>
				)}
			</div>
		</Root>
	);
}

export { IndexPage };
