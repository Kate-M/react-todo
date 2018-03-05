import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

const CheckboxInput = styled.input`
    width: 12px;
    height: 12px;
    border: 1px solid;
    cursor: pointer;
    position: relative;
    display:flex;
    align-items:center;
    justify-content:center;
    &:checked {
        &::after {
            content:'';
            display: block;
            width: 3px;
            height: 7px;
            border-style: solid;
            border-color: inherit;
            border-width: 0 2px 2px 0;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
            position: absolute;
            top: 0;
        }
    }
${breakpoint('mobile') `
   margin-right:0;
`}
${breakpoint('desktop') `
   margin-right:10px;
`}
`;
export default class Checkbox extends React.Component {
    render() {
        return (
            <form>
                <CheckboxInput type="checkbox" onChange={this.props.onChange} checked={this.props.checked} />
            </form>
        );
    }
}
