import React, { useEffect, useState } from 'react'
import NoPost from './NoPost';
import Head from 'next/head';

function Post({ jsonRes }) {

  const [getData, setData] = useState([])

  useEffect(() => {
    setData(jsonRes)
  }, [setData])
console.log(getData)

  return (
    <>
      <Head>
        <title> {jsonRes[0].text}</title>
      </Head>

      <div className='space' style={{ padding: "1px" }}></div>
      <div style={{ padding: '2rem 4rem' }}>
        <div style={{ display: "flex", justifyContent: 'space-between',marginBottom:'30px' }}>
          <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ display: "flex", gap: '10px' }}>
              <div style={{border:'2px solid',borderRadius:'10px',padding:'5px',display:'flex',alignItems:'center'}}>
              <h6 style={{margin:'0'}}>Marketing</h6>
              </div>
              <div style={{border:'2px solid',borderRadius:'10px',padding:'5px',display:'flex',alignItems:'center'}}>
              <h6 style={{margin:'0'}}>Marketing</h6>
              </div>
              <div style={{border:'2px solid',borderRadius:'10px',padding:'5px',display:'flex',alignItems:'center'}}>
              <h6 style={{margin:'0'}}>Marketing</h6>
              </div>
            </div>
            <div style={{display:'flex',alignItems:'center'}}>
              <h6 style={{margin:'0'}}>12/23/1222</h6>
            </div>
            <div style={{display:'flex',alignItems:'center'}}>
              <h6 style={{margin:'0'}}>10 Min Read</h6>
            </div>
          </div>
          <div style={{display:'flex',alignItems:'center'}}>
          <h6 style={{margin:'0'}}>Share</h6>
         
          </div>
        </div>
        <div style={{display:'flex'}}>
            <div>
              <h1>{jsonRes[0].text} </h1>
              <h6 style={{textAlign:'justify'}}>{jsonRes[2].text.replace("<br/>"," ")}</h6>
              <div style={{minWidth:'900px',height:'300px',margin:'30px 0px',display:"flex",justifyContent:'center' }}>
              <img src={jsonRes[1].text} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
              </div>
            </div>
        </div>
        <div style={{display:"flex"}}>
          <div style={{width:'60%'}}>
            {getData === undefined ? <NoPost /> : getData.slice(3).map((item, index) => (
              <div key={index}>

                <div className='my-3'>
                  {item.key.startsWith("heading") && <p style={{textAlign:'justify'}} className=''>{(item.text.replace('<br/>', " "))}</p>}
                  {item.key.startsWith("image") && <img src={(item.text)} style={{width:'400px'}}/>}
                  {item.key.startsWith("subheading") && <p style={{textAlign:'justify'}} className=''>{(item.text.replace("<br/>", " "))}</p>}
                  {item.key.startsWith("content") && <p style={{textAlign:'justify'}} className=''>{(item.text)}</p>}
                </div>
              </div>))}
          </div>
          <div style={{width:'40%'}}>
              <div>
                hds
              </div>
          </div>
        </div>
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