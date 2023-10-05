import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Head from 'next/head'





function Category({ data }) {

  const router = useRouter()
  const [getCategory, setCategory] = useState(router.query.category)
  const [carousel_tittle, setCarousel_tittle] = useState("")
  const [carousel_description, setCarousel_description] = useState("")
  const [getColor, setColor] = useState("#04A123")
  const [carousel_Image, setCarousel_Image] = useState("")
  const category = router.query.category



  useEffect(() => {

    setCategory(category)
    if (category == "Nutrition") {
      setCarousel_tittle("Pushing Your Limits")
      setCarousel_description("Regular exercise improves physical fitness, boosts mood, and reduces the risk of chronic diseases")
      setColor("#04A123")
      setCarousel_Image("https://images.pexels.com/photos/4761663/pexels-photo-4761663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")
    }
    else if (category == "Fitness") {
      setCarousel_tittle("Eating Well for Life")
      setCarousel_description("Maintaining a healthy lifestyle is crucial for overall well-being and longevity")
      setColor("#A27202")
      setCarousel_Image("https://images.pexels.com/photos/287354/pexels-photo-287354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")
    }
    else if (category == "Health") {
      setCarousel_tittle("The Power of Self-Care")
      setCarousel_description("Living well involves making healthy choices for a fulfilling and balanced life")
      setColor("#043DA1")
      setCarousel_Image("https://images.pexels.com/photos/1916821/pexels-photo-1916821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")
    }
    else {
      setCarousel_tittle("Yoga for Stress Relief")
      setCarousel_description("Regular practice of yoga can help improve flexibility, balance, and strength")
      setColor("#4C0099")
      setCarousel_Image("https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")
    }


  }, [router.query.category])

  const refirect_to_post = (blog_slug) => {
    router.push({
      pathname: '/articles/Post',
      query: { blog_slug: blog_slug }
    })
  }

  return (
    <>
      <Head>
        <title> {category}</title>
      </Head>
      <div className='my-5'></div>
      <div className='categoryMainDiv' style={{display:'flex',maxHeight:'400px'}}>
        <div className='categoryMainDiv_containerOne' >
          <Image src={carousel_Image} style={{ width: "100%", height: "100%" }} width={500} height={500} alt={carousel_Image} />
        </div>
        <div className='categoryMainDiv_containerTwo' style={{ backgroundColor: getColor}}>
          <h1 >{carousel_tittle}</h1>
          <h5 >{carousel_description}</h5>
        </div>
      </div>



      {/* <div className='container flex-wrap  '> */}
        <h1>Featured</h1>
        <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap',gap:'15px',margin:'50px 5px'}}>
          {data.slice(0, 12).map((element, index) => (
            <div className='' style={{gap:'5px'}} key={index}>
              <Link href='#' onClick={() => refirect_to_post(element.slug)} style={{ textDecoration: "none" }}>
                <div class="Blogcard">
                  <div class="Blogcard-image">
                  <Image loading='lazy' src={element.image} width={330} height={170} style={{borderRadius:'5px'}} className="card-img-top" alt={element.blogtitle} />
                  </div>
                  <div style={{maxHeight:'250px'}}>
                  <div style={{height:'15%'}}>
                  <p class="Blogcard-title">{element.blogtitle}</p>
                 </div>
                 <div style={{height:'70%'}}>
                  <p class="Blogcard-body">
                  {element.blog_desc[2].text.slice(0, 150).replace("<br/>", " ")}...
                     </p>
                  </div>
                  <div style={{height:'15%'}}>
                  <p class="Blogcard_footer"><span class="by-name">{element.author}</span></p>
                  </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      {/* </div> */}
    </>
  )
}

Category.requireNavbarAndFooter = true;
export default Category


export async function getServerSideProps(context) {

  try {
    const { category } = context.query;

    const headers = new Headers();
    headers.append("X-Api-Key", "6706d6eb-e6ae-48ae-ad82-9e4c0ac50e96");
    const res = await fetch(`http://localhost:4001/category/${category}`, {
      headers: headers,
      timeout: 0,

    });
    const data = await res.json()

    return { props: { data } }
  }
  catch (error) {

    return { props: {} }
  }
}
