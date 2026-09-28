import React from "react"
const Select = (props) => {

    //jsx => javascript xml : writing html using javascript
    return(
        <React.Fragment>
            <label >{props.label}</label>
            <select onChange={(event) => alert(event.target.value)
            }>
                {
                    props.options.map((option) => (
                        <option value={option.value} >{option.label}</option>
                    ))
                }        
            </select>

        </React.Fragment>
    )
}

export default Select