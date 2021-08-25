import React, {useEffect, useState} from 'react'
import axios from 'axios';
import './userlist.css'




const UserList = () => {
   
 const [ listOfUSer, setListOfUSer] = useState([])

useEffect(() => {
  axios.get("https://jsonplaceholder.typicode.com/users")
  .then
    (response => setListOfUSer(response.data))
  .catch
  (error=> console.log(error))
    
  

}, [])


return (
  <div >
    <ul>
    {listOfUSer && listOfUSer.map(
  (item) => (
       <li key={item.id}> 
        <h1 > {item.id} </h1>
        <p>Name:</p>{item.name}
        <p>Username:</p>{item.username}
        <p>Email</p>{item.email}
  <p>Address</p>
          <h4>Street:</h4>{item.address.street}
          <h4>Suite:</h4>{item.address.suite}
<        h4>City:</h4>{item.address.city}
         <h4>Zipcode:</h4>{item.address.zipcode}
        
         <p>Phone:</p>{item.phone}
         <p>Website:</p>{item.website}
         <p>Company</p>
         <h4>Name:</h4>{item.company.name}
         <h4>CatchPhrase:</h4>{item.company.catchPhrase}
         <h4>bs:</h4>{item.company.bs}

 
      </li>     
  
     ) )}
   </ul> 
  </div>
);
}

export default UserList
