import React, { useState} from 'react';
//import logo from './logo.svg';
import MemberForm from "./components/MemberForm";

import Members from "./components/Members";
import './App.css';


function App() {

 

  const [teamMembers, setTeamMembers] = useState([])
  const [memberToEdit, setMemberToEdit] = useState({})
  // const [editFlag, setEditFlag]=useState(false);

  const addTeamMember = member => {
   
    const newTeamMember = {
      id:Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    }
    //Edit team Member
    // const editTeamMember = {
    //   if (editFlag) {
    //     const editMember = teamMembers.filter(teamMember => teamMember.id === memberToEdit.id)
    //     editMember.name = member.name;
    //     editMember.email = member.email;
    //     editMember.role=member.role;

    //   }
    // }
    setTeamMembers([...teamMembers, newTeamMember]);
    console.log(teamMembers)
  }
  const updateMember = (info) => {
    setMemberToEdit(info);
    // setEditFlag(true);
    console.log(memberToEdit)

  }

  


  return (
    <div className="App">
      
      <MemberForm addTeamMember = {addTeamMember} memberToEdit={memberToEdit} />
      <div>
        <h2>Members</h2>
        <Members teamMembers={teamMembers} updateMember={updateMember}/>
      </div>
    </div>
    
  );
}

export default App;
