import React, { useEffect, useState } from 'react'
import NoPost from './NoPost';
import Head from 'next/head';

function Post({ jsonRes }) {

  const [getData, setData] = useState([])

  useEffect(() => {
    setData(jsonRes)
  }, [setData])


  return (
    <>
      <Head>
        <title> {jsonRes[0].text}</title>
      </Head>

      <div className='space' style={{ padding: "1px" }}></div>
      <div className=' container box' >
        {getData === undefined ? <NoPost /> : getData.map((item, index) => (
          
          <div key={index}>
            
            <div className='container'>
              {item.key.startsWith("topHeading") && <h1 className='text-center my-3'>{(item.text)}</h1>}
              {item.key.startsWith("title") && <h4 className='text-start my-2'>{(item.text).includes("<br/>") ? item.text.replace(/<br\/>/g, "<br>") : " "}</h4>}
              {item.key.startsWith("heading") && <p className='text-start my-2'>{(item.text.replace('<br/>'," "))}</p>}
              {item.key.startsWith("subheading") && <p className='text-start my-2'>{(item.text.replace("<br/>"," "))}</p>}
              {item.key.startsWith("content") && <p className='text-start my-2'>{(item.text)}</p>}
              <div className='d-flex justify-content-center'>
                {item.key.startsWith("image") && <img src={(item.text)} style={{ width: "100%", maxWidth: "500px",height:"100%",maxHeight:"500px" }}onError={(e) => { e.target.onerror = null; e.target.src = "https://images.pexels.com/photos/5000455/pexels-photo-5000455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"; }} alt={jsonRes[0].text} />}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
Post.requireNavbarAndFooter = true;
export default Post


export async function getServerSideProps(context) {

  try {
    const { blog_slug } = context.query;
    
    const headers = new Headers();
    headers.append("X-Api-Key", "6706d6eb-e6ae-48ae-ad82-9e4c0ac50e96");
    const res = await fetch(`http://localhost:4001/category/blog/${blog_slug}`, {
      headers: headers,
      timeout: 0,
   
    });
    const data = await res.json()
    const jsonRes = data[0].blog_desc
    
    return { props: { jsonRes } }
  }
  catch (error) {
    console.error(error);
    return { props: {} }
  }
}