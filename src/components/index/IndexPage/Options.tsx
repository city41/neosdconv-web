import { useState } from 'react';
import clsx from 'clsx';
import { ConvertOptions } from 'neosdconv/lib/buildNeoFile';

type OptionsProps = {
	className?: string;
	onConvert: (options: ConvertOptions, fileNameRoot: string) => void;
};

function Options({ className, onConvert }: OptionsProps) {
	const [fileName, setFileName] = useState('');
	const [options, setOptions] = useState<Partial<ConvertOptions>>({});

	return (
		<form
			className={clsx(className, 'grid gap-x-4 gap-y-4')}
			style={{ gridTemplateColumns: 'max-content 1fr' }}
			onSubmit={(e) => {
				e.preventDefault();
				e.stopPropagation();
				onConvert(options as ConvertOptions, fileName);
			}}
		>
			<label htmlFor="form_name">Game Name</label>
			<input
				id="form_name"
				className="text-black"
				type="text"
				required
				value={options.name ?? ''}
				onChange={(e) => {
					setOptions((o) => {
						return {
							...o,
							name: e.target.value,
						};
					});
				}}
			/>
			<label htmlFor="form_year">Year</label>
			<input
				id="form_year"
				className="text-black"
				type="text"
				required
				value={options.year ?? ''}
				onChange={(e) => {
					setOptions((o) => {
						return {
							...o,
							year: Number(e.target.value),
						};
					});
				}}
			/>
			<label htmlFor="form_manufacturer">Manufacturer</label>
			<input
				id="form_manufacturer"
				className="text-black"
				type="text"
				required
				value={options.manufacturer ?? ''}
				onChange={(e) => {
					setOptions((o) => {
						return {
							...o,
							manufacturer: e.target.value,
						};
					});
				}}
			/>
			<label htmlFor="form_ngh">NGH#</label>
			<input
				id="form_ngh"
				className="text-black"
				type="text"
				value={options.ngh ?? ''}
				onChange={(e) => {
					setOptions((o) => {
						return {
							...o,
							ngh: e.target.value,
						};
					});
				}}
			/>
			<label htmlFor="form_screenshot">screenshot#</label>
			<input
				id="form_screenshot"
				className="text-black"
				type="text"
				value={options.screenshot ?? ''}
				onChange={(e) => {
					setOptions((o) => {
						return {
							...o,
							screenshot: e.target.value,
						};
					});
				}}
			/>
			<label htmlFor="form_filename">File Name</label>
			<input
				id="form_filename"
				className="text-black"
				type="text"
				required
				value={fileName}
				onChange={(e) => {
					setFileName(e.target.value);
				}}
			/>

			<div className="col-start-2">
				<input
					className="cursor-pointer bg-green-500 px-4 py-2 font-bold text-white"
					type="submit"
					value="Convert"
				/>
			</div>
		</form>
	);
}

export { Options };
