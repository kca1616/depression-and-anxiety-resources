import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <nav>
            <Link to='/' className="navItem">Home </Link>
            <Link to='/resources' className="navItem">Resources </Link>
            <Link to='/new' className="navItem">Add a New Resource </Link>
        </nav>
    )
}