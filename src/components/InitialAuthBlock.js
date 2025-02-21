import authPageClasses from "../pages/AuthPage.module.css";
import commonClasses from "../Common.module.css";
import {Link} from "react-router-dom";

export default function InitialAuthBlock() {
    return (
        <div className={authPageClasses.loginInputsContainer}>
            <Link to={"login"}>
                <button id="loginButton" className={` ${commonClasses.defaultButton} ${authPageClasses.submitButton}`}>
                    <p>Sign In</p></button>
            </Link>

            <Link to={"register"}>
                <button id="registerButton"
                        className={` ${commonClasses.defaultButton} ${authPageClasses.submitButton}`}>
                    <p>Sign Up</p></button>
            </Link>
        </div>
    )
}
