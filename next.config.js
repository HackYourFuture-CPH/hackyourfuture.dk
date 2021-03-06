const CompressionPlugin = require('compression-webpack-plugin');
module.exports = {
  webpack: (config, { defaultLoaders }) => {
    // Change output file name format (ex: main.js-{hash}.bundle.js)
    //config.output.filename = '[name]-[hash].bundle.js'
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        defaultLoaders.babel,
        {
          loader: require('styled-jsx/webpack').loader,
          options: {
            type: 'scoped'
          }
        },
        'sass-loader'
      ]
    })
    if (config.mode === 'production') {
      config.plugins.push(
        new CompressionPlugin(),
      );
    }

    return config
  },
  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_SPACE_ENV: process.env.CTF_SPACE_ENV,
    CTF_ACCESS_TOKEN: process.env.CTF_ACCESS_TOKEN,
    NEXT_PUBLIC_STRIPE_KEY:process.env.NEXT_PUBLIC_STRIPE_KEY,
    STRIPE_SECRET_KEY:process.env.STRIPE_SECRET_KEY
  },
}
