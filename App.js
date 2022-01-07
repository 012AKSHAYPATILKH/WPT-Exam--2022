import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
    return(
        <>
            <MyComponent/>
        </>
    );
}

function MyComponent() {
    const [applicationname, setapplicationname] = useState("");
    const [studentname ,setstudentname] = useState("");
    const [studentid, setstudentid] = useState("");
    const [message, setmessage]= useState("");
    const [list, setList] = useState([]);

   const handleapplicationnameChange = (e) => {
       setapplicationname(e.target.value);
   };
   const handlestudentnameChange = (e) => {
    setstudentname(e.target.value);
  };
  const handlestudentidChange = (e) => {
    setstudentid(e.target.value);
  }; 
  const handlemessageChange = (e) => {
    setmessage(e.target.value);
  };

  const addUser = async () => {
      const url ="http:localhost:4000/addUser";
      const data ={
          applicationname: applicationname,
          studentname: studentname,
          studentid: studentid,
      };

    await axios.post(url,data);

    const newList = [data, ...list];
    setList(newList);

    setapplicationname("");
    setstudentname("");
    setstudentid("");
    setmessage("");
  };
   const getUser = async () => {
       const url = "http//localhost:4000/users";
       const result = await fetch(url);
       const list = await result.json();
        
       const newlist = [...list];
       setList(newlist );
   };

   useEffect(() =>getUser(),[]);
   
   return(
       <div>
           <h1  className="bg-dark text-light p-3">User Registration
           <div>
               <input 
                className="form-control form-control-lg mb-1"
                type="text"
                 name=""
                 id=""
                 vaule={applicationname}
                 onChange={handleapplicationnameChange}
                 placeholder="Application Name"
                />
           </div>
           <div>
               <input 
                 className="form-control form-control-lg mb-1"
                type="text"
                 name=""
                 id=""
                 vaule={studentname}
                 onChange={ handlestudentnameChange}
                 placeholder="Student Name"
                />
           </div>
           <div>
               <input 
                 className="form-control form-control-lg mb-1"
                type="text"
                 name=""
                 id=""
                 vaule={studentid}
                 onChange={ handlestudentidChange}
                 placeholder="Student Id"
                />
           </div>
           </h1>
           
          
           <div>
               <input 
                 className="form-control form-control-lg mb-1"
                type="text"
                 name=""
                 id=""
                 vaule={studentid}
                 onChange={ handlemessageChange}
                 placeholder="Lets chat here"
                />
           </div>
           <div>
               <input type="button" name="" value="Send" onClick={ addUser } />
           </div>

           <div>
               <input 
                 className="form-control form-control-lg mb-1"
                type="text"
                 name=""
                 id=""
                 vaule={studentid}
                 onChange={ handlemessageChange}
                
                 placeholder="Hii"
                />
           </div>
           <div>
               <input 
                 className="form-control form-control-lg mb-1"
                type="text"
                 name=""
                 id=""
                 vaule={studentid}
                 onChange={ handlemessageChange}
                
                 placeholder="Hello"
                />
           </div>
           <div>
               <input 
                 className="form-control form-control-lg mb-1"
                type="text"
                 name=""
                 id=""
                 vaule={studentid}
                 onChange={ handlemessageChange}
                
                 placeholder="whats up"
                />
           </div>
           <div>
               <input 
                 className="form-control form-control-lg mb-1"
                type="text"
                 name=""
                 id=""
                 vaule={studentid}
                 onChange={ handlemessageChange}
                
                 placeholder="All good"
                />
           </div>
           <div>
               <input 
                 className="form-control form-control-lg mb-1"
                type="text"
                 name=""
                 id=""
                 vaule={studentid}
                 onChange={ handlestudentidChange}
                 placeholder="All the best"
                />
           </div>
           
           
          <h1>User List</h1>
          {list.map((item, index) => (
            <div key={index}>
                {item.applicationname} {item.studentname} {item.studentid}

            </div>
          ))}
         </div>

   );
}