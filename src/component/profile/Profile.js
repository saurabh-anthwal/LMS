import React from 'react';
import "./Profile.css";
import Button from '@mui/material/Button';
import { MdCamera } from 'react-icons/md';
import { BsPencilFill } from 'react-icons/bs';


export default function Profile() {
  const hiddenFileInput = React.useRef(null);


  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    props.handleFile(fileUploaded);
  };

  const handleClick = event => {
    hiddenFileInput.current.click();
  };
  return (
    <div className='profile-main'>
      <div className='profile-margin'>

      <div className='profile'>
        <h2>PROFILE</h2>
        <div className='flex-class'>
          <div profile-pic>
          <img className='dp' src="https://source.unsplash.com/c_GmwfHBDzk/200x200" alt="" />
          <div className="change-image-btn">
          
          <Button onClick={handleClick}><MdCamera className="camera-icon"/>change</Button>
            <input type="file"
            ref={hiddenFileInput}
            onChange={handleChange}
             style={{display:"none"}}
              />
          </div>
          </div>

          <div className='basic-details'>
          <div className='detail_section'>
            <h5>Basic Details</h5>
            <p><BsPencilFill/>Edit</p>
          </div>
          <div className='full-detail'>
           <div className='flex-between'>
                <div>
                  <h5>NAME</h5>
                <p>saurabh anthwal</p>
                  </div>
               <div>
                 <h5>ROLE</h5>
                <p>Admin User</p> </div>
                <div>
                  <h5>PHONE</h5>
                <p>899454895</p>
                  </div>
                <div>
                  <h5>EMAIL</h5>
                <p>saurabhanthwal@gmail</p>
                  </div>
           </div>
            
          
          </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
