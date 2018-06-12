import { IFile, InputFileRef } from 'doc-merge-intf';
export interface IInputFile extends IFile {
}
export interface IOutputFile extends IFile {
}
export interface IInputFileOptions {
    tmpFolder: string;
}
export declare class InputFile {
    private readonly options;
    private numFile;
    private readonly protocolHandlers;
    constructor(options: IInputFileOptions);
    getFile(data: InputFileRef): Promise<string>;
    private getFileFromUrl;
    private getFileFromFileUrl;
    private getFileFromString;
    private saveFile;
}
