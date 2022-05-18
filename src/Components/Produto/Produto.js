import { ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import camiseta1 from "../../imagens/camiseta1.jpg"
import camiseta2 from "../../imagens/camiseta2.jpg"
import camiseta3 from "../../imagens/camiseta3.jpg"
import camiseta4 from "../../imagens/camiseta4.jpg"
import camiseta5 from "../../imagens/camiseta5.jpg"
import camiseta6 from "../../imagens/camiseta6.jpg"
import { AddCarrinho, CardProduto, GradeCamisa, Nome, Preco } from './styled'
import Carrinho from '../Carrinho/Carrinho'


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
        query:'',
        carrinho : []
    }

    updateQuery = (event) =>{
        this.setState({
            query: event.target.value
        })
    }

    adicionarCarrinho = (camisasId) =>{
        const addAoCarrinho = this.state.carrinho.find((camisas)=>camisasId === camisas.id
        );
        if(addAoCarrinho){
            const novoCarrinho = this.state.carrinho.map((camisas)=>{
                if(camisasId === camisas.id){
                    return {
                        ...camisas,
                        quantidade : camisas.quantidade + 1
                    };
                }
                return camisas;
            });
            this.setState({carrinho : novoCarrinho})
        }else {
            const addCarrinho = this.state.produtos.find((camisas)=> camisasId === camisas.id);
            const addNovoCarrinho = [
                ...this.state.carrinho,
                {...addCarrinho , quantidade : + 1}
            ]
            this.setState({carrinho : addNovoCarrinho})
        }
    }
    removeProduto = (prodId) => {
        const updateCart = this.state.carrinho
          .map((produto) => {
            if (produto.id === prodId) {
              return {
                ...produto,
                quantidade: produto.quantidade - 1
              };
            }
            return produto;
          })
          .filter((produto) => produto.quantidade > 0);
        this.setState({ carrinho: updateCart });
      };
    
    
    render() {
        return (
            <>
                <div>
                    <input type="search"
                        placeholder="Busca..."
                        value={this.state.query}
                        onChange={this.updateQuery}
                    />
                </div>
                <GradeCamisa>
                    {this.state.produtos
                    .filter((produto) => {
                        return (
                            produto.nomeProduto.toLowerCase().includes(this.state.query.toLowerCase())
                        )
                    })
                    .map((item, chave) => {
                        return (
                            <CardProduto key={chave.id}>
                                <img src={item.foto} alt='camisa' />
                                <Nome>{item.nomeProduto}</Nome>
                                <Preco>R${item.valor}</Preco>
                                <AddCarrinho onClick={this.adicionarCarrinho}><ShoppingCartOutlined /></AddCarrinho>
                            </CardProduto>
                        )
                    })}
                    <Carrinho
                    produtos={this.state.produtos}
                    removeProduto = {this.removeProduto}
                    carrinho = {this.state.carrinho}
                    addProduto={this.addProduto}
                    />
                </GradeCamisa>
            </>
        )
    }
}

export default Produto 

