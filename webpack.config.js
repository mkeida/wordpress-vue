// Importy
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const Webpack = require('webpack');

// Konfigurační soubor pro webpack
module.exports = {
    // Hlavní vstupní soubor
    entry: './src/index.js',
    // Režim - produkce nebo development
    mode: (process.env.NODE_ENV === 'production') ? 'production' : 'development',
    // Output
    output: {
        // Výsledný output tak, jak ho
        // bude načítat wordpress šablona
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    // Moduly
    module: {
        // Pravidla pro moduly
        rules: [
            // JS soubory (.js)
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            // Vue soubory (.vue)
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // CSS soubory
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            // SASS soubory (.scss)
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            // Ostatní soubory (např. fonty, obrázky)
            {
                test: /\.(woff(2)?|ttf|eot|svg|png|jpg|jpeg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: '../dist',
                            publicPath: (process.env.NODE_ENV === 'production') ? '/dist' : '/wordpress/wp-content/themes/your-theme-name/dist/'
                        }
                    }
                ]
            }
        ]
    },
    // Jak jsou moduly načítány
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue'],
    },
    // Pluginy
    plugins: [
        // Vue-loader
        new VueLoaderPlugin(),
        // JQuery (umožní globálně přistupovat k jQuery
        // bez nutnosti importu nebo require)
        new Webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ]
}
