import { ReactNode } from 'react';

type DropZoneProps = {
	children: ReactNode;
};

function DropZone({ children }: DropZoneProps) {
	return (
		<div className="border-4 border-dashed border-gray-500 p-8">{children}</div>
	);
}

export { DropZone };
