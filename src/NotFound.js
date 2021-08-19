import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="notFound">
            <h2>Error 404: Page not found.</h2>
            <br></br>
            <h2>Sorry!</h2>
            <br></br>
            <p>The page you are looking for is not found.</p>
            <br></br>
            <Link to= "/">Go Back to HomePage</Link>
        </div>
     );
}
 
export default NotFound;