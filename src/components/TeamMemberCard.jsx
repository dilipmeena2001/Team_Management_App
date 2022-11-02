import React from 'react'
import femaleProfile from "../images/femaleProfile.jpg"
import maleProfile from "../images/maleProfile.jpg"

const TeamMemberCard = ({ employee, selectedTeam, handleEmployeeCardClick }) => {
    return (
        <div key={employee.id} id={employee.id} className={(employee.teamName === selectedTeam) ? "card m-2 standout" : "card m-2"} style={{ cursor: "pointer" }} onClick={handleEmployeeCardClick}>
            {(employee.gender === "male") ? <img src={maleProfile} className="card-img-top" alt="maleProfile" />
                                          : <img src={femaleProfile} className="card-img-top" alt="femaleProfile" />}
            <div className='card-body'>
                <h5 className='card-title'>
                    Name: {employee.fullName}
                </h5>
                <p>
                    <b>Designation:</b> {employee.designation}
                </p>
            </div>
        </div>
    )
}

export default TeamMemberCard