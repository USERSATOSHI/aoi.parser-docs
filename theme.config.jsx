export default {
	banner: {
		key: "v1.2.0",
		text: (
			<a
				href="https://github.com/USERSATOSHI/parsers/releases/tag/v1.2.0"
				target="_blank"
			>
				🎉 aoi.parser v1.2.0 is released. Read more →
			</a>
		),
	},
	useNextSeoProps() {
		return {
			titleTemplate: "%s — aoi.parser",
		};
	},
	logo: (
		<span style={{ fontFamily: "monospace", fontSize: "34px" }}>
			aoi.parser
		</span>
	),
	project: {
		link: "https://github.com/Neodevils/aoi.parser",
	},
	navigation: {
		prev: true,
		next: true,
	},
	footer: {
		text: (
			<span>
				{new Date().getFullYear()} © USERSATOSHI. All rights reserved.
			</span>
		),
	},
};
