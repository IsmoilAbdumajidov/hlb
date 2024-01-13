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



  const { data, isFetching } = ArticleDetail(articleSlug)


  // bu useEffect refresh berganda coiunt kelganjoyidan davom etishi uchun
  useEffect(() => {
    if (data?.data?.read_time) {
      if (!read_time) {
        addToLS(articleSlug, 0)
        setCount(0)
      }
      else {
        setCount(read_time)
      }
    }
    if (Number(read_time) === data?.data?.read_time) {
      toast.success("Quiz qoshildi")
    }
  }, [isFetching])

  // bu useEffect oyndan oynaga otganda sanoqni toxtatadi
  useEffect(() => {
    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'visible') {
        setIsRunning(true)
      } else if (document.visibilityState === 'hidden') {
        setIsRunning(false)
      }
    });

  }, [document.visibilityState])

  // bu useEffect sanoq ishlashi uchun va localStorag dagi sanoqni yangilash uchun
  useEffect(() => {
    let interval;
    if (isRunning && data?.data?.read_time > Number(read_time)) {
      interval = setInterval(() => {
        addToLS(articleSlug, count + 1)
        setCount(count + 1);
      }, 1000);
    }
    if (data?.data?.read_time <= Number(read_time)) {
      clearInterval(interval)
    }
    return () => clearInterval(interval);
  }, [count, isRunning, isFetching]);


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
