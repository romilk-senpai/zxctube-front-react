import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import common from './Common.module.css'
import Header from "./components/Header";
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {faTwitter, faFontAwesome} from '@fortawesome/free-brands-svg-icons'
import SetupProfilePage from "./pages/SetupProfilePage";

function App() {
    library.add(fas, faTwitter, faFontAwesome,)
    return (
        <div>

        </div>
    );
}

export default App;
