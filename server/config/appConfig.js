const appConfig = {
    port: process.env.PORT || 4000
};

const logConfig = {
    level: process.env.LOG_LEVEL || 'debug'
};

module.exports = {
    appConfig,
    logConfig
}
