import React, { useEffect, useState } from 'react'
import axios from 'axios'
import useAxios,{configure} from 'axios-hooks'
import moment from 'moment'
import { useNavigate } from 'react-router-dom';
configure({ssr:false});

const LandingPage = () => {
    const initialValue={title:"",content:""}
    const navigate=useNavigate();
    const [article, setArticle] = useState(initialValue);
    const [{data},refetch]=useAxios({
        url:'http://localhost:8000/get-articles',
        method:"get"
    })
    
    useEffect(() => {
        refetch()
      }, [])
    const handleDelete=(item)=>{
        axios.post('http://localhost:8000/delete',{data:item})
        .then((res)=>{
            refetch();
        })
    }
  return (
    <div className='container mt-5'>
        
        <div className="">
            <button className="btn btn-success" onClick={()=>navigate('/create')}>Create Article</button>
            <div className='mt-3'>
                {data&&data.map((item,i)=>{
                    return(
                        <div  className="alert alert-info">
                            <div style={{cursor:'pointer'}} onClick={()=>navigate('/detail/'+JSON.stringify(item))}>
                                <p className='fw-bold text-start'>{item.title}</p>
                                <p className='text-start' style={{width:'250px',whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{item.content}</p>
                                <p className='small'>Posted on: {moment(item.created_at).format("MMM DD YYYY hh:mm A")}</p>
                            </div>
                            <div>
                                <button className="btn btn-warning mx-2" onClick={()=>navigate('/edit/'+JSON.stringify(item))}>Edit</button>
                                <button className="btn btn-danger" onClick={()=>handleDelete(item)}>Delete</button>
                            </div>
                        </div>
                    )
                })}
                
            </div>
        </div>

    </div>

  )
}

export default LandingPage