import './Field.css'

const Field = (props) => {
    const typing = (event) => {
        props.change(event.target.value)
    }
    return (
        <div className={`field field-${props.type}`}>
            <label>{props.label}</label>
            <input 
                type={props.type} 
                value={props.value} 
                onChange={typing} 
                required={props.validation} 
                placeholder={`${props.placeholder}...`}/>
        </div>
    )
}

export default Field