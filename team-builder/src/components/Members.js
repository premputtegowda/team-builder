import React from "react";

function Members(props){
    console.log(props.teamMembers);
    if (!props.teamMembers) return (<div>No Members are added yet</div>)
    return (
        <div >
            {props.teamMembers.map( teamMember => (
                <div key={teamMember.id} className="team-container">
                    
                    <div className="team-member">
                    {teamMember.name}
                    </div>
                    <div className="team-member">
                        {teamMember.email}
                    </div>
                    <div className="team-member">
                        {teamMember.role}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Members;