"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const doc_merge_intf_1 = require("doc-merge-intf");
const request = require("request");
class Client {
    constructor(urlService) {
        this.urlService = urlService;
    }
    getUrl(type, data, model) {
        const body = {
            data,
            modeleRef: model,
            type,
            outputType: doc_merge_intf_1.OutputType.url,
        };
        const mergeUrl = this.urlService + '/merge';
        return new Promise((resolve, reject) => {
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
                    reject(new Error(responsseBody));
                }
                else {
                    const { url } = JSON.parse(responsseBody);
                    resolve(this.urlService + url);
                }
            });
            r.on('error', (error) => {
                reject(error);
            });
        });
    }
}
exports.Client = Client;
//# sourceMappingURL=client.js.map