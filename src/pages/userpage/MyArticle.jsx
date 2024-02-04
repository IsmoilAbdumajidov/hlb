import React, { useEffect, useRef, useState } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { ArticleDetail, getQuiz, postISRead } from "../../hooks/CoursesApi";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../../components/spinner/Spinner";
import { addToLS, getFromLS } from "../../utils/localStorage";
import { toast } from "react-toastify";
import TitleDashboard from "../../components/user-page/TitleDashboard";
import Quiz from "./Quiz";


const MyArticle = () => {
  const [count, setCount] = useState(0);
  const [isQuiz, setisQuiz] = useState(false)
  const [isRunning, setIsRunning] = useState(true);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const { articleSlug } = useParams()
  const navigate = useNavigate()

  let title = ""
  articleSlug.split('-').map(item => {
    title += item + " "
  })

  const read_time = getFromLS(articleSlug) || ""

  const { data, isFetching } = ArticleDetail(articleSlug)

  const {mutate:mutateRead} = postISRead()

  // bu useEffect refresh berganda coiunt kelganjoyidan davom etishi uchun
  useEffect(() => {
    if (data?.data?.article?.read_time) {
      if (!read_time) {
        addToLS(articleSlug, 0)
        setCount(0)
      }
      else {
        setCount(read_time)
      }
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

  // bu useEffect sanoq ishlashi uchun va localStorag 1a dagi sanoqni yangilash uchun
  useEffect(() => {
    let interval;
    if (isRunning && data?.data?.article?.read_time > Number(read_time) && !data?.data?.read && !data?.data?.finished) {
      interval = setInterval(() => {
        addToLS(articleSlug, count + 1)
        setCount(count + 1);
      }, 1000);
    }

    if (data?.data?.article?.read_time <= Number(read_time) || data?.data?.read || data?.data?.finished) {
      clearInterval(interval)
      setisQuiz(true)
    }
    if (isQuiz) {
      mutateRead({
        student_id:data?.data?.student,
        article_slug:data?.data?.article.slug
      })
    }
    return () => clearInterval(interval);
  }, [count, isRunning, isFetching]);



  const clickHandler = () => {
   navigate("quiz")
  }

  return (
    <div>
      {count}
      {isFetching ? <Spinner /> :
        <>
          <div className='border-b flex justify-between mb-3 pb-3 items-center border-black/10'>
            <TitleDashboard title={title} />
            {data?.data?.finished ?
              <div className="text-green-500 text-md">Tugatildi</div> :
              <button onClick={clickHandler} className={`${isQuiz ? "" : "cursor-not-allowed opacity-40"}  bg p-2 rounded text-white`}>Testni boshlash</button>
            }
          </div>
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
                fileUrl={`${data?.data?.article.file}`}
                plugins={[defaultLayoutPluginInstance]}
              />
            </div>
          </Worker>
        </>
      }
    </div>
  );
};

export default MyArticle;
