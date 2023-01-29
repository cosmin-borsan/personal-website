import Banner from "../../components/Banner";
import Header from "../../components/Header";
import "../../styles/globals.css";
import Sidebar from "../../components/SideBar";
import Navbar from "../../components/Navbar";
import About from "../../components/About";
import Resume from "../../components/Resume";
import Portfolio from "../../components/Portfolio";
import Blog from "../../components/Blog";
import Contact from "../../components/Contact";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <body>
            <main>
                <Sidebar />
                <div className="main-content">
                    <Navbar />
                    {children}
                </div>
            </main>
            <script src="./assets/js/script.js"></script>
            <script src="./assets/js/script2.js"></script>
        </body>
    );
}
