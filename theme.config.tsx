import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
	logo: (
		<img
			src="norilogo.png"
			style={{
				width: 150,
			}}
		/>
	),
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
	logoLink: '/norilogo.png',
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
	]
};

export default config;
