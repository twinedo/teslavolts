/** @type {import('next').NextConfig} */
const nextConfig = {
	fastRefresh: true,
	swcMinify: true,
	concurrentFeatures: true,
	productionBrowserSourceMaps: false, // Disable source maps in development
	optimizeFonts: false, // Disable font optimization
	minify: false, // Disable minification
};

module.exports = nextConfig;
