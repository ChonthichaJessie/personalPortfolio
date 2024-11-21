import React from 'react';
import styled from 'styled-components';

type TopMenuProps = {
    title: string;
}

const TopMenu = ({title}: TopMenuProps) => {
return(
    <TopMenuWrapper>
        <h3>{title}</h3>
    </TopMenuWrapper>
)
}

export default TopMenu;

const TopMenuWrapper = styled.div`
    color: #5a5a5a;
    padding: 10px;
    text-align: center;
`;