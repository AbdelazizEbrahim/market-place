import MyImage from "./MyImage";
import React from "react";

export default function UploadThumbnail({ file, onClick }) {
  function handleClick(ev) {
    if (onClick) {
      ev.preventDefault();
      return onClick();
    }
    location.href = file.url;
  }

  if (file.fileType === 'image') {
    return (
      <a onClick={handleClick} target="_blank" rel="noopener noreferrer">
        <MyImage
          width={300}
          height={300}
          alt={'product thumbnail'}
          aiCrop={true}
          src={file.filePath}
        />
      </a>
    );
  }
  return <div>{file.url} &raquo;</div>;
}
