import "./index.css";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Footer from "./component/Footer";
import Pricing from "./component/Pricing";
import NotFound from "./component/NotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" Component={Hero} />
                <Route path="/pricing" Component={Pricing} />
                <Route path="*" Component={NotFound} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
