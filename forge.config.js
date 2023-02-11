module.exports = {
	packagerConfig: {
		name: "electron-parcel-ts-demo",
		asar: false,
		ignore: (path) => {
			if(['', '/package.json'].includes(path)) {
				return false
			}
			if(path == '/dist' || path.startsWith('/dist/')) {
				return false
			}
			return true
		}
	},
	rebuildConfig: {},
	makers: [
		{
			name: '@electron-forge/maker-squirrel',
			config: {},
			platforms: ['ia32']
		},
		// {
		// 	name: '@electron-forge/maker-zip',
		// 	platforms: ['darwin'],
		// },
		// {
		// 	name: '@electron-forge/maker-deb',
		// 	config: {},
		// },
		// {
		// 	name: '@electron-forge/maker-rpm',
		// 	config: {},
		// },
	],
};
