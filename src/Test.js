import { useEffect, useState } from "react";

function App(){
    const [postID, setpostID]= useState(1);
    const[post, setPost]=useState(false); 
    useEffect(()=>{
        console.log('component ilk yüklendiği zaman');
        return ()=>{
            console.log('component destroy olduğunda');
        }
    },[])
    useEffect(()=>{
        // console.log('postID değeri değiştiğinde');
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postID}`)
        .then(res=>res.json())
        .then(data=>setPost(data))
    },[postID])
    
    // useEffect(()=>{
    //     console.log('component render olduğunda');
    // })
    
    return(
        <div>
            <h3>{postID}</h3>
            <div>
            {post && JSON.stringify(post)}
            </div>
            <button onClick={()=>setpostID(postID=> postID+1)}>Sonraki Konu</button>
            <hr/>
        </div>
    );
}

export default App