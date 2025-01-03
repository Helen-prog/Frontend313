import React from 'react';
import './Search.css';

class Search extends React.Component {
    state = {
        search: "",
        type: "all",
        page: 1
    }

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovie(this.state.search, this.state.type);
        }
    }

    handleFilter = (event) => {
        this.setState(
            ({ type: event.target.dataset.type }),
            () => this.props.searchMovie(this.state.search, this.state.type)
        )
    }

    prevPage = () => {
        this.setState(
            (this.state.page > 1 ? { page: this.state.page - 1 } : { page: 1 }),
            () => {
                this.props.searchMovie(this.state.search, this.state.type, this.state.page)
            }
        )
    }

    nextPage = () => {
        this.setState(
            ({ page: this.state.page + 1 }),
            () => {
                this.props.searchMovie(this.state.search, this.state.type, this.state.page)
            }
        )
    }

    setPage = (num) => {
        this.setState(
            () => ({page: num}),
            () => {
                this.props.searchMovie(this.state.search, this.state.type, this.state.page)
            }
        )
    }

    render() {
        let limit = 10;
        let totalPages = Math.ceil(this.props.totalCount / limit);
        let lastindex = totalPages < 10 ? totalPages + 1 : this.state.page + limit;
        let firstIndex = totalPages < 10 ? lastindex - limit + lastindex + 1 : lastindex - limit;
        let num = [];
        for (let i = 0; i <= totalPages; i++) {
            num.push(i);
        }
        // console.log(num);
        
        return (
            <>
                <div className="search">
                    <input
                        type="search"
                        placeholder='search'
                        value={this.state.search}
                        onChange={(e) => this.setState({ search: e.target.value })}
                        onKeyDown={this.handleKey}
                    />
                    <button
                        className='btn'
                        onClick={() => this.props.searchMovie(this.state.search, this.state.type)}
                    >Search</button>
                </div>
                <div className="radio">
                    <input
                        type="radio"
                        name="type"
                        data-type="all"
                        checked={this.state.type === 'all'}
                        onChange={this.handleFilter}
                    /> <span>All</span>
                    <input
                        type="radio"
                        name="type"
                        data-type="movie"
                        checked={this.state.type === 'movie'}
                        onChange={this.handleFilter}
                    /> <span>Movies only</span>
                    <input
                        type="radio"
                        name="type"
                        data-type="series"
                        checked={this.state.type === 'series'}
                        onChange={this.handleFilter}
                    /> <span>Series only</span>
                    <input
                        type="radio"
                        name="type"
                        data-type="game"
                        checked={this.state.type === 'game'}
                        onChange={this.handleFilter}
                    /> <span>Game only</span>
                </div>
                <div className="navigation">
                    <button className='btn' onClick={this.prevPage}>Previous page</button>
                    {
                        num
                        .slice(firstIndex, lastindex)
                        .map((el, index) => (
                            <button
                                className='btn'
                                style={{ background: this.state.page === el ? "gray" : "" }}
                                key={index}
                                onClick={() => (this.setPage(el))}
                            >{el}</button>
                        ))
                    }
                    <button className='btn' onClick={this.nextPage}>Next page</button>
                </div>
            </>
        )
    }
}

export default Search;
