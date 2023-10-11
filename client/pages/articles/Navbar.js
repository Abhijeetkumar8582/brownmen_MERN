
import Link from "next/link"
import { useRouter } from 'next/router'


function Navbar() {
  const router = useRouter()

  const onNavbarClick = (category) => {
    router.push({
      pathname: '/articles/category',
      query: { category }
    })
  }
  const seachBar = () => {
    router.push({
      pathname: '/articles/Searchbar'
    })
  }

  return (
    <>

      <nav className="navbar navbar-expand-lg fixed-top " style={{ backgroundColor: "#ebe8e8" }}>
        <div className="container-fluid">
          <Link className="navbar-brand mx-2" href="/">
            <div>
              <img src="/Brownmen_logo.png" width={40} style={{ mixBlendMode: 'darken' }} />
            </div>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 justify-content-center">
              <li className="nav-item">
                <Link className="nav-link  mx-1" aria-current="page" onClick={() => onNavbarClick("Nutrition")} href="#"><b>Nutrition</b></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-1" href="#" onClick={() => onNavbarClick("Fitness")}><b>Fitness</b></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-1" href="#" onClick={() => onNavbarClick("Health")}><b>Health</b></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-1 " href="#" onClick={() => onNavbarClick("Yoga")}><b>Yoga</b></Link>
              </li>
            </ul>
            <button className="searchBtn" onClick={seachBar} type="submit">Search </button>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar