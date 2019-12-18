import React, { useState } from 'react';
//import logo from './logo.svg';
import MemberForm from "./components/MemberForm";

import Members from "./components/Members";
import './App.css';


function App() {
  const [teamMembers, setTeamMembers] = useState([])

  const addTeamMember = member => {
   
    const newTeamMember = {
      id:Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    }
    setTeamMembers([...teamMembers, newTeamMember]);
    console.log(teamMembers)
  }
  return (
    <div className="App">
      
      <MemberForm addTeamMember = {addTeamMember}/>
      <div>
        <h2>Members</h2>
        <Members teamMembers={teamMembers}/>
      </div>
    </div>
    
  );
}

export default App;
