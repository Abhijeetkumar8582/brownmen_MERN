
import Image from 'next/legacy/image';
import Link from 'next/link'
import { useRouter } from 'next/router';
import Head from 'next/head'



function HomePage({ data }) {


  const router = useRouter()
  console.log({ data }, "home")
  const handleCLick = (blog_slug) => {
    router.push({
      pathname: 'articles/Post',
      query: { blog_slug: blog_slug },

    })
  }

  const onNavbarClick = (category) => {
    router.push({
      pathname: '/articles/category',
      query: { category: category }
    })
  }

  const category = [
    {
      "key": "https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "heading": "Nutrition"
    }, {
      "key": "https://images.pexels.com/photos/1998920/pexels-photo-1998920.jpeg",
      "heading": "Fitness"
    }, {
      "key": "https://images.pexels.com/photos/5648355/pexels-photo-5648355.jpeg?auto=compress&cs=tinysrgb&w=800",
      "heading": "Health"
    }, {
      "key": "https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "heading": "yoga"
    }
  ]

  return (

    <>
      <Head>
        <title> Brownmen</title>
      </Head>

      <div className='container carousel_index' >
        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div id="carousel" className="carousel-item  active" data-bs-interval="10000">
              <img src="https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100" width={500} height={500} alt="https://imexed" />
              <div className="carousel-caption d-none d-md-block">
                <h1 style={{ color: "white", textAlign: "Center" }}>Get Fit and Strong: Tips and Workouts for a Healthy Lifestyle</h1>
                <p style={{ color: "white", textAlign: "Center" }}> We share workout plans, nutrition advice, and tips on how to stay motivated</p>
              </div>
            </div>
            <div id="carousel" className="carousel-item" data-bs-interval="2000">
              <img src="https://images.pexels.com/photos/3049225/pexels-photo-3049225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100" width={500} height={500} alt="https://imag750&dpr=2" />
              <div className="carousel-caption d-none d-md-block">
                <h1 style={{ color: "white", textAlign: "Center" }}>Yoga Mind and Body: A Holistic Guide to Wellness</h1>
                <p style={{ color: "white", textAlign: "Center" }}>Offers a holistic approach to yoga, including tips for developing a strong mind-body connection, meditation techniques, and nutrition advice.</p>
              </div>
            </div>
            <div id="carousel" className="carousel-item" >
              <img src="https://images.pexels.com/photos/3622474/pexels-photo-3622474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100" width={500} height={500} alt="https://images.pe750&dpr=2" />
              <div className="carousel-caption d-none d-md-block">
                <h1 style={{ color: "white", textAlign: "Center" }}>Healthy Habits, Healthy You: A Nutrition Guide for Optimal Health</h1>
                <p style={{ color: "white", textAlign: "Center" }}>Includes articles on the importance of vitamins and minerals, tips for meal planning, and recipe ideas.</p>
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
      </div>




      {/* Fit display */}
      <div className="container my-5 ">
        <h3>Trending</h3>
        <div className="row mx-5 ">
          {data.filter((element) => element.category === "Fitness").slice(0, 1).map((element, index) => (
            <div className="col-auto my-3 " key={index} >
              <Link href='#' onClick={() => handleCLick(element.slug)} style={{ textDecoration: "none" }}>
                <div className="dynamicCardDisplay" style={{ maxWidth: "650px", width: "100%" }} >
                  <Image loading='lazy' className="" src={element.image} width={358} layout="responsive" height={500} alt={element.image} />
                  <div className="card-body">
                    <p className="card-text" style={{ color: "black" }}>{element.blogtitle}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
          <div className="col">
            <div className="row my-3">
              {data.filter((element) => element.category === "Yoga").slice(0, 4).map((element, index) => (
                <div className="col-md-5 mb-4 " key={index}>
                  <Link href='#' onClick={() => handleCLick(element.slug)} style={{ textDecoration: "none" }}>
                    <div className="dynamicCardDisplay" >
                      <Image loading='lazy' src={element.image} width={285} height={220} className="card-img-top" alt={element.image} />
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
          <h3>By Category</h3>
          <div className='row mx-4 my-3 '>
            {category.map((element, index) => (
              <div className='col-md-3 my-3 ' key={index}>
                <Link href='#' onClick={() => onNavbarClick(element.heading)} style={{ textDecoration: "none" }}>
                  <div className="card" style={{ maxWidth: "18rem", border: "none", width: "100%", maxHeight: "400px", height: "100%" }}>
                    <Image loading='lazy' width={285} height={350} src={element.key} className="card-img-top" alt={element.image} />
                    <div className="card-body">
                      <h6 className='dynamicCardText'>{element.heading}</h6>
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
        <h3>Top Stories</h3>
        <div className='row mx-4 my-3 '>
          {data.slice(0, 12).map((element, index) => (
            <div className='col-md-3 my-3 ' key={index}>
              <Link href='#' onClick={() => handleCLick(element.slug)} style={{ textDecoration: "none" }}>
                <div className="dynamicCardDisplay" >
                  <Image loading='lazy' src={element.image} width={285} height={220} className="card-img-top" alt={element.image} />
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
HomePage.requireNavbarAndFooter = true;

export default HomePage;

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