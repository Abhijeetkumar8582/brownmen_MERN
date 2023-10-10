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
      setColor("linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)")
      setCarousel_Image("https://images.pexels.com/photos/3026802/pexels-photo-3026802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")
    }
    else if (category == "Fitness") {
      setCarousel_tittle("Eating Well for Life")
      setCarousel_description("Maintaining a healthy lifestyle is crucial for overall well-being and longevity")
      setColor("linear-gradient(to bottom, #1b0537, #4d2f5b, #7f5d83, #b28fad, #e5c5db)")
      setCarousel_Image("https://images.pexels.com/photos/1756959/pexels-photo-1756959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")
    }
    else if (category == "Health") {
      setCarousel_tittle("The Power of Self-Care")
      setCarousel_description("Living well involves making healthy choices for a fulfilling and balanced life")
      setColor("linear-gradient(to right, #7fe898, #ced679, #fac387, #ffb8ab, #f3b9cc)")
      setCarousel_Image("https://images.pexels.com/photos/131044/pexels-photo-131044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")
    }
    else {
      setCarousel_tittle("Yoga for Stress Relief")
      setCarousel_description("Regular practice of yoga can help improve flexibility, balance, and strength")
      setColor("linear-gradient(to right, #e87f82, #e8678f, #db54a6, #bc4ec4, #7e55e3)")
      setCarousel_Image("https://images.pexels.com/photos/8964915/pexels-photo-8964915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")
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
      <div className='categoryMainDiv'>
        <div className='categoryMainDiv_containerOne' >
          <Image src={carousel_Image} style={{ width: "100%", height: "100%" ,objectFit:'cover'}} width={500} height={500} alt={carousel_Image} />
        </div>
        <div className='categoryMainDiv_containerTwo' style={{ backgroundImage: getColor }}>
          <h1 >{carousel_tittle}</h1>
          <h5 >{carousel_description}</h5>
        </div>
      </div>


      <div className='Featured_text_div'>
        <h1 className='Featured_text_'>Featured</h1>
        </div>
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
