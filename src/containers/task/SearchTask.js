import React from 'react'
import { connect } from 'react-redux'
import Checkbox from '../../components/Checkbox'
import { searchTask, setVisibilityFilterTasks } from '../../actions/actions'
import styled from 'styled-components'

const SearchPanel = styled.div`
    display:flex;
    justify-content:flex-end;
`;
const Fieldset = styled.div`
    margin-right:20px;
    display:flex;
    align-items:center;
    justify-content:center;
    input {
        border-color:white;
    }
`;
const SearchForm = styled.form`
    display:flex;
`;
class SearchTask extends React.Component {

    render() {
        return (
            <SearchPanel>
                <SearchForm onSubmit={this.searchItem.bind(this)}>
                    <Fieldset>
                        <Checkbox id="search" type="checkbox" ref="doneTodo" onChange={this.filterItem.bind(this)} />
                        <label htmlFor="search">Done</label>
                    </Fieldset>
                    <input ref="searchTask" onChange={this.searchItem.bind(this)} />
                    <label className="search-label icon-search"></label>
                </SearchForm>
            </SearchPanel>
        );
    }
    searchItem(event) {
        event.preventDefault();
        let searchString = this.refs.searchTask.value;
        this.props.onSearch(searchString);
    }
    filterItem(event) {
        if (event.target.checked) {
            this.props.onFilterClick('SHOW_COMPLETED');
        } else {
            this.props.onFilterClick('SHOW_ALL');
        }
    }
}
const mapStateToProps = (state) => ({
    tasks: state
})
const mapDispatchToProps = (dispatch, taskName) => ({
    onSearch: (taskName) => {
        dispatch(searchTask(taskName));
    },
    onFilterClick: (filter) => {
        dispatch(setVisibilityFilterTasks(filter))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchTask)
