import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import './Employee.css'


const Employee = (props) => {
    function favorite() {
        props.favEmployee(props.idEmp)
    }

    const propsfavorite = {
        size: 25,
        onClick: favorite,
        cursor: 'pointer'
    }
    return (<div className='employee'>
        <AiFillCloseCircle
            size={25}
            className='delete'
            onClick={() => props.deleteEmployee(props.idEmp)}
        />
        <div className='header' style={{ backgroundColor: props.bgcolor }}>
            <img src={props.image} alt={props.image} />
        </div>
        <div className='info'>
            <h4>{props.name}</h4>
            <h5>{props.position}</h5>
            <div className='favorite'>
                {props.employee.favorite
                    ? <AiFillHeart {...propsfavorite} color='#ff0000'/>
                    : <AiOutlineHeart {...propsfavorite} />
                }
            </div>
        </div>
    </div>)
}

export default Employee