import { Component } from 'react';
import './Search.css';

export class Search extends Component {
    state = {
        search: ''
    }

    handleUpdate = (event) => {
        if (event.key === 'Enter') {
            this.props.searchFn(this.state.search);
        }
    }

    render() {
        const { search } = this.state;

        return (
            <div className="row">
                <div className="col s12">
                    <input
                        className="validate"
                        placeholder="Search here ..."
                        type="search"
                        value={search}
                        onChange={(event) => this.setState({ search: event.target.value })}
                        onKeyUp={this.handleUpdate}
                    />
                </div>
                <a
                    href="!#"
                    className="waves-effect waves-light btn"
                    onClick={() => this.props.searchFn(this.state.search)}
                >search</a>
            </div>
        )
    }
}