import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'


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
      pathname: '/articles/post',
      query: { blog_slug: blog_slug }
    })
  }

  return (
    <>

      <div className='my-5'></div>
      <div className='row '>
        <div className='col'>
          <Image src={carousel_Image} loading="lazy" style={{ width: "100%", height: "100%" }} width={500} height={500} alt="https://images.pe750&dpr=2" />
        </div>
        <div className='col carousel_text_box' style={{ backgroundColor: getColor }}>
          <h1 className='text-center' style={{ top: "30%", position: "relative", color: "white" }}>{carousel_tittle}</h1>
          <h5 className='text-center' style={{ top: "35%", position: "relative", color: "white" }}>{carousel_description}</h5>
        </div>
      </div>



      <div className='container flex-wrap my-5 '>
        <h1>Featured</h1>
        <div className='row mx-4 my-3 '>
          {data.slice(0, 12).map((element, index) => (
            <div className='col-md-3 my-3 ' key={index}>
              <Link href='#' onClick={() => refirect_to_post(element.slug)} style={{ textDecoration: "none" }}>
                <div className="dynamicCardDisplay" >
                  <Image loading='lazy' src={element.image} width={285} height={220} className="card-img-top" alt={element.blogtitle} />
                  <div className="card-body">
                    <h6 className='dynamicCardText'>{element.category}</h6>
                    <h6 className='dynamicCardText'>{element.blogtitle}</h6>
                    <p className='dynamicCardText'>{element.author}</p>
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

Category.requireNavbarAndFooter = true;
export default Category


export async function getServerSideProps(context) {

  try {
    const { category } = context.query;

    const headers = new Headers();
    headers.append("X-Api-Key", "6706d6eb-e6ae-48ae-ad82-9e4c0ac50e96");
    const res = await fetch(`http://13.233.72.215:4001/category/${category}`, {
      headers: headers,
      timeout: 0,

    });
    const data = await res.json()
    // console.log(data)

    return { props: { data } }
  }
  catch (error) {
    // console.error(error);
    return { props: {} }
  }
}
