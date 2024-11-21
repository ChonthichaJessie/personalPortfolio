import React from 'react';
import styled from 'styled-components';
import TopMenu from './TopMenu';

const TopMenuBar = () => {
return (
    <div>
        <TopMenu title="Home" />
        <TopMenu title="About me" />
        <TopMenu title="Portfolio" />
        <TopMenu title="Contact me" />
    </div>
)
}

export default TopMenuBar;