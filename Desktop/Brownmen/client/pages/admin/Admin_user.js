import React, { useState } from 'react'

function Admin_user() {
    const [getTime, setTime] = useState(new Date())
    const [heading, setheading] = useState(1)
    const [numDiv, setDiv] = useState(1)

    setTimeout(() => {
        const options = {
            month: 'numeric',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true,
        };
        setTime(new Date().toLocaleString('en-US', options));
    }, 1000);
    const [lastSelected, setlastSelected] = useState({
        topHeading: 1,
        heading: 1,
        tittle: 1,
        image: 1
    })

    function handleSelectChange(event) {
        console.log(event)
        setheading (event)
       
    }

    const expandDiv = () => {
        setDiv(numDiv + 1);
        setlastSelected(lastSelected.heading+1)

    }
    return (
        <>
            <nav className="navbar bg-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand " href="#">Brownmen</a>
                </div>
            </nav>




            <div className='container my-5'>
                <div className='d-flex justify-content-between'>
                    <h4>Blog ID</h4>
                    <input type="email" className="my-3" style={{ width: "500px" }} id="exampleFormControlInput1" placeholder="Blog_ID" />
                </div>
                <div className='d-flex justify-content-between'>
                    <h4>Blog Title</h4>
                    <input type="email" className="my-3" style={{ width: "500px" }} id="exampleFormControlInput1" placeholder="Blog Title" />
                </div>
                <div className='d-flex justify-content-between my-3'>
                    <h4>Category</h4>
                    <select id="cars" style={{ width: "500px" }} name="category my-3">
                        <option value="volvo">Nutrition</option>
                        <option value="saab">Yoga</option>
                        <option value="fiat">Fitness</option>
                        <option value="audi">Health</option>
                    </select>
                </div>
                <div className='d-flex justify-content-between'>
                    <h4>Author</h4>
                    <input type="email" className="my-3" style={{ width: "500px" }} id="exampleFormControlInput1" placeholder="Author" />
                </div>
                <div className='d-flex justify-content-between'>
                    <h4>Date</h4>
                    <input type="email" disabled className="my-3" style={{ width: "500px" }} value={getTime} id="exampleFormControlInput1" placeholder="Author" />
                </div>
                <div className='d-flex justify-content-between'>
                    <h4>Image</h4>
                    <input type="email" className="my-3" style={{ width: "500px" }} id="exampleFormControlInput1" placeholder="Author" />
                </div>
                <div className='d-flex justify-content-between'>
                    <h4>Blog Description</h4>
                </div>



                {[...Array(numDiv)].map((element, index) => (
                    <div className='d-flex justify-content-between' key={index}> 
                        <select id="cars" className='my-2' style={{ width: "300px" }} name="category my-3"
                            onChange={ handleSelectChange}>
                            <option value={`topHeading${lastSelected.topHeading}`}>topHeading{lastSelected.topHeading}</option>
                            <option value={`title${lastSelected.tittle}`}>title{lastSelected.tittle}</option>
                            <option value={`heading${lastSelected.heading}`}>heading{lastSelected.heading}</option>
                            <option value={`image${lastSelected.image}`}>image{lastSelected.image}</option>
                        </select>
                        <textarea
                            type="email"
                            className="value my-3"
                            style={{ width: "500px", overflowWrap: "break-word" }}
                            id={`exampleFormControlInput2-`}
                            placeholder="Author"
                        />
                        <button
                            style={{ width: "50px", height: "50px" }}
                            onClick={() => expandDiv()}
                        >
                            +
                        </button>
                    </div>
                ))}

            </div>
        </>
    )
}

export default Admin_user