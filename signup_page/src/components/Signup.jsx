import { useState } from 'react';
import axios from 'axios';
import './Signup.css'
const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const res = await axios.post('http:/localhost:3000/signup', {
                email,
                password,
            });
    
            if(res.status === 200){
                alert('Signed up successfully');
            } else {
                alert(`Error: ${res.data.message}`);
            }
        } catch(err){
            alert(`Error: ${err.res ? err.res.data.message : err.message}`)
        }

    };

    return (
        <>
            <div className="content">
                <div id="signup">
                    <h1>Sign Up</h1>
                </div>
                
                <div id="form">
                    <input className="email" type="text" placeholder="Email" value = {email} onChange={(e) => setEmail(e.target.value)}/>
                    <input className="password" type="password" placeholder="Password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div id="extra_details">
                    <div id="checkbox">
                        <input type="checkbox" name="show_password" id="n1" />
                        <label htmlFor="n1">Show password</label>
                    </div>
                    <div id="pass"><p>Forgot password?</p></div>
                </div>
                <div id="button">
                    <button onClick={handleSubmit}>Sign In</button>
                </div>
            </div>
        </>
    );
}


export default Signup;