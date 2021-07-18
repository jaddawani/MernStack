import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [conPassword, setConPassword] = useState(""); 
    
    const[firstnameError , setfirstnameError] = useState("");
    const[conPasswordError , setconPasswordError] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, email, password , lastName , conPassword };
        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConPassword("");

    };

    const firstnameValidation = (e) => {
        if (e.target.value.length<3) {
            setfirstnameError("must be more than 2!!!!!!!!!!!!!!!!!!! ya kalb");
        }
        else{
            setfirstnameError("");
            setFirstName(e.target.value);

            }

            
       
    }

    const ConpassValidation = (e) => {
        setConPassword(e.target.value)
        if (password !== e.target.value){
        setconPasswordError("password not match!")
        }  
        else{
            setconPasswordError("")
        }
    }

    
    return(
        <>
        <form onSubmit={ createUser }>
            <div>
                <label>firstName: </label> 
                <input type="text" onChange={ firstnameValidation }   />
            <p>{firstnameError}</p>
            </div>
            <div>
                <label>lastName: </label> 
                <input type="text" onChange={ (e) => setLastName(e.target.value) } value={lastName} />
            </div>


            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } value={email} />
            </div>

            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } value={password} />
            </div>


            <div>
                <label>Confarmation Password: </label>
                <input type="text" onChange={ ConpassValidation } value={conPassword} />
                <p>{conPasswordError}</p>
            </div>


            <input type="submit" value="Create User" />
        </form>



        <table>
        <tr>
            <td>First name</td>
            <td>{firstName}</td>
            </tr>
        <tr>
            <td>Last name</td>
            <td>{lastName}</td>
        </tr>
        <tr>
            <td>Email</td>
            <td>{email}</td>
        </tr>
        <tr>
            <td>Password</td>
            <td>{password}</td>
        </tr>

        <tr>
            <td>Confirm Password</td>
            <td>{conPassword}</td>
        </tr>

        </table>
</>


    );


};
    
export default UserForm;