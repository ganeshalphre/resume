import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const SmartCardHome = () => {
    const {id} = useParams();
    const SmartCardId = id;
    
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        if(!token) {
            navigate('/signin')
        }
    }, []);

    return ( 
        <div className="SmartCardHome">
            <Link to={`/dashboard/web-resume/${SmartCardId}`} className="">View Resume</Link>
            <Link to={`/dashboard/smart-card/${SmartCardId}`} className="">View Card</Link>
            <Link to={`/dashboard/edit-smart-card/${SmartCardId}`} className="">Edit</Link>
        </div>
     );
}
 
export default SmartCardHome;