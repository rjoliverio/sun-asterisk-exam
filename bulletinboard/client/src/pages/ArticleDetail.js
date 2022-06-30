import moment from 'moment';
import React from 'react'
import { useParams } from 'react-router-dom'

const ArticleDetail = () => {
    const {data}=useParams();

  return (
    <div className='alert alert-info mt-5'>
        <p className='fw-bold'>{JSON.parse(data).title}</p>
        <p>{JSON.parse(data).content}</p>
        <p className='small'>Posted on: {moment(JSON.parse(data).created_at).format("MMM DD YYYY hh:mm A")}</p>
    </div>
  )
}

export default ArticleDetail