import React, { Component } from 'react';
import api from '../../services/api';
import Hearder from '../Hearder';

import './style.css';

class Search extends Component
{

    state = {
        filmes: [],
    }

    componentDidMount()
    {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get(`movie?api_key=6db402f2f23b80d07ac905f8a5d7d1ee&query=A`);

        const { docs } = response.data.results;

        //console.log(response.data.results);
        this.setState({ filmes: response.data.results });
    }
  
    Busca = async (e) => {
        const response = await api.get(`movie?api_key=6db402f2f23b80d07ac905f8a5d7d1ee&query=${e.target.value}`);

        const { docs } = response.data.results;

        //console.log(response.data.results);
        this.setState({ filmes: response.data.results });
    }

    render()
    {   
        const {filmes} = this.state;
        
        return(

        <div className="container">
        <Hearder />
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <input className="form-control" type="text" id="input" onChange={this.Busca} placeholder="Search"/><a href="/"><h2 align="center">Voltar</h2></a>
                </div>
                <div className="col-md-4"></div>
            </div>
            {
                filmes.map((filme, k) => (
                    <div className="row" id="card" key={k}>
                        <div className="col-md-3">
                            <img src={`https://image.tmdb.org/t/p/w185${filme.poster_path}`} id="img" />
                        </div>
                        <div className="col-md-7">
                            <h3>{ filme.title }</h3>
                            <p><b>Data Lançamento: </b> { filme.release_date }</p>
                            <p>{ filme.overview }</p>
                        </div>
                        <div className="col-md-2">
                            <h6>Score</h6>
                            <h4 id="nota">{ filme.vote_average }</h4>
                            <a className="btn btn-primary" href={`https://www.themoviedb.org/movie/${filme.id}`} target="_blank">Ver no site</a>
                        </div>
                    </div>
                ))
            }
            
        </div>
        );
    }
}

export default Search;
