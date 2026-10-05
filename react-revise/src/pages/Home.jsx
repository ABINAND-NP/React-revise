import { useNavigate } from "react-router-dom"
const Home = () => {

    //*) using navigate programaticaly

    const navigate = useNavigate();


    return (
        <div className="home">
            <h1>Home</h1>
            <button onClick={ () => navigate('/blogList')}>BlogList</button>
            <button onClick={ () => navigate('/addBlog') }>AddBlog</button>
            <button onClick={ () => navigate('/favorites')}>Favorites</button>
        </div>
    )
}

export default Home