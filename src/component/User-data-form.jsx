import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';

const UserForm = () => {
  // const dispatch = useDispatch();
  const [savedUsers, setSavedUsers] = React.useState(null)
  const [isUserSaved, setIsUserSaved] = React.useState(false)
  const [userData, setUserData] = useState({
    id: "",
    name: '',
    address: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = uuidv4(); 
    const currentUser = {...userData, id:userId}
    saveToLocalStorage(currentUser); 
    swal("Success", "User data saved successfully!", "success");
    
  };
  
  const saveToLocalStorage = (data) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(data);
    localStorage.setItem('users', JSON.stringify(users));
    setIsUserSaved(prev => !prev)
    setUserData({
      id: "",
      name: '',
      address: '',
      email: '',
      phone: ''
    })
  };

  React.useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if(users.length){
      setSavedUsers(users)
    } else {
      setSavedUsers([])
    }
  }, [isUserSaved])

  return (
    <div  style={{display:'flex'}}>
      
    <form className='form' onSubmit={handleSubmit}>
      <label className='name'>
        Name:
        <input type="text" name="name" value={userData.name} onChange={handleChange} />
      </label><br></br>
      <label>
        Address:
        <input type="text" name="address" value={userData.address} onChange={handleChange} />
      </label><br></br>
      <label>
        Email:
        <input type="email" name="email" value={userData.email} onChange={handleChange} />
      </label><br></br>
      <label>
        Phone:
        <input type="tel" name="phone" value={userData.phone} onChange={handleChange} />
      </label><br></br>
      
      <button className='btn' type="submit">Submit</button>
      
    </form>
    
    
    {savedUsers?.map(user => <div className='datainput'>
      {/* <h1><u>Data Input</u></h1> */}
      <h5>{user.id}</h5>
      <h4>{user.name}</h4>
      <h4>{user.address}</h4>
      <h4>{user.email}</h4>
      <h4>{user.phone}</h4>
    </div>)}
    </div>
  );
};

export default UserForm;
