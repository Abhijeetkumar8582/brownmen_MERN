
import Image from 'next/legacy/image';
import blog from './JSON/Blog.json'
import stories from './JSON/NewStories.json'

import Link from 'next/link'
import { useRouter } from 'next/router'


export default function Home({data}) {
  const router = useRouter()

  const handleCLick = (slug) => {
    // console.log(process.env.REACT_APP_API,"tesrt")
    router.push({
      pathname: 'articles/Post',
      query: { pid: slug },

    })
  }

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
              <Link href='/' onClick={() => handleCLick(element.slug)} style={{ textDecoration: "none" }}>
              <div className="dynamicCardDisplay" style={{maxWidth:"450px",width:"100%"}} >
                  <Image loading='lazy' className="" src="https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width={508} layout="responsive" height={600} alt="Card image cap" />
                  <div className="card-body">
                    <p className="card-text" style={{color:"black"}}>8 Things Dietitians Do Every Day to Keep Their Sugar Intake Under Control</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
          <div className="col">
            <div className="row my-3">
              {blog.slice(0, 4).map((element, index) => (
                <div className="col-md-5 mb-4 " key={index}>
                  <Link href='/' onClick={() => handleCLick(element.slug)} style={{ textDecoration: "none" }}>
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
        </div>
      </div>



      {/* Category display */}
      <div className='Spotlight'>
        <div className='container flex-wrap '>
          <h1>By Category</h1>
          <div className='row mx-4 my-3 '>
            {stories.slice(0, 4).map((element, index) => (
              <div className='col-md-3 my-3 ' key={index}>
                <Link href='' onClick={() => handleCLick(element.slug)} style={{ textDecoration: "none" }}>
                  <div className="card" style={{ maxWidth: "18rem", border: "none", width: "100%", maxHeight: "400px", height: "100%" }}>
                    <Image loading='lazy' width={285} height={350} src={element.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h6 className='dynamicCardText'>{element.category}</h6>
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
          {data.slice(0, 12).map((element, index) => (
            <div className='col-md-3 my-3 ' key={index}>
              <Link href='/' onClick={() => handleCLick(element.slug)} style={{ textDecoration: "none" }}>
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



export async function getServerSideProps(context) {
  
  const headers = new Headers();
  headers.append("X-Api-Key", "6706d6eb-e6ae-48ae-ad82-9e4c0ac50e96");
  const res = await fetch(`http://localhost:4000/category/all_blog`,{
    headers: headers,
  });

  const data = await res.json()
  console.log(data)

  return { props: { data } }
}