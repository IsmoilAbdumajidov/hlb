import React from 'react'
import { Store } from '../../App'

const MyArticle = () => {
  const { update, count } = Store()
  console.log(count);
  return (
    <div>
        {count?.file && <iframe width="100%" height="600"  src={`https://docs.google.com/gview?url=${count.file}&embedded=true`}></iframe>}
    </div>
  )
}

export default MyArticle