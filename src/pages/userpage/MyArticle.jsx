import React, { useEffect, useRef, useState } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { ArticleDetail } from "../../hooks/CoursesApi";
import { useParams } from "react-router-dom";
import Spinner from "../../components/spinner/Spinner";
import { addToLS, getFromLS } from "../../utils/localStorage";
import { toast } from "react-toastify";


const MyArticle = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const { articleSlug } = useParams()

  const read_time = getFromLS(articleSlug) || ""



  // console.log(articleSlug);

  const { data, isFetching } = ArticleDetail(articleSlug)
  useEffect(() => {
    if (!isFetching) {
      if (read_time) {
        setCount(read_time)
      }
      else {
        setCount(0)
        addToLS(articleSlug, 0)
      }
    }
  }, [isFetching])



  useEffect(() => {
    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'visible' && data?.data?.read_time > Number(read_time)) {
        setIsRunning(true)
      } else if (data?.data?.read_time >= Number(read_time)) {
        setIsRunning(false)
      }
    });

  }, [document.visibilityState])

  console.log(isRunning);
  useEffect(() => {
    let interval;
    if (isRunning && data?.data?.read_time > Number(read_time)) {
      interval = setInterval(() => {
        addToLS(articleSlug, count + 1)
        setCount(count + 1);
      }, 1000);
    }
    else {
      clearInterval(interval)
    }


    if (count === data?.data?.read_time) {
      toast.success("Quiz qoshildi")
    }
    //Clearing the interval
    return () => clearInterval(interval);
  }, [count, isRunning]);

  return (
    <div>
      {count}
      {isFetching ? <Spinner /> :
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <div
            style={{
              height: "80vh",
              width: "100%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Viewer
              fileUrl={`${data?.data?.file}`}
              plugins={[defaultLayoutPluginInstance]}
            />
          </div>
        </Worker>}
      {/* {count?.file && <iframe   width="100%" height="600" src={`https://docs.google.com/gview?url=${count.file}&embedded=true`}></iframe>} */}
    </div>
  );
};

export default MyArticle;
