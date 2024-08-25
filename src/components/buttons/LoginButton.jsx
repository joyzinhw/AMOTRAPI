import React from "react";
import './button.css'
import Button from 'react-bootstrap/Button';

function LoginButton() {
    return (
        <div>
            <Button variant="link" className="custom-button custom-login-button">Login</Button>
        </div>
    )
}
export default LoginButton