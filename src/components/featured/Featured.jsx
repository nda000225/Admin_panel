import './featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css"
import  KeyboardArrowUpOutlinedIcon  from '@mui/icons-material/KeyboardArrowUpOutlined';


const Featured = () => {
  return (
    <div className='featured'>
        <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVertIcon  fontSize="small" />
        </div>
        <div className="bottom">
            <div className="featuredChart">
              {/* yarn add react-circular-progressbar */}
            <CircularProgressbar value={70} text={"70%"} strokeWidth={3} />  
            </div>
            <p className="title">Total sales made today</p>
            <p className="amount">$250</p>
            <p className="desc">
              success Saved lockfile.
              success Saved 1 new dependency.
              info Direct dependencies
            </p>
            <div className="summary">
              <div className="item">
                <div className="itemTitle">Today</div>
                <div className="itemResult negative">
                  <KeyboardArrowUpOutlinedIcon fontSize='small' />
                  <div className="resultAmount">$12.4k</div>
                </div>
              </div>
              <div className="item">
                <div className="itemTitle">Last week</div>
                <div className="itemResult positive">
                  <KeyboardArrowUpOutlinedIcon fontSize='small' />
                  <div className="resultAmount">$12.4k</div>
                </div>
              </div>
              <div className="item">
                <div className="itemTitle">Last month</div>
                <div className="itemResult positive">
                  <KeyboardArrowUpOutlinedIcon fontSize='small' />
                  <div className="resultAmount">$12.4k</div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Featured