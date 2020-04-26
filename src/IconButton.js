import React from "react";

const IconButton = ({ url, classString }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <i className={classString} aria-hidden="true"></i>
    </a>
  );
};

export default IconButton;
