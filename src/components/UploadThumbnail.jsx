

export default function UploadThumbnail({file},{}) {
    if(file.fileType === 'image'){
        return(
            <a href={file.url} target="_blank">
                <img src={file.url+`?tr=w-100,h-100,f0-auto`}/>
            </a>
        );
    }
    return (
        <div className="">{file.url} &raquo;</div>
    )
}