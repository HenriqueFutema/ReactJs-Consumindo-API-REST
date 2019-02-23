import React, { Component } from 'react';

import api from '../services/api';

import Product from '../components/Products'

export default class Index extends Component {

    state = {
        products: [],
        modeProduct: false,
        test: 'dsasdsa'
    }

    async componentDidMount(){
        const response = await api.get('products');

        this.setState({ products: response.data });
        if (this.state.modeProduct) this.props.history.push('/product');

    }

    handleSubmit = async e =>{
        e.preventDefault();

        let { flinguagem, fdescricao, furl } = this.refs;
        let title = flinguagem.value;
        let description = fdescricao.value;
        let url = furl.value;
        
        await api.post('products', { title, description, url });

        console.log( flinguagem.value );

        this.refs.flinguagem.value = "";
        this.refs.fdescricao.value = "";
        this.refs.furl.value = "";


    }

    handleClick = async id =>{
        alert(id);
        await api.delete(`products/${ id }`);
        console.log(id)
    } 

  render() {
    return(
        <div>

            <form onSubmit={this.handleSubmit}>
                <input
                    ref="flinguagem"
                    placeholder="Novo Linguagem"
                />

                <input
                    ref="fdescricao"
                    placeholder="Novo Linguagem"
                />

                <input
                    ref="furl"
                    placeholder="Novo Linguagem"
                />

                <button type="submit">Adicionar</button>
            </form>

            <ul>
                { this.state.products.map(item => (
                    <Product key={ item._id } item={ item } onClick={this.handleClick}/>
                )) }
            </ul>
        </div>
    );
  }
}
