import { useState } from 'react';
import axios from 'axios';
import './Signup.css';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('http://localhost:3000/signup', {
                email,
                password,
            });

            if (res.status === 200) {
                alert('Signed up successfully');
                // Reset the form
                setEmail('');
                setPassword('');
            } else {
                alert(`Error: ${res.data.message}`);
            }
        } catch (err) {
            alert(`Error: ${err.response ? err.response.data.message : err.message}`);
        }
    };

    return (
        <div className="content">
            <div id="signup">
                <h1>Sign Up</h1>
            </div>
            <form id="form" onSubmit={handleSubmit}>
                <input
                    className="email"
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div id="extra_details">
                    <div id="checkbox">
                        <input
                            type="checkbox"
                            name="show_password"
                            id="n1"
                            checked={showPassword}
                            onChange={() => setShowPassword(!showPassword)}
                        />
                        <label htmlFor="n1">Show password</label>
                    </div>
                    <div id="pass">
                        <p>Forgot password?</p>
                    </div>
                </div>
                <div id="button">
                    <button type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    );
};

export default Signup;
