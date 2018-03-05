import React from 'react'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'
import styled from 'styled-components'

const ButtonHistory = styled.button`
    display:flex;
    flex-direction:column;
    padding: 1rem;
    margin-right:20px;
    background:#464B57;
    color:white;
    cursor:pointer;
    border-radius:3px;
    &:hover {
      box-shadow:inset 1px 1px 1px 1px rgba(0,0,0,.8);
    }
`;
const ButtonGroup = styled.div`
    display:flex;
    justify-content:flex-end;
    padding:20px;
`;

let UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
  <ButtonGroup>
    <ButtonHistory onClick={onUndo} disabled={!canUndo}>
      Undo
    </ButtonHistory>
    <ButtonHistory onClick={onRedo} disabled={!canRedo}>
      Redo
    </ButtonHistory>
  </ButtonGroup>
)

const mapStateToProps = (state) => ({
  canUndo: [state.categories.past.length > 0, state.tasks.past.length > 0],
  canRedo: [state.categories.future.length > 0, state.tasks.future.length > 0]
})

const mapDispatchToProps = ({
  onUndo: UndoActionCreators.undo,
  onRedo: UndoActionCreators.redo
})

UndoRedo = connect(
  mapStateToProps,
  mapDispatchToProps
)(UndoRedo)

export default UndoRedo
