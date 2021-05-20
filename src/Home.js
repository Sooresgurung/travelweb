import React from 'react'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const Home=()=>
{
    const Fit={
        width:'100%',
        height:'700px',
    }
    const para={
        position:'absolute',
        marginTop:'-300px',
        color:'#fff',
        fontSize:'40px',
        marginLeft:'40px'
    }
    const but={
        height:'50px',
        backgroundColor:'red',
        width:'150px',
        color:'#fff',
        position:'absolute',
        marginLeft:'200px',
        marginTop:'-220px',
    }
    const text={
          textAlign:'center',
          position:'absolute',
          fontSize:'18px',
          marginLeft:"-60px",
          marginTop:'-8px'
    }
    const arr={
        position:'absolute',
        marginLeft:"25px",
        marginTop:'-22px',
        fontSize:'50px'
    }
    return (
        <>
           <div>
            <img  style={Fit} src="./Images/o.jpeg" alt="Best trecking Images"></img>
            <p style={para}>New Experience and Explore Everything</p>
            <hr></hr>
            <button style={but}><span style={text}>More to Go</span> <ArrowRightAltIcon style={arr}/></button>
           </div>
        </>
    )
}

export default Home;
