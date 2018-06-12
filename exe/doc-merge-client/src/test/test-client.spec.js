"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dm = require("../lib/index");
require("mocha");
const chai = require("chai");
const path = require("path");
const util_1 = require("util");
const fs = require("fs");
const assert = chai.assert;
const expect = chai.expect;
const exists = util_1.promisify(fs.exists);
const asyncMkDir = util_1.promisify(fs.mkdir);
const readdir = util_1.promisify(fs.readdir);
const unlink = util_1.promisify(fs.unlink);
async function deleteDirectoryContent(dirPath) {
    try {
        const files = await readdir(dirPath);
        const unlinkPromises = files.map((filename) => unlink(`${dirPath}/${filename}`));
        await Promise.all(unlinkPromises);
    }
    catch (err) {
        console.log(err);
    }
}
describe('Client test', function () {
    it('test url client', async function () {
        const tmpFolder = path.join(__dirname, '../../src/test/', 'tmp');
        if (!await exists(tmpFolder)) {
            await asyncMkDir(tmpFolder);
        }
        else {
            await deleteDirectoryContent(tmpFolder);
        }
        const app = new dm.App({
            port: 0,
            tmpFolder,
        });
        const server = await app.start();
        try {
            const port = server.address().port;
            const serviceUrl = `http://localhost:${port}`;
            const modelFileName = path.join(__dirname, '../../src/test/docx-generator-data/model.docx');
            let body = {
                data: {},
                modeleRef: { url: 'file://' + modelFileName },
                type: 'docx',
                outputType: dm.OutputType.url,
            };
            let client = new dm.Client(serviceUrl);
            let clientResponse = await client.getUrl(body.type, body.data, body.modeleRef);
            assert(clientResponse.startsWith(serviceUrl));
        }
        finally {
        }
    });
});
//# sourceMappingURL=test-client.spec.js.map