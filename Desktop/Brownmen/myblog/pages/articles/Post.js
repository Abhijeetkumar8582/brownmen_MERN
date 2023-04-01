import React, { useEffect, useState } from 'react'
import Image from 'next/legacy/image'
import { useRouter } from 'next/router';
import blog from '../JSON/Blog.json'
function Post() {

  const router = useRouter();
  const { pid } = router.query;
  console.log(pid,"home")
  
  const [blogJson, setBlogJson] = useState([]);
  
  useEffect(() => {
    // const { pid } = router.query;
    for (let i = 0; i < blog.length; i++) {
      if (blog[i].slug === pid) {
        setBlogJson(blog[i].desc);
        console.log("Found matching blog post:",blog[i].desc);
        break;
      }
    }
  }, [pid]);

  return (
    <>

      <div className='space' style={{padding:"1px"}}></div>
      <div className=' container box' >
        {blogJson.map((item) => (
          <div key={item.key}>
            <div className='container'>
            {item.key.startsWith("topHeading") && <h1 className='text-center my-3'>{(item.text)}</h1>}
            {item.key.startsWith("title") && <h3 className='text-start my-2'>{(item.text).includes("<br/>")?item.text.replace(/<br\/>/g, "<br>"):" "}</h3>}
            {item.key.startsWith("heading") && <p className='text-start my-2'>{(item.text)}</p>}
            <div className='d-flex justify-content-center'>
            {item.key.startsWith("image") && <img src={(item.text)} style={{width:"100%",maxWidth:"700px"}}  alt="Dynamic Image" />}
          </div>
          </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Post