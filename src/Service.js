import React from 'react'
import Photo from './Photo'
import Sdata from './Sdata'

const Service=()=>
{
    return (
        <>
        <div className="Photo_dis">
           <Photo 
               Imsrc={Sdata[0].Imgsrc}
           />
           <Photo 
                Imsrc={Sdata[1].Imgsrc}
           /> 
           <Photo
                Imsrc={Sdata[2].Imgsrc}
           /> 
           <Photo
                Imsrc={Sdata[3].Imgsrc}
           /> 
           <Photo
                Imsrc={Sdata[4].Imgsrc}
           />  
             <Photo
                Imsrc={Sdata[5].Imgsrc}
           />  
        </div>
        </>
    )
}

export default Service;
