import { useState } from "react"

const Form = () => {
    const [email, setemail] = useState('');
    const [username, setUsername] = useState('');
    console.log('Soy el estado de username :', username);
    console.log('Soy el estado de email :', email);
    
    return(
        <div className="containerDelContainer">
        <div className="formContainer">
        <form 
        onSubmit={(e) => {
            e.preventDefault()
        }}
        >
        <h1 className="formTitle">Form</h1>
            <input 
                className="input"
                type='text' 
                autoComplete="off" 
                placeholder="Insert here your username"
                name='email'
                value={username}
                onChange={ (e) => setUsername(e.target.value)}          
            ></input>
            <input
                className="input" 
                type='text'
                name="username"
                placeholder="Insert here your email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                >
            </input>
            <div className="btnContainer">
            <button     className="btn-submit"  type='submit'>Submit</button>

            </div>
        </form>
        </div>

        </div>
    )
}

export default Form;