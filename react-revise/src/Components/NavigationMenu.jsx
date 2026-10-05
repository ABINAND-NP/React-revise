import { Link ,NavLink } from "react-router-dom";

const Nav = () => {
    

    return <div className="nav-condainer">
        <div className="navemenu">
            <NavLink to="/">Home</NavLink>
        </div>
        <div className="navemenu">
            <NavLink to="/blogList">BlogList</NavLink>
        </div>
        <div className="navemenu">
            <NavLink to="/addBlog">AddBlog</NavLink>
        </div>
        <div className="navemenu">
            <NavLink to="/favorites">Favorites</NavLink>
        </div>
    </div>
}

export default Nav