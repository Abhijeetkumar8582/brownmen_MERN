import React from 'react';
import blog from '../JSON/Blog.json'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'


function Category({ response }) {
  const router = useRouter()

  const handleCLick = (slug) => {
    console.log(slug)
    router.push({
      pathname: '/articles/Post',
      query: { pid: slug },

    })
  }
  console.log(response)
  return (
    <>


      <div className='my-5'></div>
      <div className='row '>
        <div className='col'>
          <img src="https://images.pexels.com/photos/235922/pexels-photo-235922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" style={{ width: "100%", height: "100%" }} height={500} alt="https://images.pe750&dpr=2" />
        </div>
        <div className='col' style={{ backgroundColor: "#C4B05D" }}>
          <h1 className='text-center' style={{ top: "30%", position: "relative", color: "wheat" }}>I Want to Eat<br /> Better</h1>
          <h6 className='text-center' style={{ top: "30%", position: "relative", color: "wheat" }}>Ready to take charge of your diet? These nutrition-focused guides, tips and recipes will set you up for success.</h6>
        </div>
      </div>





      <div className='container flex-wrap my-5 '>
                <h1>Fitness</h1>
                <div className='row mx-4 my-3 '>
                    {blog.slice(0, 12).map((element, index) => (
                        <div className='col-md-3 my-3 ' key={index}>
                            <Link href='#' onClick={() => handleCLick(element.slug)} style={{ textDecoration: "none" }}>
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