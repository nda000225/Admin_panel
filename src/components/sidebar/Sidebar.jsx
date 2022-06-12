import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonOutlineIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsOutlineIcon from '@mui/icons-material/Settings';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { darkModeContext } from './../../context/darkModeContext';

const Sidebar = () => {
    const {dispatch} = useContext(darkModeContext);
  return (
    <div className='sidebar'>
        <div className="top">
        <Link to="/" style={{textDecoration: "none"}}>
            <span className="logo">Admin</span>
        </Link>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon />
                    <span>Dashboard</span>
                </li>
                <p className="title">LISTS</p>
                <Link to="/users" style={{textDecoration: "none"}}>
                    <li>
                        <GroupIcon />
                        <span>Users</span>
                    </li>
                </Link>

                <Link to="/products" style={{textDecoration: "none"}}>
                    <li>
                        <ProductionQuantityLimitsIcon />
                        <span>Products</span>
                    </li>
                </Link>


                <li>
                    <TouchAppIcon />
                    <span>Orders</span>
                </li>
                <li>
                    <DeliveryDiningIcon />
                    <span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <AssessmentIcon />
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsIcon />
                    <span>Notification</span>
                </li>
                <p className="title">SERVICES</p>
                <li>
                    <HealthAndSafetyIcon />
                    <span>System Health</span>
                </li>
                <li>
                    <PsychologyIcon />
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsOutlineIcon />
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <PersonOutlineIcon />
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon />
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption" onClick={()=> dispatch({type:"LIGHT"})}></div>
            <div className="colorOption" onClick={()=> dispatch({type:"DARK"})}></div>
        </div>
    </div>
  )
}

export default Sidebar