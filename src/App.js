import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [teams, setTeams] = useState([
    {
      idTeam: uuidv4(),
      favorite: false,
      name: 'Programming',
      color: '#57C278'
    },
    {
      idTeam: uuidv4(),
      favorite: false,
      name: 'Front-End',
      color: '#82CFFA'
    },
    {
      idTeam: uuidv4(),
      favorite: false,
      name: 'Back-End',
      color: '#A6D157'
    },
    {
      idTeam: uuidv4(),
      favorite: false,
      name: 'Data Science',
      color: '#E06B69'
    },
    {
      idTeam: uuidv4(),
      favorite: false,
      name: 'DevOps',
      color: '#D86EBF'
    },
    {
      idTeam: uuidv4(),
      favorite: false,
      name: 'UX & Design',
      color: '#FEBA05'
    },
    {
      idTeam: uuidv4(),
      favorite: false,
      name: 'Mobile',
      color: '#FF8A29'
    }
  ])

  const initial = [
    {
      idEmp: uuidv4(),
      name: 'ARTHUR CAMARGO',
      position: 'Software Engineering Student',
      image: 'https://github.com/arthurbenczdecamargo.png',
      team: teams[0].name
    },
    {
      idEmp: uuidv4(),
      name: 'DANIEL ARTINE',
      position: 'Software Engineer and Alura Instructor',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[0].name
    },
    {
      idEmp: uuidv4(),
      name: 'GUILHERME LIMA',
      position: 'Web Developer and Alura Instructor',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[0].name
    },
    {
      idEmp: uuidv4(),
      name: 'ARTHUR CAMARGO',
      position: 'Software Engineering Student',
      image: 'https://github.com/arthurbenczdecamargo.png',
      team: teams[1].name
    },
    {
      idEmp: uuidv4(),
      name: 'DANIEL ARTINE',
      position: 'Software Engineer and Alura Instructor',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[1].name
    },
    {
      idEmp: uuidv4(),
      name: 'GUILHERME LIMA',
      position: 'Web Developer and Alura Instructor',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[1].name
    },
    {
      idEmp: uuidv4(),
      name: 'ARTHUR CAMARGO',
      position: 'Software Engineering Student',
      image: 'https://github.com/arthurbenczdecamargo.png',
      team: teams[2].name
    },
    {
      idEmp: uuidv4(),
      name: 'DANIEL ARTINE',
      position: 'Software Engineer and Alura Instructor',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[2].name
    },
    {
      idEmp: uuidv4(),
      name: 'GUILHERME LIMA',
      position: 'Web Developer and Alura Instructor',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[2].name
    },
    {
      idEmp: uuidv4(),
      name: 'ARTHUR CAMARGO',
      position: 'Software Engineering Student',
      image: 'https://github.com/arthurbenczdecamargo.png',
      team: teams[3].name
    },
    {
      idEmp: uuidv4(),
      name: 'DANIEL ARTINE',
      position: 'Software Engineer and Alura Instructor',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[3].name
    },
    {
      idEmp: uuidv4(),
      name: 'GUILHERME LIMA',
      position: 'Web Developer and Alura Instructor',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[3].name
    },
    {
      idEmp: uuidv4(),
      name: 'ARTHUR CAMARGO',
      position: 'Software Engineering Student',
      image: 'https://github.com/arthurbenczdecamargo.png',
      team: teams[4].name
    },
    {
      idEmp: uuidv4(),
      name: 'DANIEL ARTINE',
      position: 'Software Engineer and Alura Instructor',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[4].name
    },
    {
      idEmp: uuidv4(),
      name: 'GUILHERME LIMA',
      position: 'Web Developer and Alura Instructor',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[4].name
    },
    {
      idEmp: uuidv4(),
      name: 'ARTHUR CAMARGO',
      position: 'Software Engineering Student',
      image: 'https://github.com/arthurbenczdecamargo.png',
      team: teams[5].name
    },
    {
      idEmp: uuidv4(),
      name: 'DANIEL ARTINE',
      position: 'Software Engineer and Alura Instructor',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[5].name
    },
    {
      idEmp: uuidv4(),
      name: 'GUILHERME LIMA',
      position: 'Web Developer and Alura Instructor',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[5].name
    }
  ]

  const [employees, setEmployees] = useState(initial);

  function registerEmployee(newEmployee) {
    setEmployees([...employees, { ...newEmployee, idEmp: uuidv4() }])
  }

  function deleteEmployee(idEmp) {
    setEmployees(employees.filter(employee => employee.idEmp !== idEmp))
    console.log(idEmp)
  }

  function changeColor(color, idTeam) {
    setTeams(teams.map(team => {
      if (team.idTeam === idTeam) {
        team.color = color
      }
      return team
    }))
  }

  function createTeam(newTeam) {
    setTeams([...teams, { ...newTeam, idTeam: uuidv4() }])
  }

  function favEmployee(idEmp) {
    setEmployees(employees.map(employee => {
      if (employee.idEmp === idEmp) {
        employee.favorite = !employee.favorite
      }
      return employee
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Form
        teams={teams.map(team => team.name)}
        registerEmployee={registerEmployee}
        createTeam={createTeam}
      />
      {teams.map((team) =>
        <Team
          favEmployee={favEmployee}
          changeColor={changeColor}
          key={team.idTeam}
          name={team.name}
          color={team.color}
          employees={employees.filter(employee => employee.team === team.name)}
          deleteEmployee={deleteEmployee}
          idTeam={team.idTeam}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
