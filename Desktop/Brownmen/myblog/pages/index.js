import Head from 'next/head'
import Image from 'next/legacy/image';
import blog from './JSON/Blog.json'
import stories from './JSON/NewStories.json'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [getData, setData] = useState([])

  const router = useRouter()

  useEffect(() => {
    fetch('https://reqres.in/api/users?page=2')
      .then((response) => response.json())
      .then((data) => {
        setAPIS(data.data)
      })
  })
  const [getAPIS, setAPIS] = useState([])



  const handleCLick = (id) => {
    console.log(id)
    router.push({
      pathname: 'Component/Post',
      query: { pid: id },

    })
  }



  // const handleCLick = (id) => {
  //   console.log(id)
  // }
  return (

    <>
      <div className='my-5'></div>
      {/* Carousel display */}
      {/* <div className='container'> */}
        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100" width={500} height={500} alt="https://imexed" />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100" width={500} height={500} alt="https://imag750&dpr=2" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://images.pexels.com/photos/235922/pexels-photo-235922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100" width={500} height={500} alt="https://images.pe750&dpr=2" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      {/* </div> */}


      

      {/* Fit display */}
      <div className="container my-5 ">
        <h1>Fit</h1>
        <div className="row mx-5 ">
          {blog.slice(0, 1).map((element, index) => (
            <div className="col-auto my-3 " key={index} >
              <Link href='/' onClick={() => handleCLick(element.id)} style={{ textDecoration: "none" }}>
              <div className="dynamicCardDisplay" style={{maxWidth:"450px",width:"100%"}} >
                  <Image loading='lazy' className="" src="https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width={508} layout="responsive" height={600} alt="Card image cap" />
                  <div className="card-body">
                    <p className="card-text">8 Things Dietitians Do Every Day to Keep Their Sugar Intake Under Control</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
          <div className="col">
            <div className="row my-3">
              {blog.slice(0, 4).map((element, index) => (
                <div className="col-md-5 mb-4 " key={index}>
                  <Link href='/' onClick={() => handleCLick(element.id)} style={{ textDecoration: "none" }}>
                   <div className="dynamicCardDisplay" >
                      <Image loading='lazy' src={element.image} width={285} height={220} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className='dynamicCardText'>{element.title}</h5>
                      </div>
                    </div>
                    </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>



      {/* Category display */}
      <div className='Spotlight'>
        <div className='container flex-wrap '>
          <h1>By Category</h1>
          <div className='row mx-4 my-3 '>
            {stories.slice(0, 4).map((element, index) => (
              <div className='col-md-3 my-3 ' key={index}>
                <Link href='' onClick={() => handleCLick(element.id)} style={{ textDecoration: "none" }}>
                  <div className="card" style={{ maxWidth: "18rem", border: "none", width: "100%", maxHeight: "400px", height: "100%" }}>
                    <Image loading='lazy' width={285} height={350} src={element.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className='dynamicCardText'>{element.category}</h5>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Fitnes display */}

      <div className='container flex-wrap my-5 '>
        <h1>Fitness</h1>
        <div className='row mx-4 my-3 '>
          {blog.slice(0, 12).map((element, index) => (
            <div className='col-md-3 my-3 ' key={index}>
              <Link href='/' onClick={() => handleCLick(element.id)} style={{ textDecoration: "none" }}>
               <div className="dynamicCardDisplay" >
                  <Image loading='lazy' src={element.image} width={285} height={220} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h6 className='dynamicCardText'>{element.by}</h6>
                    <h4 className='dynamicCardText'>{element.title}</h4>
                    <p className='dynamicCardText'>{element.reviewed}</p>
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

