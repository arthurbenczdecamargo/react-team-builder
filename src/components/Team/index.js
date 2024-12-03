import Employee from '../Employee'
import './Team.css'
import hexToRgba from 'hex-to-rgba'

const Team = (props) => {
    return (
        props.employees.length > 0 && <section className="team" style={{ backgroundImage: 'url(/images/bg.png)', backgroundColor: hexToRgba(props.color, '0.6') }}>
            <input onChange={event => props.changeColor(event.target.value, props.idTeam)} value={props.color} type='color' className='input-color'></input>
            <h3 style={{ borderColor: props.color }}>{props.name}</h3>
            <div className='employees'>
                {props.employees.map((employee, index) => {
                    return <Employee className='employee'
                        key={index}
                        idEmp={employee.idEmp}
                        employee={employee}
                        bgcolor={props.color}
                        name={employee.name}
                        position={employee.position}
                        team={props.name}
                        image={employee.image}
                        deleteEmployee={props.deleteEmployee}
                        favEmployee={props.favEmployee}
                    />
                })}
            </div>
        </section>
    )
}

export default Team