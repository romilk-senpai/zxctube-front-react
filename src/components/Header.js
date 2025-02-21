import headerClasses from './Header.module.css';
import commonClasses from '../Common.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useNavigate} from "react-router-dom";

function Header(props) {
    let navigate = useNavigate();
    const loginRoute = () => {
        let path = "/auth";
        navigate(path);
    }

    const homeRoute = () => {
        let path = "/";
        navigate(path);
    }

    const signOut = () => {
        window.localStorage.removeItem("userData");

        homeRoute();
    };

    let loginContent = (
        <div className={headerClasses.burgerContainer}>
        </div>
    );

    if (props && props.showLogin) {
        if (!window.localStorage.getItem("userData")) {
            loginContent = (
                <div className={headerClasses.headerProfile}>
                    <button id="loginButton" className={` ${commonClasses.defaultButton} ${headerClasses.loginButton}`}
                            onClick={loginRoute}>
                        <p>Sign In</p></button>
                </div>
            );
        } else {
            loginContent = (
                <div className={headerClasses.headerProfile}>
                    <button id="loginButton" className={` ${commonClasses.defaultButton} ${headerClasses.loginButton}`}
                            onClick={signOut}>
                        <p>Sign Out</p></button>
                </div>
            );
        }
    }

    return (
        <div className={headerClasses.header}>
            <div className={headerClasses.burgerContainer}>
                <p id="homeButton" className={headerClasses.logoButton} onClick={homeRoute}>ZXC</p>
            </div>
            <div className={headerClasses.headerSearch}>
                <form className={headerClasses.searchForm}>
                    <div className={headerClasses.searchContainer}>
                        <div className={headerClasses.searchInputContainer}>
                            <input type="text" id="searchInput" className={headerClasses.searchInput}
                                   placeholder="Search"/>
                        </div>
                        <button id="search-button"
                                className={` ${commonClasses.defaultButton} ${headerClasses.searchButton}`}>
                            <FontAwesomeIcon icon="fa fa-search" className={headerClasses.searchIcon} color="#ffffff"/>
                        </button>
                    </div>
                </form>
            </div>
            {loginContent}
        </div>
    )
}

export default Header;