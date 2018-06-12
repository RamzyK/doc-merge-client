export declare type InputFileRef = string | IFile;
export declare enum OutputType {
    download = 0,
    url = 1,
    upload = 2
}
export interface IFile {
    url: string;
    headers?: any;
    verb?: string;
}
export interface IBody {
    type: string;
    data: any;
    schema?: string;
    culture?: string;
    modeleRef: InputFileRef;
    outputFileName?: string;
    outputPath?: string;
    outputType: OutputType;
}
