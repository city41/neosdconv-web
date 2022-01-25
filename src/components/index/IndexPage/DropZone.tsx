import { useState, ReactNode } from 'react';
import clsx from 'clsx';

type DropZoneProps = {
	className?: string;
	onFilesChosen: (files: FileList) => void;
	children: ReactNode;
};

function DropZone({ className, onFilesChosen, children }: DropZoneProps) {
	const [fileOver, setFileOver] = useState(false);

	return (
		<div
			className={clsx(
				className,
				'flex h-full w-full flex-col items-center justify-center px-6 py-4',
				{
					'bg-gray-400': fileOver,
				}
			)}
			onDragOver={(e) => {
				e.preventDefault();
				setFileOver(true);
			}}
			onDragLeave={(e) => {
				e.preventDefault();
				setFileOver(false);
			}}
			onDrop={(e) => {
				e.preventDefault();
				onFilesChosen(e.dataTransfer.files);
			}}
		>
			{children}
		</div>
	);
}

export { DropZone };
