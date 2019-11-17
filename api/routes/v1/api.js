// Global modules
const fs = require('fs');
const path = require('path');

// Local modules
const package = require('../../../package.json');
const apiDocs = fs.readFileSync(path.join(__dirname, '../../static/apiDocs.yml'), { encoding: 'utf8' });

module.exports = (api, opts) => {

    api.get('/info', async (req, res) => {
        res.status(200).json({
            name: process.env.DOMAIN_NAME,
            description: package.description,
            version: process.env.BASE_PATH
        });
    });

    api.get('/api-docs', async (req, res) => {
        res.header('Content-Type', 'application/yaml')
        .header('Access-Control-Allow-Origin', '*')
        .send(apiDocs);
    });

}