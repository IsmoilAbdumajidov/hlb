import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArticleDetail, getQuiz, testEnded } from '../../hooks/CoursesApi'
import { addToLS, getFromLS } from '../../utils/localStorage'
import Spinner from '../../components/spinner/Spinner'

const Quiz = () => {
    const { articleSlug } = useParams()

    const navigate = useNavigate()

    const { data: article, isFetching: articleFetching } = ArticleDetail(articleSlug)

    console.log(article);

    const { data: quiz, isFetching: quizFetching } = getQuiz(articleSlug)

    const { data: test, mutate } = testEnded()
    console.log(test);
    
    useEffect(() => {
        if (article?.data?.read===false) {
            navigate(-1)
        }
    }, [])
        
    return (
        <>
            {
                (quizFetching || articleFetching) && <Spinner />
            }
            {
                test?.data?.incorrect.length ?
                    <ResultTest data={test.data.incorrect} />
                    :
                    <TestCom articleSlug={articleSlug} quiz={quiz} quizFetching={quizFetching} mutate={mutate} />
            }
        </>
    )
}

export default Quiz


const ResultTest = ({ data }) => {
    return (
        <div className='lg:w-[80%] xl:w-[70%] max-w-[800px] mx-auto'>
            {
                data.map((item, i) => (
                    <div key={i} className='bg-white shadow-md p-5 md:p-10 mt-10 rounded-md flex flex-col gap-4'>
                        <h3 className='text-md first-letter:uppercase border-b pb-1 border-black font-semibold'>{item.question}?</h3>
                        <p>
                            {item.option}
                        </p>
                    </div>
                ))
            }
        </div>
    )
}


const TestCom = ({ articleSlug, quiz, quizFetching, mutate }) => {



    const [time, setTime] = useState("")
    const [min, setMin] = useState(0)
    const [sec, setSec] = useState(0)
    const [testResult, setTestResult] = useState([])



    const getCurrentTime = getFromLS("newDate") || null

    let currentDate = new Date();
    useEffect(() => {
        if (!quizFetching) {
            if (getCurrentTime) {
                setTime(new Date(getCurrentTime))
            }
            else {
                let AllTime = 0
                quiz?.data?.map(item => AllTime += item.time)
                let newDate = new Date(currentDate.getTime() + AllTime * 1000);
                addToLS("newDate", newDate)
                setTime(newDate)
            }
            setTestResult(quiz?.data.length ? quiz?.data.map(item => ({ quiz_id: item.id, variant: "" })) : [])
        }
    }, [quizFetching])


    useEffect(() => {
        if (!quizFetching) {
            let interval;
            if (time < currentDate) {
                clearInterval(interval)
                mutate([...testResult, { articleSlug: articleSlug }])
                setMin(0)
                setSec(0)
            }
            else {
                interval = setInterval(() => {
                    let currentDate = new Date();
                    let diff = time - currentDate
                    setMin(Math.floor(diff / 1000 / 60))
                    setSec(Math.floor(diff / 1000) % 60)
                }, 1000)
            }
            return () => clearInterval(interval);
        }
    }, [time, min, sec])

    const quizHandler = (e, id) => {
        const checkId = testResult.filter(item => item.quiz_id !== id)
        setTestResult([...checkId, { quiz_id: id, variant: e.target.value }])
    }


    const clickHandler = () => {
        mutate([...testResult, { articleSlug: articleSlug }])
    }
    return (
        <div>
            <div className='lg:w-[80%] xl:w-[70%] max-w-[800px] mx-auto'>
                <div className='flex justify-between'>
                    <h1 className='font-semibold'>Test</h1>
                    <div className="bg rounded px-4 py-2 text-base" >{min < 10 ? '0' + min : min}:{sec < 10 ? "0" + sec : sec}</div>
                </div>
                <div>
                    {quiz?.data.length ?
                        quiz?.data?.map((item, i) => (
                            <div key={i} className='bg-white shadow-md p-5 md:p-10 mt-10 rounded-md flex flex-col gap-4'>
                                <h3 className='text-md first-letter:uppercase border-b pb-1 border-black font-semibold'>{i + 1}. {item.question}?</h3>
                                <ol className='flex flex-col gap-2'>
                                    <div className='flex gap-2'>
                                        A)<input onChange={(e) => quizHandler(e, item.id)} value={"mark_1"} type="radio" name={`quiz${i}`} />
                                        <h4>{item?.mark_1}</h4>
                                    </div>
                                    <div className='flex gap-2'>
                                        B)<input onChange={(e) => quizHandler(e, item.id)} value={"mark_2"} type="radio" name={`quiz${i}`} />
                                        <h4>{item?.mark_2}</h4>
                                    </div>
                                    <div className='flex gap-2'>
                                        C)<input onChange={(e) => quizHandler(e, item.id)} value={"mark_3"} type="radio" name={`quiz${i}`} />
                                        <h4>{item?.mark_3}</h4>
                                    </div>
                                    <div className='flex gap-2'>
                                        D)<input onChange={(e) => quizHandler(e, item.id)} value={"mark_4"} type="radio" name={`quiz${i}`} />
                                        <h4>{item?.mark_4}</h4>
                                    </div>
                                </ol>
                            </div>
                        )) : ""}
                </div>

                <button onClick={() => clickHandler()} className='bg py-2 px-4 rounded mx-auto block mt-10'>Testni yakunlash</button>
            </div>
        </div>
    )
}



