import React from "react";
import { Resizable } from "react-resizable-layout";
import "react-resizable-layout/css/styles.css";

const MyResizableLayout = () => (
  <div className="container">
    <Resizable defaultSize={{ width: "30%" }} minWidth="20%" maxWidth="70%">
      <div className="file-tree">File Tree</div>
      <div className="separator" />
      <div className="editor">Editor</div>
    </Resizable>
    <div className="terminal">Terminal</div>
  </div>
);

export default MyResizableLayout;
