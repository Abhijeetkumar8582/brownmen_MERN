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
      <div className='my-5'></div>
      <h2 className='search_Heading'>Search...</h2>
      <div className='search_box'>
        <div className="container my-5">
          <input type="text" className='search_box' onChange={text_change} onKeyDown={(event) => {
            if (event.key === 'Enter') { SearchBox(getText) }
          }} placeholder="Search your blog here..." />
        </div>
      </div>


      <div className='container flex-wrap my-5 '>
        <h1>Latest Articles</h1>
        {data.slice(0, 8).map((element, index) => (
          <div className="card mb-3" key={index} style={{ maxWidth: "100vw", width: "100%", color: "black" }}>
            <Link href='#' onClick={() => SearchBlog(element.slug)} style={{ textDecoration: "none" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <Image loading='lazy' src={element.image} width={285} height={220} className="card-img-top" alt={element.image} />
                </div>
                <div className="col-md-8">
                  <div className="card-body" style={{ color: "black" }}>
                    <h5 className="card-title">{element.blogtitle}</h5>
                    <p className="card-text">{element.blog_desc[2].text}</p>
                    <p className="card-text"><small className="text-muted">{element.category} || {element.author}</small></p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
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
    const res = await fetch(`http://13.233.72.215:4001/category/all_blog`, {
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