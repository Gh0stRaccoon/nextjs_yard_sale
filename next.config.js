/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			'api.lorem.space',
			'encrypted-tbn0.gstatic.com',
			'api.escuelajs.co',
			'placeimg.com',
			'images.unsplash.com',
		],
	},
};

module.exports = nextConfig;
