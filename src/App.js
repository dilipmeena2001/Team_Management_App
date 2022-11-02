import './App.css';
import Employees from './components/Employees';
import Footer from './components/Footer';
import Header from './components/Header';
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GroupedTeamMembers from './components/GroupedTeamMembers';
import Nav from './components/Nav';
import NotFound from './components/NotFound';

function App() {

    const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem("selectedTeam")) || "TeamB")

    const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem("employeeList")) || [{
        id: 1,
        fullName: "Aakash kumar",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "TeamA"
    },
    {
        id: 2,
        fullName: "Kashish Sharma",
        designation: "Node Developer",
        gender: "female",
        teamName: "TeamA"
    },
    {
        id: 3,
        fullName: "Neha Yadav",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA"
    },
    {
        id: 4,
        fullName: "Lakshay Jeet",
        designation: "React Developer",
        gender: "male",
        teamName: "TeamB"
    },
    {
        id: 5,
        fullName: "Hukam Singh Meena",
        designation: "DotNet Developer",
        gender: "male",
        teamName: "TeamB"
    },
    {
        id: 6,
        fullName: "Pratibha Yadav",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "TeamB"
    },
    {
        id: 7,
        fullName: "Aman Chalia",
        designation: "Angular Developer",
        gender: "male",
        teamName: "TeamC"
    },
    {
        id: 8,
        fullName: "Garima Kanoujia",
        designation: "API Developer",
        gender: "female",
        teamName: "TeamC"
    },
    {
        id: 9,
        fullName: "Riya Kunawat",
        designation: "C++ Developer",
        gender: "female",
        teamName: "TeamC"
    },
    {
        id: 10,
        fullName: "Deepak Arora",
        designation: "Python Developer",
        gender: "male",
        teamName: "TeamD"
    },
    {
        id: 11,
        fullName: "Lalit Bhatia",
        designation: "Vue Developer",
        gender: "male",
        teamName: "TeamD"
    },
    {
        id: 12,
        fullName: "Mayank Bansal",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "TeamD"
    }])

    useEffect(() => {
        localStorage.setItem("employeeList", JSON.stringify(employees))
    }, [employees])

    useEffect(() => {
        localStorage.setItem("selectedTeam", JSON.stringify(selectedTeam))
    }, [selectedTeam])

    function handleTeamSelectionChange(event) {
        setTeam(event.target.value)
    }
    function handleEmployeeCardClick(event) {
        const transformedEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id) ?
            (employee.teamName === selectedTeam) ?
                { ...employee, teamName: "" } : { ...employee, teamName: selectedTeam }
            : employee
        )

        setEmployees(transformedEmployees)
    }
    return (<Router>
        <Nav/>
        <Header selectedTeam={selectedTeam}
            teamMemberCount={employees.filter((employee) => employee.teamName === selectedTeam).length}
        />
        <Routes>
            <Route path='/' element={<Employees employees={employees} selectedTeam={selectedTeam} handleTeamSelectionChange={handleTeamSelectionChange}
                handleEmployeeCardClick={handleEmployeeCardClick} />
            }>
            </Route>
            <Route path='/GroupedTeamMembers' element={<GroupedTeamMembers employees={employees} selectedTeam={selectedTeam} setTeam={setTeam} />}></Route>
            <Route path='*' element={<NotFound/>}></Route>
        </Routes>
        <Footer />
    </Router>

    );
}

export default App;
