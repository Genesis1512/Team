import React, { useState } from 'react';
import '../CSS/team.css';
import teamImage1 from '../images/team1.png';
import teamImage2 from '../images/team2.png';

const teamMembers = {
  Director: [{ name: 'John Doe', position: 'Chief Executive', image: teamImage1 }],
  Operations: [{ name: 'Jane Smith', position: 'Operations Manager', image: teamImage2 }],
  Sales: [{ name: 'Mark Lee', position: 'Sales Head', image: teamImage1 }],
  Marketing: [{ name: 'Emily Davis', position: 'Marketing Specialist', image: teamImage2 }],
  Services: [{ name: 'Tom Wilson', position: 'Customer Service Head', image: teamImage1 }],
  Rentals: [{ name: 'Lucy Brown', position: 'Rental Manager', image: teamImage2 }],
};

function Team() {
  const [selectedDepartment, setSelectedDepartment] = useState('Director');

  const handleDepartmentClick = (department) => {
    setSelectedDepartment(department);
  };

  return (
    <div className="team-page">
      <h1 className="team-heading">Meet Our Team</h1>
      <div className="team-buttons">
        {Object.keys(teamMembers).map((department) => (
          <button
            key={department}
            onClick={() => handleDepartmentClick(department)}
            className={`team-button ${selectedDepartment === department ? 'active' : ''}`}
          >
            {department}
          </button>
        ))}
      </div>
      <div className="team-cards">
        {teamMembers[selectedDepartment].map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.image} alt={`${member.name}`} className="team-member-image" />
            <h3 className="team-member-name">{member.name}</h3>
            <p className="team-member-position">{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
