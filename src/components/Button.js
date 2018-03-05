import React from 'react'
import styled from 'styled-components'

const ButtonItem = styled.button`
    max-width:150px;
    padding: 0 0.6rem;
    height: 40px;
    display:flex;
    align-items:center;
    margin-left:5px;
    font-size:20px;
    border:1px solid gray;
    background:#ECE6E6;
    border-radius:3px;
    color:#464B57;
    &:hover {
        outline:0;
        cursor:pointer;
        box-shadow:inset 1px 1px 1px 1px rgba(0,0,0,.2);
    }
`;
export default class Button extends React.Component {
    render() {
        return (
            <ButtonItem onClick={this.props.onClick}><span className={`${this.props.nameButtonIcon}`} ></span></ButtonItem>
        );
    }
}
