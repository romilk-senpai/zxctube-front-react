import commonClasses from '../Common.module.css'
import Header from "../components/Header";
import setupProfilePageClasses from "./SetupProfilePage.module.css"

function SetupProfilePage() {
    return (
        <div className={setupProfilePageClasses.setupProfilePageContainer}>
            <Header/>
            <div className={setupProfilePageClasses.profileInputsContainer}>
                <div className={setupProfilePageClasses.avatarUploadButton}></div>
                <div className={setupProfilePageClasses.inputContainer}>
                    <input type="text" id="displayNameInput" className={setupProfilePageClasses.inputField}
                           placeholder="Display Name"/>
                </div>
                <button id="submitButton"
                        className={` ${commonClasses.defaultButton} ${setupProfilePageClasses.submitButton}`}>
                    <p>Submit</p></button>
            </div>
            <div></div>
        </div>
    )
}

export default SetupProfilePage;