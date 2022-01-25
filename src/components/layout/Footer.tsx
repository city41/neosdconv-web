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
				'xborder-t border-focal-400 bg-gray-900 py-2 px-2 text-center text-xs sm:p-4'
			)}
		>
			<div className="mx-auto flex w-full max-w-6xl flex-col space-y-2">
				<div>
					Made by{' '}
					<a
						className="text-link text-blue-400 hover:underline"
						href="https://mattgreer.dev"
					>
						Matt Greer
					</a>
					<span className="mx-2">&#124;</span>
					<a
						className="text-link hover:underline"
						href="https://github.com/city41/neosdconv-web"
					>
						GitHub repo
					</a>
				</div>
			</div>
		</footer>
	);
}

export { Footer };
