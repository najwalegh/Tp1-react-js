import React from "react";

function Footer (){
return(
    <div
    style={{
        display:'flex',
        justifyContent:'flex-start',
        flexDirection:"column",
        alignItems: 'center',
        height:'600px',
        margin:'80px'
    }}
    >
        <h3>Pour les passionné-e-s des plantes </h3>
        <h4>Laissez nous Votre EMAIL:</h4>
        <input type="text" style={{width: '80%', maxWidth: '200px'}}></input>
    </div>
)
}

export default Footer;