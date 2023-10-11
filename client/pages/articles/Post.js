import React, { useEffect, useState } from 'react'
import NoPost from './NoPost';
import Head from 'next/head';
import { headers } from '@/next.config';
import { yogaTags, nutritionTags, fitnessTags, healthTags, yogaBenefits } from './Tags'

function Post({ jsonRes, blog_category, insertDate, jsonRes2 }) {
 
  const [getData, setData] = useState([])
  const [sugesstionArr, setsugesstionArr] = useState([])
  const [blogPostRelevantTag, setblogPostRelevantTag] = useState([])
  const [blogTags, setBlogTags] = useState([])
  const shuffledArray = yogaBenefits.slice();

  let postTag = []
 
  console.log(postTag)
  useEffect(() => {
    setData(jsonRes)
    setsugesstionArr(jsonRes2)


    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    setblogPostRelevantTag(shuffledArray)
    if (blog_category === "Yoga") {
      postTag = yogaTags.slice(0)
    } else if (blog_category === "Fitness") {
      postTag = fitnessTags.slice(0)
    } else if (blog_category === "Health") {
      postTag = healthTags.slice(0)
    } else {
      postTag = nutritionTags.slice(0)
    }
    for (let i = postTag.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [postTag[i], postTag[j]] = [postTag[j], postTag[i]];
    }
    setBlogTags(postTag)
  }, [setData, setsugesstionArr, setblogPostRelevantTag])



  return (
    <>
      <Head>
        <title> {jsonRes[0].text}</title>  
        <meta property="og:title" content="Brownmen" />
        <meta property="og:description" content={jsonRes[0].text.slice(0,40)} />
        <meta property="og:image" content={jsonRes[1].text} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        <meta property="og:url" content="https://brownmen.netlify.app" />
        <meta property="og:type" content="website" />
      </Head>

      <div className='space' style={{ padding: "1px" }}></div>
      <div className='blogPost_Main_div'>
        <div className='blogPost_Main_div_sub_Div_one'>
          <div className='blogPost_Main_div_sub_Div_one_subDiv'>
            <div className='blogPost_Main_div_sub_Div_one_subDiv_tag'>
              {blogTags.slice(0, 3).map((element, i) => (
                <div className='postTags' key={i}>
                  <h6 className='Mobile_text'>{element}</h6>
                </div>
              ))}
            </div>
            <div className='postDate'>
              <h6 className='Mobile_text'>{insertDate.slice(0, 8)}</h6>
            </div>
            <div className='ReadTime'>
              <h6 className='Mobile_text'>10 Min Read</h6>
            </div>
          </div>
          <div className='shareIcon'>
            <h6 className='Mobile_text'>Share</h6>
            <div style={{display:'flex',gap:'5px'}}>
          <div>
          <i className="fa fa-facebook" aria-hidden="true" style={{color:'black',fontSize:'17px'}}></i>
          </div>
          <div>
          <i className="fa fa-twitter" aria-hidden="true" style={{color:'black',fontSize:'17px'}}></i>
          </div>
          <div>
          <i className="fa fa-linkedin" aria-hidden="true" style={{color:'black',fontSize:'17px'}}></i>
          </div>
        </div>
          </div>
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{width:'100%'}}> 
            <div>
              <h1>{jsonRes[0].text} </h1>
            </div>
            <div>
              <h6 className='text_justify'>{jsonRes[2].text.replace(/<br\s*\/?>/g, ' ')}</h6>
            </div>
            <div className='blogPost_first_image_div'>
              <img src={jsonRes[1].text} className='blogPost_first_image_div_image' alt={jsonRes[1].text} />
            </div>
          </div>
        </div>
        <div className='blogPost_Head_div' >
          <div className='blogPost_Main_div_sub_Div_two'>
            {getData === undefined ? <NoPost /> : getData.slice(3).map((item, index) => (
              <div key={index}>

                <div className='my-3'>
                  {item.key.startsWith("heading") && <p className='text_justify'>{(item.text.replace(/<br\s*\/?>/g, ' ')).replace(/\*\*/g, ' ')}</p>}
                  {item.key.startsWith("image") && <div style={{ height: " 250px" }}><img src={(item.text)} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.src = 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg' }} /></div>}
                  {item.key.startsWith("subheading") && <p className='text_justify'>{(item.text.replace(/<br\s*\/?>/g, ' '))}</p>}
                  {item.key.startsWith("content") && <p className='text_justify'>{(item.text.replace(/<br\s*\/?>/g, ' '))}</p>}
                  {item.key.startsWith("title") && <p className='text_justify'><b>{(item.text.replace(/<br\s*\/?>/g, ' '))}</b></p>}

                </div>
              </div>))}
          </div>
          <div className='blogPost_Main_div_sub_Div_three'>
            <div className='blogPost_Main_div_sub_Div_three_subDiv'>
              <div className='blogPost_Main_div_sub_Div_three_subDiv_tag_text'>
                <h6>Tag</h6>
              </div>
              <div className='postBendefits_Tag'>
                {blogPostRelevantTag.slice(0, 5).map((element, i) => (
                  <div className='postBendefits_Tag_div' key={i}>
                    <h6 className='Mobile_text'>{element}</h6>
                  </div>
                ))}
              </div>
            </div>
            <div className='Other_blog_post_Main_div'>
              <div className='Other_blog_post_Main_div_post_text'>
                <h6>Other blog post</h6>
              </div>
              <div style={{ display: 'flex' }}>
                <div className='Suggestion_card_Main_Div'>
                  {sugesstionArr.filter((element) => element.category === blog_category).slice(0, 2).map((element, i) => (
                    <div className="Suggestion_card" key={i}>
                      <div className="Suggestion_card_header">
                        <div>
                          <h6 className="title">
                            {element.blogtitle}
                          </h6>
                          <p className="Suggestion_card_name">{element.author}</p>
                        </div>
                        <span className="Suggestion_card_image">
                          <img src={element.image} style={{ width: '100%', objectFit: 'cover', borderRadius: '10px', height: '100%' }} />
                        </span>
                      </div>
                    </div>))}
                </div>
              </div>
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
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/category/blog/${blog_slug}`, {
      headers: headers,
      timeout: 0,

    });
    const data = await res.json()
    const jsonRes = data[0].blog_desc
    const blog_category = data[0].category
    const insertDate = data[0].date

    const res2 = await fetch(`${process.env.NEXT_PUBLIC_API}/category/all_blog`, {
      headers: headers,
      timeout: 0,
    });
    const data2 = await res2.json();
    const jsonRes2 = data2
    // console.log(jsonRes2,"jsonRes2");
    return { props: { jsonRes, blog_category, insertDate, jsonRes2 } }
  }
  catch (error) {
    console.error(error);
    return { props: {} }
  }
}
