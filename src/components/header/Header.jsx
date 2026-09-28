import { Link } from "react-router";

export default function Header() {
    return (
        <header>
            {/* <!-- Navigation --> */}
            <nav>
                <Link to="/" className="home" > <img src="./images/logo.png" alt="logo" /></Link>
                <Link to="/catalog">Catalog</Link>
                {/* <!-- Logged-in users --> */}
                <div id="user">
                    <a href="#">Add Game</a>
                    <a href="#">Logout</a>
                </div>
                {/* <!-- Guest users --> */}
                <div id="guest">
                    <a href="#">Login</a>
                    <a href="#">Register</a>
                </div>
            </nav>
        </header>
    );
}
