import React from "react";

function Members(props){
    
    if (!props.teamMembers) return (<div>No Members are added yet</div>)
    return (
        <div className="team-container">
            {props.teamMembers.map( teamMember => (
                <div key={teamMember.id} className="team-member">
                    
                    <h2>{teamMember.name}</h2>
                    
                    <p>
                        {teamMember.email}
                    </p>
                    <p>
                        {teamMember.role}
                    </p>
                    <button onClick={()=>props.updateMember(teamMember)}>Edit</button>
                </div>
            ))}
        </div>
    )
}

export default Members;