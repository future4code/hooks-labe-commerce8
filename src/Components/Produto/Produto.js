import React from 'react'
import camiseta1 from "../imagens/camiseta1.jpg"
import camiseta2 from "../imagens/camiseta2.jpg"
import camiseta3 from "../imagens/camiseta3.jpg"
import camiseta4 from "../imagens/camiseta4.jpg"
import camiseta5 from "../imagens/camiseta5.jpg"
import camiseta6 from "../imagens/camiseta6.jpg"


class Produto extends React.Component {

    state = {
        produtos: [
            {
            id: Date.now(), 
            nomeProduto: 'camiseta1',
            foto: camiseta1,
            valor: 89.99 
            },
            {
            id: Date.now(), 
            nomeProduto: 'camiseta2',
            foto: camiseta2,
            valor: 89.99 
            },
            {
            id: Date.now(), 
            nomeProduto: 'camiseta3',
            foto: camiseta3,
            valor: 89.99 
            },
            {
            id: Date.now(), 
            nomeProduto: 'camiseta4',
            foto: camiseta4,
            valor: 89.99 
            },
            {
            id: Date.now(), 
            nomeProduto: 'camiseta5',
            foto: camiseta5,
            valor: 89.99 
            },
            {
            id: Date.now(), 
            nomeProduto: 'camiseta6',
            foto: camiseta6,
            valor: 89.99 
            }
        ]
    }

    render(){
        return(
            <div>
            {this.state.produtos.map((item, chave)=>{
                return(
                    <div key={chave.id}>
                        <img src={item.foto} alt='camisa'/>
                        <p>{item.nomeProduto}</p>
                        <p>{item.valor}</p>
                        <button>Adicionar ao carrinho</button>
                    </div>
                )
            })}    
          </div>
        )
    }
}

export default Produto 