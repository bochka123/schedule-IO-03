import React from 'react';
import {IconsClassNames} from "../../../common/enums";
import {Icon} from "@iconify/react";

const IconifyIcon = ({icon, color}) => {
    return (
        <Icon icon={IconsClassNames[icon]} color={color}></Icon>
    );
};

export { IconifyIcon };