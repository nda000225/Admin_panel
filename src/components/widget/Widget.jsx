import './widget.scss'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlinedIcon from '@mui/icons-material/Person';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWallet';

const Widget = ({type}) => {
    let data;

    const amount = 100;
    const diff = 20;

    switch(type){
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: <PersonOutlinedIcon className='icon' style={{ color: "", backgroundColor: ""}}/>,
        };
        break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "View all orders",
                icon: <ShoppingCartOutlinedIcon className='icon' style={{ color: "", backgroundColor: "" }}/>,
        };
        break;
        case "earning":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "See net earnings",
                icon: <MonetizationOnOutlinedIcon className='icon' style={{ color: "", backgroundColor: ""}}/>,
        };
        break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See details",
                icon: <AccountBalanceWalletOutlinedIcon className='icon' style={{ color: "", backgroundColor: ""}}/>,
        };
        break;
        default:
            break;

    }
  return (
    <div className='widget'>
        <div className="left">
            <span className='title'>{data.title}</span>
            <span className='counter'>{data.isMoney && "$"} {amount} </span>
            <span className='link'>{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage negative">
                <KeyboardArrowUpOutlinedIcon />
                {diff} %
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget