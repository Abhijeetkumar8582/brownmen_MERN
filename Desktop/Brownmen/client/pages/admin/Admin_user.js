import React, { useState } from 'react'

function Admin_user(props) {
    const [getTime, setTime] = useState(new Date())
    const [blog, setBlog] = useState("")
    const [blogtitle, setBlogtitle] = useState("")
    const [blogauthor, setauthor] = useState("")
    const [blogimage, setimage] = useState("")
    const [blogcategory, setcategory] = useState("")
    const [blogdesckey, setblogdescKey] = useState('')

    const [divCounters, setDivCounters] = useState({});
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

    const blogeventChange = (event) => {
        setBlog(event.target.value)

    }
    const blogtitleEventChange = (event) => {
        setBlogtitle(event.target.value)

    }
    const blogCategoryeventChange = (event) => {
        setcategory(event.target.value)

    }
    const blogauthoreventChange = (event) => {
        setauthor(event.target.value)
    }
    const blogImageeventChange = () => {
        setimage(event.target.value)
    }
    const expandDiv = () => {
        setDivCounters(divCounters+1);
    };

    const renderDivs = () => {
        return Object.entries(divCounters).map(([str, count]) => {
            const divElements = [];
            for (let i = 1; i <= count; i++) {
                const handleDelete = () => {
                    const newCounter = (divCounters[str] || 0) - 1;
                    console.log(newCounter)
                    const newDivCounters = { ...divCounters, [str]: newCounter };
                    console.log(newDivCounters)
                    setDivCounters(newDivCounters);
                }
                divElements.push(
                    <div key={`${str}-${i}`} className="d-flex justify-content-around">
                       <textarea  style={{ width: "150px",height:"50px" }}/>
                        <textarea
                            type="email"
                            className="value my-3  w-100"
                            style={{ width: "500px", overflowWrap: "break-word" }}
                            id={`exampleFormControlInput2-${str}-${i}`}
                            placeholder={props.str}
                        />
                        <button onClick={handleDelete} style={{ width: "20px", height: "20px", border: "none" }}>🗑️</button>
                    </div>
                );
            }
            return divElements;
        });
    };
    
    const submit = () => {
        const blogdescArr = [];
        Object.entries(divCounters).forEach(([str, count]) => {
          for (let i = 1; i <= count; i++) {
            const textareaValue = document.getElementById(`exampleFormControlInput2-${str}-${i}`).value;
            blogdescArr.push(textareaValue);
          }
        })
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
                    <input type="email" className="my-3" style={{ width: "500px" }} onChange={blogeventChange} id="exampleFormControlInput1" placeholder="Blog_ID" />
                </div>
                <div className='d-flex justify-content-between'>
                    <h4>Blog Title</h4>
                    <input type="email" className="my-3" style={{ width: "500px" }} id="exampleFormControlInput1" onChange={blogtitleEventChange} placeholder="Blog Title" />
                </div>
                <div className='d-flex justify-content-between my-3'>
                    <h4>Category</h4>
                    <select id="cars" style={{ width: "500px" }} onChange={blogCategoryeventChange} name="category my-3">
                        <option value="volvo">Nutrition</option>
                        <option value="saab">Yoga</option>
                        <option value="fiat">Fitness</option>
                        <option value="audi">Health</option>
                    </select>
                </div>
                <div className='d-flex justify-content-between'>
                    <h4>Author</h4>
                    <input type="email" className="my-3" onChange={blogauthoreventChange} style={{ width: "500px" }} id="exampleFormControlInput1" placeholder="Author" />
                </div>
                <div className='d-flex justify-content-between'>
                    <h4>Date</h4>
                    <input type="email" disabled className="my-3" style={{ width: "500px" }} value={getTime} id="exampleFormControlInput1" placeholder="Author" />
                </div>
                <div className='d-flex justify-content-between'>
                    <h4>Image</h4>
                    <input type="email" className="my-3" style={{ width: "500px" }} onChange={blogImageeventChange} id="exampleFormControlInput1" placeholder="Author" />
                </div>
                <div className='d-flex justify-content-between'>
                    <h4>Blog Description</h4>
                </div>
                <div className='container '>
                <button onClick={expandDiv} className='justify-content-center' style={{width:"50vw"}} >Create DIV</button>
                </div>
                <div className='conatainer'>
                    {renderDivs()} 
                    <button type="button" className="btn btn-success text-center" onClick={submit}>Submit</button>
                </div>




            </div>
        </>
    )
}

export default Admin_user
