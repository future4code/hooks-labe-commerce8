import React from "react";


class Carrinho extends React.Component{
    getTotal = ()=>{
        const total = this.props.carrinho.reduce((acc , curr) => acc + curr.valor * curr.quantidade , 0)
        return total;
    }
    render(){
        return (
            <div>
                <h2>Carrinho</h2>
                {this.props.carrinho.map((produtos)=>{
                    return(
                        <div key={this.props.produtos.id}>
                            <div>{this.props.produtos.nomeProduto}</div>
                            <div>{this.props.produtos.valor}</div>
                            <div>
                                <button onClick={this.props.removeProduto}>-</button>
                            </div>
                            <div>{produtos.quantidade}</div>
                            <button onClick={this.props.addProduto}> +</button>
                            
                            

                        </div>
                    )
                })}
                <div>Total : R$ {this.getTotal()} , 00</div>
            </div>
        );
    }
}

export default Carrinho

