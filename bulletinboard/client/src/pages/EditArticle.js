import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditArticle = () => {
    const navigate=useNavigate();
    const {data}=useParams();
    var arData=JSON.parse(data);
    const [article, setArticle] = useState({title:arData.title,content:arData.content});
    const handleCreateArticle=()=>{
        axios.post('http://localhost:8000/edit',{data:article,id:arData.id})
        .then((res)=>{
            navigate('/');
        })
    }
    
  return (
    <div className='container mt-5 '>
        <input type="text" value={article.title} onChange={(e)=>setArticle((prevState)=>({...prevState,title:e.target.value}))} className='form-control' name="" id="" placeholder='Enter title'/>
        <textarea name="" value={article.content} onChange={(e)=>setArticle((prevState)=>({...prevState,content:e.target.value}))} className='form-control my-2' id="" placeholder='Enter content'></textarea>
        <button type="submit" onClick={handleCreateArticle} className='btn btn-success'>Update</button>
    </div>
  )
}

export default EditArticle