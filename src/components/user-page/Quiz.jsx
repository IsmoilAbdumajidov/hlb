import React from 'react'
import { useParams } from 'react-router-dom'
import { getQuiz } from '../../hooks/CoursesApi'

const Quiz = () => {
    const { articleSlug } = useParams()

    const { data } = getQuiz(articleSlug)

    return (
        <div>
            {data?.data.map((item, i) => (
                <div key={i}>
                    <h3 className='text-md first-letter:uppercase font-semibold'>{item.question}?</h3>
                    <ol>
                        <div className='flex gap-2'>
                            A)<input type="radio" name='quiz' />
                            <h4>{item?.mark_1}</h4>
                        </div>
                        <div className='flex gap-2'>
                            B)<input type="radio" name='quiz' />
                            <h4>{item?.mark_2}</h4>
                        </div>
                        <div className='flex gap-2'>
                            C)<input type="radio" name='quiz' />
                            <h4>{item?.mark_3}</h4>
                        </div>
                        <div className='flex gap-2'>
                            D)<input type="radio" name='quiz' />
                            <h4>{item?.mark_4}</h4>
                        </div>
                    </ol>
                </div>
            ))}
        </div>
    )
}

export default Quiz