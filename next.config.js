/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		API_IMG: process.env.API_IMG,
		API_EXPLORE: process.env.API_EXPLORE,
		API_SEARCH: process.env.API_SEARCH,
		ACCESS_TOKEN_KEY_MAPBOX: process.env.ACCESS_TOKEN_KEY_MAPBOX,
		MAP_STYLE_URL: process.env.MAP_STYLE_URL
	},
	images: {
		domains: ['links.papareact.com']
	}
}

module.exports = nextConfig
