import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Head from 'next/head'




function NoPost() {
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
    const router = useRouter()
    const onNavbarClick = (category) => {
        router.push({
            pathname: '/articles/category',
            query: { category: category }
        })
    }
    return (
        <>
            <Head>
                <title> No Post</title>

                <meta property="og:title" content="Brownmen" />
                <meta property="og:description" content={category[0].heading} />
                <meta property="og:image" content={category[0].key} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="628" />
                <meta property="og:url" content="https://brownmen.netlify.app" />
                <meta property="og:type" content="website" />
            </Head>

            <div className='container'>
                <h1 className='text-center my-5'>Looks like we didn't find any results for that</h1>
                <h4 className='text-center my-5'>Search by category</h4>
                <div className='row'>
                    {category.map((element, index) => (
                        <div className='col-md-3 my-3 ' key={index}>
                            <Link href='#' onClick={() => onNavbarClick(element.heading)} style={{ textDecoration: "none" }}>
                                <div className="card" style={{ maxWidth: "18rem", border: "none", width: "100%", maxHeight: "400px", height: "100%" }}>
                                    <Image loading='lazy' width={385} height={350} src={element.key} className="card-img-top" alt={element.image} />
                                    <div className="card-body">
                                        <h6 className='dynamicCardText'>{element.heading}</h6>
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

NoPost.requireNavbarAndFooter = true;
export default NoPost