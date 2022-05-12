import { ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import camiseta1 from "../../imagens/camiseta1.jpg"
import camiseta2 from "../../imagens/camiseta2.jpg"
import camiseta3 from "../../imagens/camiseta3.jpg"
import camiseta4 from "../../imagens/camiseta4.jpg"
import camiseta5 from "../../imagens/camiseta5.jpg"
import camiseta6 from "../../imagens/camiseta6.jpg"
import { AddCarrinho, CardProduto, GradeCamisa, Nome, Preco } from './styled'


class Produto extends React.Component {

    state = {
        produtos: [
            {
            id: Date.now(), 
            nomeProduto: 'Explorador',
            foto: camiseta1,
            valor: 89.99 
            },
            {
            id: Date.now(), 
            nomeProduto: 'Space-weve',
            foto: camiseta2,
            valor: 69.99
            },
            {
            id: Date.now(), 
            nomeProduto: 'Buraco Negro',
            foto: camiseta3,
            valor: 49.99
            },
            {
            id: Date.now(), 
            nomeProduto: 'Infinito',
            foto: camiseta4,
            valor: 39.99
            },
            {
            id: Date.now(), 
            nomeProduto: 'Super-Nova',
            foto: camiseta5,
            valor: 59.99 
            },
            {
            id: Date.now(), 
            nomeProduto: 'AstroDev',
            foto: camiseta6,
            valor: 109.99 
            }
        ],
        novoProduto :'xuxa',
        novoValor : '100',
    }
    
    

    // Carrinho.

    adicionandoCarrinho =(id)=>{
      const novoCarrinho ={
          id : Date.now(),
          nomeProduto : this.novoProduto,
          valor : this.novoValor,
      }
      
      console.log(novoCarrinho)

    }

    render(){
        
        return(
            <GradeCamisa>
            {this.state.produtos.map((item, chave)=>{
                return(
                    <CardProduto key={chave.id}>
                        <img src={item.foto} alt='camisa'/>
                        <Nome>{item.nomeProduto}</Nome>
                        <Preco>R${item.valor}</Preco>
                        <AddCarrinho onClick={this.adicionandoCarrinho}><ShoppingCartOutlined/></AddCarrinho>
                    </CardProduto>
                )
            })}   
            <div>
                <h2> Carrinho</h2>
                <p>produtos</p>
                <button>Remover</button>
            </div>

          </GradeCamisa>

        )
    }
}

export default Produto 