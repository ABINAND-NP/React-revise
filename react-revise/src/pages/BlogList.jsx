import { Link  } from "react-router-dom"

const BlogList = () => {

    const blogs = [
        {id : "1" , name : "Django"},
        {id : '2' , name : "Python"}
    ]

    return (
        <div className="blogList">
            <h1>BlogList</h1>
            {
                blogs.map((blog,index) => (                    
                    <div>
                       ({index + 1 }) <Link to={`/blog/${blog.id}`} >{blog.name} </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default BlogList