"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dm = require("../lib/index");
require("mocha");
const chai = require("chai");
const path = require("path");
const fs = require("fs");
const util_1 = require("util");
const expect = chai.expect;
const asyncExists = util_1.promisify(fs.exists);
const asyncMkDir = util_1.promisify(fs.mkdir);
const readdir = util_1.promisify(fs.readdir);
const unlink = util_1.promisify(fs.unlink);
const readFile = util_1.promisify(fs.readFile);
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
async function test() {
    let response;
    const appOptions = {
        port: 8555,
        tmpFolder: '',
    };
    const app = new dm.App(appOptions);
    app.generator.registerPlugin('docx', new dm.DocGenerator());
    await app.start();
    console.log('Listening on port ' + app.server.address().port);
}
describe('Save file on disk', function () {
    const tmpFolder = path.join(__dirname, 'files');
    beforeEach(async function () {
        if (await asyncExists(tmpFolder)) {
            await deleteDirectoryContent(tmpFolder);
        }
        else {
            await asyncMkDir(tmpFolder);
        }
    });
    it('Generate a file on the desktop', async function () {
        let successDownload = 200;
    });
});
//# sourceMappingURL=app-file-test.spec.js.map