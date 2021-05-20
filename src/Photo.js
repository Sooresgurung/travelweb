import React from 'react'

function Photo(props) {
    const Tent={
        height:'300px',
        width:'350px',
        marginLeft:'25px',
        marginTop:'10px'
    }
    const para={
        marginLeft:'25px',
        marginTop:'10px',
        color:'#fff'
    }
    return (
        <>
          <div className="photo">
              <img  style={Tent} src={props.Imsrc} alt="Tent"/>
              <p style={para}>Quality product Tent</p>
              <p style={para}>Rs:Only 1000/-</p>
          </div>  
        </>
    )
}

export default Photo
