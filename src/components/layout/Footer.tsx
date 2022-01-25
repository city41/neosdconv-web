import React from 'react';
import clsx from 'clsx';

type FooterProps = {
	className?: string;
};

function Footer({ className }: FooterProps) {
	return (
		<footer
			className={clsx(
				className,
				'bg-gray-900 py-2 px-2 sm:p-4 text-center text-xs xborder-t border-focal-400'
			)}
		>
			<div className="w-full max-w-6xl mx-auto flex flex-col space-y-2">
				<div>
					Made by{' '}
					<a
						className="text-link hover:underline text-blue-400"
						href="https://mattgreer.dev"
					>
						Matt Greer
					</a>
					<span className="mx-2">&#124;</span>
					<a
						className="text-link hover:underline"
						href="https://github.com/city41/neo-geo-blog"
					>
						GitHub repo
					</a>
				</div>
			</div>
		</footer>
	);
}

export { Footer };
