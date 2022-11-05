import { Link } from "react-router-dom";

function Home(){
    return (
        <div>
            <Link to="/todo" >Todo</Link><br />
            <Link to="/calculator" >Calculator</Link>
        </div>
    )
}

export default Home;