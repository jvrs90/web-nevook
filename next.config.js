const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        API_URL: 'http://localhost:3001',
      },
      basePath: '',
      poweredByHeader: false,
      reactStrictMode: true,
    }
  }

}
