import authPageClasses from "../pages/AuthPage.module.css";
import commonClasses from "../Common.module.css";
import {useNavigate} from "react-router-dom";

export default function LoginBlock() {
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        const data = Array.from(e.target.elements)
            .filter((input) => input.name)
            .reduce((obj, input) => Object.assign(obj, {[input.name]: input.value}), {});

        let json = JSON.stringify(data);

        await fetch("http://localhost:8080/api/v1/auth/login", {
            method: "POST",
            body: json,
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
            .then((data) => {
                window.localStorage.setItem("userData", JSON.stringify(data));

                let path = `/`;
                navigate(path);
            });

        console.log(json);
    }

    return (
        <form method="POST" id="login-form" className={authPageClasses.loginInputsContainer} onSubmit={handleSubmit}>
            <div className={authPageClasses.inputContainer}>
                <input name="email" type="email" id="emailInput" className={authPageClasses.inputField}
                       placeholder="Email"/>
            </div>
            <div className={authPageClasses.inputContainer}>
                <input name="password" type="password" id="passwordInput" className={authPageClasses.inputField}
                       placeholder="Password"/>
            </div>
            <button type="submit" id="submitLoginButton"
                    className={` ${commonClasses.defaultButton} ${authPageClasses.submitButton}`}>
                <p>Sign In</p></button>
        </form>
    )
}
