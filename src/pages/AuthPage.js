import commonClasses from '../Common.module.css'
import authPageClasses from './AuthPage.module.css'
import Header from "../components/Header";
import {Outlet} from "react-router-dom";

function AuthPage() {
    return (
        <div className={authPageClasses.authPageContainer}>
            <Header/>
            <Outlet/>
        </div>
    )
}

export default AuthPage;