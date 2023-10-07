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
            let content;
            if(c.status==="Approved"){
                content = c.content;
            }
            else if(c.status==="pending"){
                content = "Comment is awaiting moderation"
            }
            else if(c.status==="Rejected"){
                content = "Comment has been rejected"
            }
            return(
                <div className='pl-2 mt-1'>
                    <li>{content}</li>
                </div>
            )
        })}
    </div>
    
  )
}

export default CommentList