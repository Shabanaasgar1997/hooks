import React, { memo } from "react";

function Two({ prop1 }) {
  console.log("*********");
  return <div></div>;
}

export default memo(Two);
