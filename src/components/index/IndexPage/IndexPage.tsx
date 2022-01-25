import { Root } from '../../layout/Root';
import { LoadingBar } from '../../LoadingBar';
import { ConvertState } from './ConnectedIndexPage';
import { DropZone } from './DropZone';

type InternalIndexPageProps = {
	state: ConvertState;
	onFilesChosen: (files: FileList) => void;
};

function IndexPage({ state, onFilesChosen }: InternalIndexPageProps) {
	return (
		<Root
			title="To NeoSD"
			metaDescription="Convert a Neo Geo ROM to NeoSD format"
		>
			<div className="mx-auto mt-16 max-w-2xl">
				{state === 'waiting-on-files' && (
					<DropZone>
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
				{state === 'converting' && (
					<div>
						<div className="mb-2 text-center font-bold">Converting...</div>
						<LoadingBar percent={100} />
					</div>
				)}
			</div>
		</Root>
	);
}

export { IndexPage };
