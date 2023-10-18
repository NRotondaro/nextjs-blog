const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'noskin',
        mongodb_password: 'noskin34',
        mongodb_clustername: 'noskin',
        mongodb_database: 'my-site-dev',
      },
    };
  }

  return {
    env: {
      mongodb_username: 'noskin',
      mongodb_password: 'noskin34',
      mongodb_clustername: 'noskin',
      mongodb_database: 'my-site',
    },
  };
};
