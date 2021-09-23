import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <nav>
            <Link to='/'>Home </Link>
            <Link to='/resources'>Resources </Link>
            <Link to='/new'>Add a New Resource! </Link>
        </nav>
    )
}