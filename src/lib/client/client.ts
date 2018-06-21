import { InputFileRef, IBody, OutputType } from 'doc-merge-intf';
import * as request from 'request';

// tslint:disable:no-console
export class Client {
    private urlService: string;
    constructor(urlService: string) {
        this.urlService = urlService;
    }
    public getUrl(type: string, data: any, model: InputFileRef): Promise<string> {
        const body: IBody = {
            data,
            modeleRef: model,
            type,
            outputType: OutputType.url,
        };
        const mergeUrl = this.urlService + '/merge';
        return new Promise<string>((resolve, reject) => {
            let r = request.post(mergeUrl,
                {
                    body: JSON.stringify(body),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }, (error, response, responsseBody) => {
                    if (error) {
                        reject(error);
                    } else if (response.statusCode >= 400) {
                        reject(new Error(responsseBody));
                    } else {
                        const { url } = JSON.parse(responsseBody);
                        resolve(this.urlService + url);
                    }
                });
            r.on('error', (error: any) => {
                reject(error);
            });
        });
    }
}
