import { FileStore } from "../stores/FileStore";
import { createElement, ReactElement } from "react";

type UploadInfoProps = {
    store: FileStore;
};

export function UploadInfo({ store }: UploadInfoProps): ReactElement {
    switch (store.fileStatus) {
        case "new":
            return <span className={"upload-status"}>Ready to upload.</span>;
        case "uploading":
            return <span className={"upload-status"}>Uploading...</span>;
        case "done":
            return <span className={"upload-status success"}>Uploaded successfully!</span>;
        case "uploadingError":
            return <span className={"upload-status error"}>An error occurred during uploading.</span>;
        case "validationError":
            return <span className={"upload-status error"}>{store.errorDescription}</span>;
        case "removedFile":
            return <span className={"upload-status error"}>Removed successfully.</span>;
        case "existingFile":
        default:
            return <span className={"upload-status"}>&nbsp;</span>;
    }
}
