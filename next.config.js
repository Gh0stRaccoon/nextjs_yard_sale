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
			'loremflickr.com',
		],
	},
};

const withPWA = require('next-pwa')({
	dest: 'public',
	disable: process.env.NODE_ENV === 'development',
});

module.exports = withPWA(nextConfig);
