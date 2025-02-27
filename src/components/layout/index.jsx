import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";



export default function MainLayout({ children }) {
    return (
        <div>
            <div>
                <Navigation />
            </div>
            <div>
                <Outlet />
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}