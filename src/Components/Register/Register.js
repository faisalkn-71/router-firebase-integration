import React from 'react';

const Register = () => {
    return (
        <div>
            <h3>Please Register Now</h3>
            <div style={{margin:'20px'}}>
                <button>Google Sign In</button>
            </div>

            <form >
                <input type="text" placeholder='Your Name' />
                <br />
                <input type="email" placeholder='Enter your email' name="" id="" />
                <br />
                <input type="password" placeholder='Enter password' name="" id="" />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;