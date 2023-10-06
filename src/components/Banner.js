import React from "react";
import logo from '../assets/logo.png';

function Banner(){
    const title ='La maison jungle';
    const currentMonth = new Date().getMonth();
    const isSpring = currentMonth >=2 && currentMonth <=5
    return(
        <div style={{
            borderBottom: 'solid 3px black',
        }}>
            <div className="Imj-banner"
                style={{
                    display: 'flex', 
                    justifyContent: 'end',  
                    padding: 32,
                    alignItems:'center'
                    }}
            >
                <img style={{  width: '40px',height:'40px',margin:'23px' }} src={logo} alt="la maison jungle" />
                <h2 className="Imj-title">{title}</h2>
            </div>
            <div style={{ 
                display: 'flex',
                justifyContent: 'end',  
                padding: '0px 32px 32px 0px',
                }}>
            {isSpring ? (
                <div>C'est le printemps, rempotez !</div>
            ):(
                <div>Ce n'est pas le moment de rempoter :/</div>
            )}
            </div>
        </div>
    )
}

export default Banner;

