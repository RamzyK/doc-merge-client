import { InputFileRef } from '../../../../doc-merge-intf/src/lib/index';
export declare class Client {
    private urlService;
    constructor(urlService: string);
    getUrl(type: string, data: any, model: InputFileRef): Promise<any>;
}
