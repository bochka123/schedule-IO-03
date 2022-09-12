import React from 'react';
import {IconsClassNames} from "../../../common/enums";
import { Icon } from "@iconify/react";
import './Icon.scss';

const IconifyIcon = ({icon, color}) => {
    return (
        <Icon icon={IconsClassNames[icon]} color={color} className="icon"></Icon>
    );
};

export { IconifyIcon };