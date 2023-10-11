
import Image from 'next/legacy/image';
import Link from 'next/link'
import { useRouter } from 'next/router';
import Head from 'next/head'



function HomePage({ data }) {

  const router = useRouter()
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
        <meta property="og:title" content="Brownmen" />
        <meta property="og:description" content="Explore our latest blogs on a wide range of topics, including technology, travel, food, and more. Stay up-to-date with our informative and engaging articles that cover the latest trends and insights in these areas." />
        <meta property="og:image" content={category[0].key}/>
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        <meta property="og:url" content="https://brownmen.netlify.app" />
        <meta property="og:type" content="website" />
      </Head>

      <div className=' carousel_index' >
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div id="carouselOne" className="carousel-item  active" data-bs-interval="10000">
              <img src="https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100" width={500} style={{ objectFit: 'cover', width: '100%' }} height={500} alt="https://imexed" />
              <div className="carousel-caption ">
                <h1 style={{ color: "white", textAlign: "Center" }}>Get Fit and Strong: Tips and Workouts for a Healthy Lifestyle</h1>
                <p style={{ color: "white", textAlign: "Center" }}> We share workout plans, nutrition advice, and tips on how to stay motivated</p>
              </div>
            </div>
            <div id="carouselTwo" className="carousel-item" data-bs-interval="2000">
              <img src="https://images.pexels.com/photos/3049225/pexels-photo-3049225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100" width={500} style={{ objectFit: 'cover' }} height={500} alt="https://imag750&dpr=2" />
              <div className="carousel-caption ">
                <h1 style={{ color: "white", textAlign: "Center" }}>Yoga Mind and Body: A Holistic Guide to Wellness</h1>
                <p style={{ color: "white", textAlign: "Center" }}>Offers a holistic approach to yoga, including tips for developing a strong mind-body connection, meditation techniques, and nutrition advice.</p>
              </div>
            </div>
            <div id="carouselThree" className="carousel-item" >
              <img src="https://images.pexels.com/photos/3622474/pexels-photo-3622474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100" width={500} style={{ objectFit: 'cover' }} height={500} alt="https://images.pe750&dpr=2" />
              <div className="carousel-caption">
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


      {/* Category display */}
      <div className='Spotlight'>
        <div className='flex-wrap '>
          <div className='categoryDiv_main_div' >
            {category.map((element, index) => (
              <div className='' key={index} style={{ width: '100%' }}>
                <Link href='#' onClick={() => onNavbarClick(element.heading)} style={{ textDecoration: "none" }}>
                  <div className="categoryDiv">
                    <div className="toastContent">
                      {element.heading.charAt(0).toUpperCase() + element.heading.slice(1)}
                    </div>
                    <div className="toast-icon">
                      <i className="fa fa-external-link" aria-hidden="true"></i>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fit display */}
      <div className="Trending_div" >
        <h3 className='Featured_text_'>Trending</h3>
        <div className="Trending_Main_div">
          {data.filter((element) => element.category === "Yoga").slice(0, 9).map((element, index) => (
            <div className="" key={index}>
              <Link href='#' onClick={() => handleCLick(element.slug)} style={{ textDecoration: "none" }}>
                <div className="card">
                  <div className="image">
                    <Image loading='lazy' src={element.image} width={300} height={150} style={{ borderRadius: '5px 5px 0rem 0rem', objectFit: 'cover' }} alt={element.image} />
                  </div>
                  <div className="content">
                    {/* <Link href='#' onClick={() => handleCLick(element.slug)} style={{ textDecoration: "none" }}> */}
                    <span className="title">
                      {element.blogtitle}
                    </span>
                    {/* </Link> */}

                    <p className="desc">
                      {element.blog_desc[2].text.slice(0, 170).replace("<br/>", " ")}....
                    </p>

                    <button className="action" >
                      Know more
                      <span aria-hidden="true">
                        →
                      </span>
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>


      {/* Fitnes display */}

      <div className='Blog_Container_Head_div' style={{ padding: '2rem' }}>
        <h3 className='Featured_text_'>Top Stories</h3>
        <div className='Blog_Container_Main_div '>
          {data.slice(0, 12).map((element, index) => (
            <div className='' key={index}>
              <Link href='#' onClick={() => handleCLick(element.slug)} style={{ textDecoration: "none" }}>
                <div className="Blog_Container_Main_div_card">
                  <div className="card__img">
                    <Image loading='lazy' src={element.image} style={{ width: '100%', height: '100%', borderRadius: "20px 20px 0px 0px" }} width={300} height={120} alt={element.image} />
                  </div>
                  <div className="card__descr-wrapper">
                    <div>
                      <p className="Blog_Container_Main_div_card__title">
                        {element.blogtitle}
                      </p>
                    </div>
                    <div>
                      <p className="card__descr" >
                        {element.blog_desc[2].text.slice(0, 170).replace("<br/>", " ")}....
                      </p>
                    </div>
                    <div className="card__links">
                      <div>
                        <p className="link">{element.author}</p>
                      </div>
                      <div>
                        <p className="link">#{element.category}</p>
                      </div>
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
HomePage.requireNavbarAndFooter = true;

export default HomePage;

export async function getServerSideProps() {
  console.log("server")
  try {

    const headers = new Headers();
    headers.append("X-Api-Key", "6706d6eb-e6ae-48ae-ad82-9e4c0ac50e96");
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/category/all_blog`, {
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