import { useEffect, useState } from "react";
import "./produto.css";

export const Produto = () => {

  const [quantidade, setQuantidade] = useState(0);

  const adicionar = () => {
    setQuantidade(quantidade + 1);
  }
  const remover = () => {
    setQuantidade(quantidade - 1);
  }

  useEffect(() => {
    if( quantidade < 1 ) {
      setQuantidade(1);
    }
  } , [quantidade]);

  return (
    <>
      <div className="produto">
        <div className="sessaoTopo">
          <div className="imagemProduto">
            <img src="https://via.placeholder.com/450" alt="Produto" />
            <img
              src="https://via.placeholder.com/90"
              className="imagemProdutoMini"
              alt="foto miniatura do produto"
            />
            <img
              src="https://via.placeholder.com/90"
              className="imagemProdutoMini"
              alt="foto miniatura do produto"
            />
            <img
              src="https://via.placeholder.com/90"
              className="imagemProdutoMini"
              alt="foto miniatura do produto"
            />
          </div>
          <div className="resumoProduto">
            <h1 className="title">lorer ipsum</h1>
            <p className="descricao">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut quis
              facilis officia enim sed quibusdam quas, ipsum ea nostrum soluta
              dolor mollitia qui illo quam dolore, suscipit dicta ducimus
              architecto.
            </p>
            <div className="imagemAnunciante">
              <img className="avatar" src="https://via.placeholder.com/90" alt="avatar" />
              <h2 className="nomeAnunciante">Ong Marias</h2>
            </div>
            <div className="comprarProduto">
              <h4 className="preco">R$ {100*quantidade},00</h4>
              <div className="quantidade">
                <div className="adicionar" onClick={adicionar} >+</div>
                <input type="number" value={quantidade} />
                <div className="remover" onClick={remover}>-</div>
              </div>
              <button className="btnComprar">Comprar</button>
                <p className="categoria">Categoria: Roupas</p>
            </div>
          </div>
        </div>
        <div className="sessaoInfos">
          <div className="quemCriou">
            quem criou?
          </div>
          <div className="sobreProduto">sobre o produto</div>
          <div className="politicasEntrega">politicas entrega</div>
        </div>
      </div>
    </>
  );
};
