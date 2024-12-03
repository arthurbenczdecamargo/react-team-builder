import './List.css'

const List = (props) => {
    return (
        <div className="list">
            <label>{props.label}</label>
            <select onChange={event => props.change(event.target.value)} required={props.validation}>
                <option value=''></option>
                {props.teams.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default List