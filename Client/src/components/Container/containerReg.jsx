import React from 'react';

import style from '../css/containerReg.module.css';

function container(props) {
  return(
    <div className={`${style.container} ${style[props.customClass]}`}>
        {props.children}
    </div>
  );
}

export default container;