import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './SignUp.css'
const Signup = () => {
    const [error, setError] = useState("")
    const { user, createUser } = useContext(AuthContext)



    const handleSignup = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        if (password.length < 6) {
            setError('Your Should be 6 disgir')
        }

        if (password != confirm) {
            setError('password Not match');
        }
        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                form.reset()
                console.log(user)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });

    }
    return (
        <div className='form-container'>
            <h3 className='signup-title'>SignUp</h3>
            <form onSubmit={handleSignup} action="">
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="password"> Confirm Password</label>
                    <input type="password" name="confirm" id="" required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
                <p>Already have an accound  <Link to='/login'>Signup</Link></p>
                <p className='text-error'>{error}</p>
            </form>
        </div>
    );
};

export default Signup;