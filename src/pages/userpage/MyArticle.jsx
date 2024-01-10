import React, { useEffect, useRef, useState } from "react";
import { Store } from "../../App";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";


const MyArticle = () => {
  const { update, count } = Store();
  console.log(count);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  // console.log();

  return (
    <div>
      <Worker  workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <div
          style={{
            height: "80vh",
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Viewer
            fileUrl={`${count.file}`}
            plugins={[defaultLayoutPluginInstance]}
          />
        </div>
      </Worker>
      {/* {count?.file && <iframe   width="100%" height="600" src={`https://docs.google.com/gview?url=${count.file}&embedded=true`}></iframe>} */}
    </div>
  );
};

export default MyArticle;
