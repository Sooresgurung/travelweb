import React, {useState} from 'react'

const Contact=()=> {
    const form={
        height:'500px',
        width:'300px',
        backgroundColor:'#90caf9',
        marginLeft:'550px',
        marginTop:'100px',
        position:'absolute'
    }
    const label={
        color:'#fff',
        marginLeft:'110px',
        marginTop:'20px',
        fontSize:'25px'
    }
    const back={
        backgroundColor:'gray',
        height:'685px',
        width:'100%'
    }
    const input={
        marginLeft:'50px',
        marginTop:'20px',
        width:'200px',
        height:'25px'

    }
    const submit={
        marginLeft:'50px',
        marginTop:'50px',
        width:'200px',
        height:'40px',
        backgroundColor:'red',
        color:'#fff',
        fontSize:'20px'

    }
    const div={
        height:'60px',
        width:'800px',
        marginLeft:'300px',
        backgroundColor:'lightblue',
        borderRadius:'20px',
        position:'absolute',
        marginTop:'616px'
    }

    const[useRegistration,setRegistration]=useState({
        Username:'',
        email:'',
        password:'',
        phone:''
    })
    const [records, setRecord] = useState([])
    const handler=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setRegistration({...useRegistration, [name]:value})

    }
    const sub=(e)=>
    {
          e.preventdefault();
          const newRecord={...useRegistration,id:new Date().getTime().toString()}
          setRecord([...records,newRecord])
          setRegistration({Username:'',email:'',password:'',phone:''})
    }

    return (
        <>
       <div style={back}> 
       <form action="" onSubmit={sub}>
        <div style={form} className="form"> 
        
             <div>
                 <label style={label} htmlFor="Username">Full name</label><br/>
                 <input  style={input} 
                 autoComplete="off"
                 type="text"
                 name="Username"
                 id="Username"
                 onChange={handler}
                 value={useRegistration.Username}
                 /><br/><br/>
             </div>
             <div>
                 <label style={label} htmlFor="email">Email</label><br/>
                 <input  style={input}  
                 onChange={handler}
                 value={useRegistration.email}
                 autoComplete="off" type="text" name="email" id="email"/><br/><br/>
             </div>
             <div>
                 <label  style={label} htmlFor="password">Password</label><br/>
                 <input style={input}  
                  onChange={handler}
                 value={useRegistration.password}
                  autoComplete="off" type="text" name="password" id="password"/><br/><br/>
             </div>
             <div>
                 <label style={label} htmlFor="phone">Phone</label><br/>
                 <input style={input}   
                 onChange={handler}
                 value={useRegistration.phone}
                  autoComplete="off" type="text" name="phone" id="Phone"/>
             </div>
          <button  style={submit} type="submit">Registration</button>
          </div>
          </form>
        
          <div>
          {
                records.map((curElement)=>
                {
                    return(
                        <>
                        <div style={div}>
                        
                        <p>{curElement.Username}</p>
                        <p>{curElement.email}</p>
                        <p>{curElement.password}</p>
                        <p>{curElement.phone}</p>
                        </div>
                        </>
                    )
                })
            }
        </div>  
          </div>
        </>
    )
}

export default Contact;