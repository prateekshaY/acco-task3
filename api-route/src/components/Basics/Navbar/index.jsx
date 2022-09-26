import { Link } from "react-router-dom";

const Navbar = () => {
return(
<>
<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link" to="/">Home</Link>
    <Link className="nav-link" to="posts">Posts</Link>
    <Link className="nav-link" to="#">About US</Link>

      </div>
    </div>
  </div>
</nav>


</>





)
}

export default Navbar;