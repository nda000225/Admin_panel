import './new.scss'
import Sidebar from './../../components/sidebar/Sidebar';
import Navbar from './../../components/navbar/Navbar';
import { DriveFolderUploadOutlined } from '@mui/icons-material';
import { useState } from 'react';

const New = ({inputs, title}) => {
  const [file, setFile] = useState("");
  return (
    <div className='new'>
        <Sidebar/>
        <div className="newContainer">
        <Navbar/>
          <div className="top">
            {/* from App.js */}
              <h1>{title}</h1>
          </div>
          <div className="bottom">
            <div className="left">
              {/* if there is not file */}
              <img src={ file ? URL.createObjectURL(file) 
              : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" } 
              alt=""
              />
            </div>
            <div className="right">
              <form>
                <div className="formInput">
                    <label htmlFor='file'>
                      Image: <DriveFolderUploadOutlined className='icon'/>
                    <input type="file" id='file' onChange={e=> setFile(e.target.files[0])} style={{display:"none"}}/>
                    </label>
                  </div>
                  {inputs.map((input) =>(
                    <div className="formInput">
                      <label>{input.label}</label>
                      <input type={input.type} placeholder={input.placeholder}/>
                    </div>
                  ))} 
                  {/* <div className="formInput">
                    <label>FirstName and LastName</label>
                    <input type="text" placeholder='Kouassi Kan'/>
                  </div>
                  <div className="formInput">
                    <label>Email</label>
                    <input type="email" placeholder='kouassikan@hotmail.fr'/>
                  </div>
                  <div className="formInput">
                    <label>Phone</label>
                    <input type="text" placeholder='+225 07 08972726'/>
                  </div>
                  <div className="formInput">
                    <label>Password</label>
                    <input type="password"/>
                  </div>
                  <div className="formInput">
                    <label>Address</label>
                    <input type="text" placeholder='Abidjan, Yopougon'/>
                  </div>
                  <div className="formInput">
                    <label>Country</label>
                    <input type="text" placeholder='Ivory Cost'/>
                  </div> */}
                  <button>Send</button>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default New