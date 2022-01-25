import React from 'react';
import clsx from 'clsx';
import styles from './Root.module.css';

import logoPng from './logo.png';

type HeaderProps = {
	className?: string;
};

function MenuLink(props: JSX.IntrinsicElements['a']) {
	return (
		<a
			{...props}
			className={clsx(
				props.className,
				'text-link cursor-pointer hover:underline'
			)}
		/>
	);
}

function Header({ className }: HeaderProps) {
	return (
		<header className={clsx(className, 'w-full bg-gray-900')}>
			<div className="mx-auto w-full max-w-7xl">
				<div className="mx-auto mt-2  mb-4 flex h-32 w-full max-w-7xl flex-col flex-wrap items-start justify-between pl-20 sm:mt-0 sm:mb-0 sm:h-16 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-8 sm:pl-8">
					<div className="absolute top-1 left-1 flex flex-row items-center sm:static">
						<a href="/" className={clsx(styles.logo, 'block lg:-ml-4')}>
							<img
								className="h-full w-full"
								src={logoPng.src}
								alt="smaghetti logo"
								width={48}
								height={48}
							/>
						</a>
						<div className="text-focal hidden pl-4 text-center text-2xl font-light sm:block">
							<a href="/">Rom to NeoSD</a>
						</div>
					</div>
					<MenuLink className="pr-8" href="https://neogeo.mattgreer.dev">
						My main Neo Geo site
					</MenuLink>
				</div>
			</div>
		</header>
	);
}

export { Header };
