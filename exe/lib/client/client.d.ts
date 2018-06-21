import { InputFileRef } from 'doc-merge-intf';
export declare class Client {
    private urlService;
    constructor(urlService: string);
    getUrl(type: string, data: any, model: InputFileRef): Promise<string>;
}
