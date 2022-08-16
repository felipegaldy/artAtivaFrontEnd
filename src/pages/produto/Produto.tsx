import { useEffect, useState } from "react";
import CardProduto from "../../components/cardproduto/CardProduto";
import "./produto.css";

export const Produto = () => {
  const [quantidade, setQuantidade] = useState(0);

  const adicionar = () => {
    setQuantidade(quantidade + 1);
  };
  const remover = () => {
    setQuantidade(quantidade - 1);
  };

  useEffect(() => {
    if (quantidade < 1) {
      setQuantidade(1);
    }
  }, [quantidade]);

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
              <img
                className="avatar"
                src="https://via.placeholder.com/90"
                alt="avatar"
              />
              <h2 className="nomeAnunciante">Ong Marias</h2>
            </div>
            <div className="comprarProduto">
              <h4 className="preco">R$ {100 * quantidade},00</h4>
              <div className="quantidade">
                <div className="adicionar" onClick={adicionar}>
                  +
                </div>
                <input type="number" value={quantidade} />
                <div className="remover" onClick={remover}>
                  -
                </div>
              </div>
              <button className="btnComprar">Comprar</button>
              <p className="categoria">Categoria: Roupas</p>
            </div>
          </div>
        </div>
        <div className="sessaoInfos">
          <div className="quemCriou">
            <div className="tituloDiv">Quem Criou?</div>
            <div className="conteudoDiv">
              <div className="imagemAnunciante">
                <img
                  className="avatar"
                  src="https://via.placeholder.com/90"
                  alt="avatar"
                />
                <h2 className="nomeAnunciante">Ong Marias</h2>
                <img
                  src="https://i.imgur.com/cihSNjX.jpeg"
                  alt="selo-feito-a-mao"
                  className="selo"
                />
              </div>
              <p className="descricao">
              Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. 
              Vide electram sadipscing et per.Cevadis im ampola pa arma uma pindureta.
              Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. 
              Aenean sit amet nisi.In elementis mé pra quem é amistosis quis leo.
              </p>
            </div>
          </div>
          <div className="containerSobrePoliticas">
            <div className="sobreProduto">
            <div className="tituloDiv">Sobre o produto</div>
            <div className="conteudoDiv">
              <h2 className="tituloSobreProduto nomeAnunciante">lorem ipsum</h2>
              <p className="descricao">
                Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit.
                Vide electram sadipscing et per.Cevadis im ampola pa arma uma pindureta.
                Posuere libero varius. Nullam a nisl ut ante blandit hendrerit.
                Aenean sit amet nisi.In elementis mé pra quem é amistosis quis leo.
              </p>
            </div>
            </div>
            <div className="politicasEntrega m-l20">
            <div className="tituloDiv">Politicas de entrega</div>
            <div className="conteudoDiv">
              <h2 className="tituloSobreProduto nomeAnunciante">lorem ipsum</h2>
              <p className="descricao">
                Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit.
                Vide electram sadipscing et per.Cevadis im ampola pa arma uma pindureta.
                Posuere libero varius. Nullam a nisl ut ante blandit hendrerit.
                Aenean sit amet nisi.In elementis mé pra quem é amistosis quis leo.
              </p>
            </div>
            </div>
          </div>
        </div>
        <div className="avaliacoes">
          <hr className="linha" />
          <div className="tituloInicial">Avaliações</div>
          <hr className="linha" />
        </div>
        <div className="avaliacoesComentarios">
          <div className="comentario">
            <div className="imagemComentario">
              <img className="avatar" src="https://via.placeholder.com/90" alt="avatar" />
            </div>
            <div className="textoComentario">
              <h3 className="nomeComentario">Beltrano</h3>
              <p className="descricaoComentario">
                Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit.
                Vide electram sadipscing et per.Cevadis im ampola pa arma uma pindureta.
                Posuere libero varius. Nullam a nisl ut ante blandit hendrerit.
                Aenean sit amet nisi.In elementis mé pra quem é amistosis quis leo.
              </p>
            </div>
          </div>
          <div className="comentario">
            <div className="imagemComentario">
              <img className="avatar" src="https://via.placeholder.com/90" alt="avatar" />
            </div>
            <div className="textoComentario">
              <h3 className="nomeComentario">Fulano de Tal</h3>
              <p className="descricaoComentario">
                Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit.
                Vide electram sadipscing et per.Cevadis im ampola pa arma uma pindureta.
                Posuere libero varius. Nullam a nisl ut ante blandit hendrerit.
                Aenean sit amet nisi.In elementis mé pra quem é amistosis quis leo.
              </p>
            </div>
          </div>
        </div>
        <div className="talvezVoceGoste">
          <hr className="linha" />
          <div className="tituloInicial">Recomendações</div>
          <hr className="linha" />
        </div>
        <div className="produtosRecomendados">
            <CardProduto nome={"Produto"} descricao={"descricao"} preco={25} />
            <CardProduto nome={"Produto"} descricao={"descricao"} preco={25} />
            <CardProduto nome={"Produto"} descricao={"descricao"} preco={25} />
            <CardProduto nome={"Produto"} descricao={"descricao"} preco={25} />
        </div>
      </div>
    </>
  );
};
