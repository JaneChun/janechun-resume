import React, { JSX } from 'react';
import { Platform } from 'react-native';

type LinkProps = {
	href: string;
	children: JSX.Element;
};

const isWeb = Platform.OS === 'web';

export const Link = ({ href, children }: LinkProps) => {
	if (isWeb) {
		return (
			<a
				href={href}
				rel='noopener noreferrer'
				style={{ textDecoration: 'none' }}
			>
				{children}
			</a>
		);
	}
};
