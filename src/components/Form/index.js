import { useState } from 'react'
import './Form.css'
import Field from '../Field';
import List from '../List';
import Button from '../Button';

const Form = (props) => {

    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')
    const [selectedTeam, setSelectedTeam] = useState('')
    const [nameTeam, setNameTeam] = useState('')
    const [colorTeam, setColorTeam] = useState('')

    const saveEmployee = (event) => {
        event.preventDefault()
        props.registerEmployee({
            name: name.toUpperCase(),
            position: position.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" "),
            image,
            team: selectedTeam
        })
        setName('')
        setPosition('')
        setImage('')
        setTeam('')
    }

    const saveTeam = (event) => {
        event.preventDefault()
        props.createTeam({
            name: nameTeam,
            color: colorTeam
        })
        setNameTeam('')
        setColorTeam('')
    }

    return (
        <section className='form'>
            <form onSubmit={saveEmployee}>
                <h2>Insert employee information</h2>
                <Field
                    validation={true}
                    type='text'
                    label="Name"
                    placeholder="Insert name"
                    value={name}
                    change={value => setName(value)}
                />
                <Field
                    validation={true}
                    type='text'
                    label="Position"
                    placeholder="Insert position"
                    value={position}
                    change={value => setPosition(value)}
                />
                <Field
                    validation={true}
                    type='text'
                    label="Image URL"
                    placeholder="Insert image url"
                    value={image}
                    change={value => setImage(value)}
                />
                <List
                    validation={true}
                    label="Select team"
                    teams={props.teams}
                    value={team}
                    change={value => setSelectedTeam(value)}
                />
                <Button>
                    Create Card
                </Button>
            </form>
            <form onSubmit={saveTeam}>
                <h2>Create a new team</h2>
                <Field
                    validation={true}
                    type='text'
                    label="Team name"
                    placeholder="Insert team name"
                    value={nameTeam}
                    change={value => setNameTeam(value)}
                />
                <Field
                    validation={true}
                    type='color'
                    label="Color"
                    placeholder="Insert team color"
                    value={colorTeam}
                    change={value => setColorTeam(value)}
                />
                <Button>
                    Create Team
                </Button>
            </form>
        </section>
    )
}

export default Form