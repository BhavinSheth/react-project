import React from "react";

function Social({ id, url, icon }) {
  return (
    <div>
      <a href={url}>{icon}</a>
    </div>
  );
}

export default Social;
