import React, { useEffect, useState } from 'react';
import blog from '../JSON/Blog.json'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'


function Category() {

  const router = useRouter()
  const [getCategory, setCategory] = useState(router.query.category)
  const [carousel_tittle, setCarousel_tittle] = useState("")
  const [carousel_description, setCarousel_description] = useState("")
  const [getColor,setColor]=useState("#04A123")
  const [carousel_Image, setCarousel_Image] = useState("")
  const category = router.query.category

  useEffect(() => {
    setCategory(category)
    if (category == "Exercise") {
      setCarousel_tittle("Pushing Your Limits")
      setCarousel_description("Regular exercise improves physical fitness, boosts mood, and reduces the risk of chronic diseases")
      setColor("#04A123")
      setCarousel_Image("https://images.pexels.com/photos/4761663/pexels-photo-4761663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")
    }
    else if (category == "Healthy") {
      setCarousel_tittle("Eating Well for Life")
      setCarousel_description("Maintaining a healthy lifestyle is crucial for overall well-being and longevity")
      setColor("#A27202")
      setCarousel_Image("https://images.pexels.com/photos/4473608/pexels-photo-4473608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")
    }
    else if (category == "Live_well") {
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

  const refirect_to_post = (slug) => {
    console.log(slug)
    router.push({
      pathname: '/articles/Post',
      query: { pid: slug },

    })
  }

  return (
    <>

      <div className='my-5'></div>
      <div className='row '>
        <div className='col'>
          <img src={carousel_Image} style={{ width: "100%", height: "100%" }} height={500} alt="https://images.pe750&dpr=2" />
        </div>
        <div className='col' style={{ backgroundColor: getColor }}>
          <h1 className='text-center' style={{ top: "30%", position: "relative", color: "wheat" }}>{carousel_tittle}</h1>
          <h5 className='text-center' style={{ top: "35%", position: "relative", color: "wheat" }}>{carousel_description}</h5>
        </div>
      </div>



      <div className='container flex-wrap my-5 '>
        <h1>{getCategory}</h1>
        <div className='row mx-4 my-3 '>
          {blog.slice(0, 12).map((element, index) => (
            <div className='col-md-3 my-3 ' key={index}>
              <Link href='#' onClick={() => refirect_to_post(element.slug)} style={{ textDecoration: "none" }}>
                <div className="dynamicCardDisplay" >
                  <Image loading='lazy' src={element.image} width={285} height={220} className="card-img-top" alt="..." />
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


export default Category