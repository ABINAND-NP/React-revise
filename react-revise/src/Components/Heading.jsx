
//props = input to the component. 
// we can gave any data type as a prope that support javascript .
// we can gave any amount fo data as props

const Heading = (props) => {
    console.log("Props",props)
    return(
        <div>       
        <h1>{props.heading_text} - {props.name} - {props.age} </h1>
        
        </div>
       
    )
}

export default Heading