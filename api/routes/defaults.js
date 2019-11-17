module.exports = (api, opts) => {
    api.get('/favicon.ico', (req, res) => {
        res.sendFile('./api/static/favicon.ico', { maxAge: 3600000 });
    });
}