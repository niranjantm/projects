import React from 'react'


function CommentList({postComments}) {
    // const [comments,setComments] = useState([])

    // const fetchComment = ()=>{
    //     // const res = await axios.get(`http://localhost:4002/posts`);
    //     setComments(postComments)
        
    // }
    // useEffect(()=>{
    //     fetchComment();
    // },[])
    
    
    
    console.log(postComments)
    
  return (
    <div className='max-h-[100px] overflow-scroll'>
        {!postComments?"":postComments.map((c)=>{
            return(
                <div className='pl-2 mt-1'>
                    <li>{c.content}</li>
                </div>
            )
        })}
    </div>
    
  )
}

export default CommentList