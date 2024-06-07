import { Link } from "react-router-dom";
import  "../styles/home.css"
function Home() {
    return (
        <div className="data">
            <div>
                <Link to="/user_login"><b>User</b></Link>
            </div>
            <div>
                <Link to="/merchant"><b>Merchant</b></Link>
            </div>
        </div>
    );
}

export default Home;