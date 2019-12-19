import React, { useState, useEffect } from "react";


function MemberForm(props){
    //New Member initialization
    const [member, setMember] = useState({
                                            name:"",
                                            email:"",
                                            role:""
                                        })
    
    const {addTeamMember} = props;
    const {memberToEdit} = props;
    
    
    console.log("MemberToUpdate ", memberToEdit)
    
    useEffect(()=>{
        setMember({
                    name: memberToEdit.name,
                    email:memberToEdit.email, 
                    role:memberToEdit.role
                    }
                    );
        
        
    },[memberToEdit])
  
    
    //set new member to member variable using on change
            
    const handleChange = e => {
        setMember({...member,
                     [e.target.name]: e.target.value
                })
        
    }

    const submitForm = e => {
       
        e.preventDefault();
        addTeamMember(member);
        setMember({name: "", email: "", role: ""})
       
    }
    return (
        <form onSubmit={submitForm}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" placeholder="Full Name" 
                onChange={handleChange}
                value={member.name}
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email"         placeholder="Email" 
                onChange={handleChange}
                value={member.email}
                />
            </div>

            <div>
                <label htmlFor="role">Role</label>
                
                <input type="text" name="role" id="role" placeholder="Role" onChange={handleChange}
                value={member.role}
                />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )


}
export default MemberForm;