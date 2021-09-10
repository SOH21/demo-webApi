import serverConfig from './serverConfig.json'


const load = (mode = null) => {

    const config = (mode === "production" || process.argv.includes('--production')) ?
        serverConfig.production : serverConfig.developpement

    return config;
}

export default {
    load
}