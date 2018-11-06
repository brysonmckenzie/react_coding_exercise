import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import GifList from './components/GifList';
import request from 'superagent';
import './styles/app.css';


class App extends React.Component {



    constructor() {
        super()

        this.state = {
            gifs: []
        };
    }

    handleTermChange = (term) => {

        const GIPHY = {
            base_url: 'https://api.giphy.com/v1/gifs/search?q=,',
            api_key: 'fhruhErb7kOixSYUM2EV916C9qVt2wiL',
            limit: 20,
            offset: 0


        }

        const url = `${GIPHY.base_url}${term.replace(/\s/g, '+')}&api_key=${GIPHY.api_key}&limit=${GIPHY.limit}&offset=${GIPHY.offset}`;

        request.get(url, (err, res) => {
            this.setState({ gifs: res.body.data })
        });
    }


    render() {


        return (
            <div className="container">
                <h1 className="giphy" >GIPHY Search</h1>
                
                <select name="select" onChange={this.num}>
                    {num.map(function (n) {
                        return (<option value={n} selected={this.state.selected === n}>{n}</option>);
                    })}
                </select>
                
                <SearchBar onTermChange={term => this.handleTermChange(term)} />
                <GifList gifs={this.state.gifs} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));


