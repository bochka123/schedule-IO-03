import React from 'react';
import {IconsClassNames} from "../../../common/enums";

const Icon = ({icon, color}) => {
    return (
        <i className={IconsClassNames[icon]} style={{color: color}}></i>
    );
};

export { Icon };