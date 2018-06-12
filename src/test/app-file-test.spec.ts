// tslint:disable:only-arrow-functions
// tslint:disable:no-console
import * as dm from '../lib/index';
import 'mocha';
import * as chai from 'chai';
import * as path from 'path';
import * as fs from 'fs';
import { promisify } from 'util';
import * as http from 'http';

const expect = chai.expect;
const asyncExists = promisify(fs.exists);
const asyncMkDir = promisify(fs.mkdir);
const readdir = promisify(fs.readdir);
const unlink = promisify(fs.unlink);
const readFile = promisify(fs.readFile);

async function deleteDirectoryContent(dirPath: string) {
    try {
        const files = await readdir(dirPath);
        const unlinkPromises = files.map((filename) => unlink(`${dirPath}/${filename}`));
        await Promise.all(unlinkPromises);
    } catch (err) {
        console.log(err);
    }
}

async function test() {
    let response: number;
    const appOptions: dm.IAppOptions = {
        port: 8555,
        tmpFolder: '',
    };
    const app = new dm.App(appOptions);
    app.generator.registerPlugin('docx', new dm.DocGenerator());
    await app.start();
    // tslint:disable-next-line:no-console
    console.log('Listening on port ' + app.server.address().port);
}

describe('Save file on disk', function () {
    const tmpFolder = path.join(__dirname, 'files');
    beforeEach(async function () {
        if (await asyncExists(tmpFolder)) {
            await deleteDirectoryContent(tmpFolder);
        } else {
            await asyncMkDir(tmpFolder);
        }
    });
    it('Generate a file on the desktop', async function () {
        // test();
        let successDownload: number = 200;
    });
});
