import React from "react";
import Sun from '../assets/sun.svg';
import Water from '../assets/water.svg';
const CareScale = (props) => {
    let imageSrc;
    if (props.type === 'light') {
      imageSrc = Sun ;
    } else {
      imageSrc = Water;
    }

    const images = [];

    for (let i = 0; i < props.num; i++) {
    images.push(<img key={i} src={imageSrc} alt={props.type === 'light' ? 'light' : 'water'} />);
    }
    return(
        <div>
            {images}
        </div>
    )
}
export default CareScale;