import { useParams } from "react-router-dom"
const BlogDetail = () => {

    const params = useParams()

    const id = params.id


    return( 
    <div className="home">
        <p>BlogID : {id} </p>        
    </div>
    )

}

export default BlogDetail