import React, { useState } from 'react';


import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'


function Searchbar({data}) {
  const router = useRouter();
  const [getText, setText] = useState("")


  const text_change = (event) => {
    let get_typing_value = event.target.value
    let create_slug = get_typing_value.replace(/ /g,"-").toLowerCase()
    setText(create_slug)
  }

  const SearchBlog = (blog_slug) => {
    router.push({
      pathname: '/articles/Post',
      query: { blog_slug: blog_slug }
    })
  }

  const SearchBox = (setText) => {
    router.push({
      pathname: '/articles/Post',
      query: { blog_slug: setText }
    })
  }
  return (
    <>
      
      
      <h2 className='search_Heading'>Search...</h2>
      <div className='search_box'>
        <div className="container container_Div">
          <input type="text" className='search_box' onChange={text_change} onKeyDown={(event) => {
            if (event.key === 'Enter') { SearchBox(getText) }
          }} placeholder="Search your blog here..." />
        </div>
      </div>


      <div className='my-2'>
        <h1 className='Featured_text_' style={{marginLeft:'1rem'}}>Latest Articles</h1>
        <div className='Blogcard_Main_div'>
        {data.slice(0, 12).map((element, index) => (
          <div className='' style={{ gap: '5px' }} key={index}>
            <Link href='#' onClick={() => refirect_to_post(element.slug)} style={{ textDecoration: "none" }}>
              <div className="Blogcard">
                <div className="Blogcard-image">
                  <Image loading='lazy' src={element.image} width={330} height={170} style={{ borderRadius: '5px' }} className="card-img-top" alt={element.blogtitle} />
                </div>
                <div style={{ maxHeight: '250px' }}>
                  <div style={{ height: '15%' }}>
                    <p className="Blogcard-title">{element.blogtitle}</p>
                  </div>
                  <div style={{ height: '70%' }}>
                    <p className="Blogcard-body">
                      {element.blog_desc[2].text.slice(0, 150).replace("<br/>", " ")}...
                    </p>
                  </div>
                  <div style={{ height: '15%' }}>
                    <p className="Blogcard_footer"><span className="by-name">{element.author}</span></p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      </div>


    </>
  )
}
Searchbar.requireNavbarAndFooter = true;
export default Searchbar;

export async function getServerSideProps() {
  console.log("server")
  try {

    const headers = new Headers();
    headers.append("X-Api-Key", "6706d6eb-e6ae-48ae-ad82-9e4c0ac50e96");
    const res = await fetch(`http://localhost:4001/category/all_blog`, {
      headers: headers,
      mode: "no-cors",
      timeout: 0,

    });
    const data = await res.json()


    return { props: { data } }
  }
  catch (error) {
    // console.error(error);
    return { props: {} }
  }
}