import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import { useRouter } from 'nextra/hooks';

const config: DocsThemeConfig = {
	logo: () => {
		const router = useRouter();
		return (
			<a href={`/${router.locale}`}>
				<img
					src="/norilogo.png"
					style={{
						width: 150,
					}}
				/>
			</a>
		);
	},
	chat: {
		link: 'https://discord.gg/H3hu5V3wkP',
	},
	docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
	color: {
		hue: 119,
		saturation: 85,
	},
	footer: {
		component: () => <></>,
		content: '',
	},
	head: (
		<>
			<link rel="shortcut icon" href="noriicon.png" type="image/x-icon" />
		</>
	),
	logoLink: false,
	editLink: {
		component: () => <></>,
		content: '',
	},
	sidebar: {
		toggleButton: true,
	},
	i18n: [
		{
			locale: 'en',
			name: 'English',
		},
		{
			locale: 'tr',
			name: 'Türkçe',
		},
	],
};

export default config;
