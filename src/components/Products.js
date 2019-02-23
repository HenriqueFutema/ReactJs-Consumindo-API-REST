import React from 'react';
import api from '../services/api'
import { withRouter } from 'react-router-dom';


class Product extends React.Component  {

   ProductVer = async e =>{
       e.preventDefault();
       this.props.history.push('/product');
       const idProduto = this.props.item._id;
       await api.post('ids', idProduto);
       
   }

    render() {
        const { item } = this.props;
        const id = item._id
        return(
            <li>
               
                <h4>{ item.title }</h4>
                <p>{ item.description }</p>
                <p>{ item.url }</p>

                <button onClick={() => this.props.onClick(id)}>Excluir</button>
                        
                   
                
                
            </li>
        );
    }
}

export default withRouter(Product);

