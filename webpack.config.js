const Encore = require('@symfony/webpack-encore');
const path = require('path');
const DependencyExtractionWebpackPlugin = require('@wordpress/dependency-extraction-webpack-plugin');

const directoryName = path.dirname(__filename).split('/').pop();

Encore.setOutputPath('assets/dist')
	.setPublicPath(`/app/themes/${directoryName}/assets/dist`)
	.setManifestKeyPrefix('')
	.enableSingleRuntimeChunk()
	.enableSourceMaps(!Encore.isProduction())
	.enableVersioning(Encore.isProduction())
	.cleanupOutputBeforeBuild()
	.enableSassLoader()
	.enablePostCssLoader()
	.enableIntegrityHashes(Encore.isProduction())
	.addPlugin(new DependencyExtractionWebpackPlugin())
	.addStyleEntry('backend-styles', './assets/src/sass/backend.scss')
	.addStyleEntry('frontend-styles', './assets/src/sass/frontend.scss')
	.addStyleEntry('front-page', './assets/src/sass/front-page.scss')
	// .addStyleEntry('layout', './assets/src/sass/layout.scss')
	.addEntry('backend-scripts', './assets/src/js/backend.js')
	.addEntry('frontend-scripts', './assets/src/js/frontend.js');

/**
 * Webpack configuration object.
 *
 * Edit for advanced configs.
 */
const config = Encore.getWebpackConfig();

module.exports = config;
