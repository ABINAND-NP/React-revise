
const Button = (props) => {

    return(
        <button 
        className={props.className}
        // onClick={() => alert("Button click")} //directly given function
        onClick={props.handleClick}  // function is passed as props is called callbackprops or render props 
        >{props.text}</button>
    )

}

export default Button