import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import GifList from './components/GifList';
import request from 'superagent';
import Limit from './components/Limit'
import FilterList from './components/FilterList'
import './styles/app.css';


class App extends React.Component {



    constructor() {
        super()

        this.state = {
            gifs: [],
            limit: 0,
            rating:[]
        };
    }


    updateLimit = (event) => {
        this.setState({
            limit: event.target.value
        });
    }

    handleTermChange = (term) => {

        const GIPHY = {
            base_url: 'https://api.giphy.com/v1/gifs/search?q=,',
            api_key: 'fhruhErb7kOixSYUM2EV916C9qVt2wiL',
            offset: 0


        }

        const url = `${GIPHY.base_url}${term.replace(/\s/g, '+')}&api_key=${GIPHY.api_key}&limit=${this.state.limit}&offset=${GIPHY.offset}`;

        request.get(url, (err, res) => {
            this.setState({ gifs: res.body.data })
        });
    }

    


    render() {


        return (
            <div className="container">
                <h1 className="giphy" >GIPHY Search</h1>



                <SearchBar onTermChange={term => this.handleTermChange(term)} />
                <h3>Limit</h3>
                <Limit limit={this.state.limit} updateLimit={this.updateLimit} />
                <FilterList
                    ratingChange={this.ratingChange}
                    FilterList={this.state.rating} />
                <GifList gifs={this.state.gifs} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));


