export { App, IAppOptions } from '../../../doc-merge/src/lib/app';
export { Client } from './client/client';
export { asyncMiddleware, DownloadHandler, EchoPlugin, DocGenerator, IErrorHandlerOptions, ErrorHandler, IErrorConstructorArgs, IErrorData, ExtError } from '../../../doc-merge/src/lib/index';
export { IPlugin, IPluginInput, IPluginOutput, IInputFileOptions } from '../../../doc-merge/src/lib/interfaces';
export { IFile, InputFileRef, IBody } from '../../../doc-merge-intf/src/lib/index';
export { InputFile, IInputFile, IOutputFile } from '../../../doc-merge/src/lib/index';
export { readFile, saveFile, exists, getFileAsBase64, saveJson } from '../../../doc-merge/src/lib/tools/fs';
export { IPluginOld, Generator, IPluginResult, isIBody, OutputType } from '../../../doc-merge/src/lib/index';
export { createStaticServer } from '../../../doc-merge/src/test/static-server';
