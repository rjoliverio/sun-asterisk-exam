import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CreateArticle = () => {
    const navigate=useNavigate();
    const [article, setArticle] = useState({title:"",content:""});
    const handleCreateArticle=()=>{
        axios.post('http://localhost:8000/create',{data:article})
        .then((res)=>{
            navigate('/');
        })
    }
  return (
    <div className='container mt-5 '>
        <input type="text" value={article.title} onChange={(e)=>setArticle((prevState)=>({...prevState,title:e.target.value}))} className='form-control' name="" id="" placeholder='Enter title'/>
        <textarea name="" value={article.content} onChange={(e)=>setArticle((prevState)=>({...prevState,content:e.target.value}))} className='form-control my-2' id="" placeholder='Enter content'></textarea>
        <button type="submit" onClick={handleCreateArticle} className='btn btn-success'>Post</button>
    </div>
  )
}

export default CreateArticle