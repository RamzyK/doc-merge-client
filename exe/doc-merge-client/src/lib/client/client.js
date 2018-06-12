"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../../../doc-merge-intf/src/lib/index");
const request = require("request");
const lib_1 = require("../../../../doc-merge/src/lib");
class Client {
    constructor(urlService) {
        this.urlService = urlService;
    }
    async getUrl(type, data, model) {
        const body = {
            data,
            modeleRef: model,
            type,
            outputType: index_1.OutputType.url,
        };
        const mergeUrl = this.urlService + '/merge';
        const responseUrl = await new Promise((resolve, reject) => {
            let r = request.post(mergeUrl, {
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json',
                },
            }, (error, response, responsseBody) => {
                if (error) {
                    reject(error);
                }
                else if (response.statusCode >= 400) {
                    reject(new lib_1.ExtError(response.statusCode, responsseBody));
                }
                else {
                    const { url } = JSON.parse(responsseBody);
                    resolve(url);
                }
            });
            r.on('error', (error) => {
                reject(error);
            });
        });
        return this.urlService + responseUrl;
    }
}
exports.Client = Client;
//# sourceMappingURL=client.js.map