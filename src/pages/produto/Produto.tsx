import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CardProduto from "../../components/cardproduto/CardProduto";
import { buscaId } from "../../services/Service";
import { TokenState } from "../../store/tokens/tokensReduce";
import "./produto.css";

export const Produto = () => {

  const [quantidade, setQuantidade] = useState(0);
  const { id } =  useParams<{id: string}>();
  const [produto, setProduto] = useState<any>();


  const token = "Basic ZmVsaXBlMkBlbWFpbC5jb206MTIzNDU2Nzg5";

  useEffect(()=>{
    if(id !== undefined){
        findById(id)
    }
  }, [id])

  async function findById(id: string){
    buscaId(`/produtos/${id}`, setProduto,{
        headers: {
            'Authorization': token
        }
    })
  }

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
    if (quantidade > produto?.quantidade) {
      setQuantidade(produto?.quantidade);
    }
  }, [quantidade]);

  

  return (
    <>
      <div className="produto">
        <div className="sessaoTopo">
          <div className="imagemProduto">
            <img className="imagemProdutoPrincipal" src={produto?.foto ? produto?.foto : "https://via.placeholder.com/450"} alt={produto?.nome} />
            {/* <img src="https://via.placeholder.com/450" alt="Produto" /> */}
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
            <h1 className="title">{produto?.nome}</h1>
            <p className="descricao">
              {produto?.descricao}
            </p>
            <div className="imagemAnunciante">
              <img
                className="avatar"
                src={produto?.usuario?.foto ? produto?.usuario?.foto : "https://via.placeholder.com/90"}
                alt="avatar"
              />
              <h2 className="nomeAnunciante">{produto?.usuario?.nome ? produto?.usuario?.nome : "Ong Marias" }</h2>
            </div>
            <div className="comprarProduto">
              <h4 className="preco">R$ {produto?.preco * quantidade},00</h4>
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
              <h4 className="categoria">Categoria: {produto?.categoria?.nome} </h4>
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
                  src={produto?.usuario?.foto ? produto?.usuario?.foto : "https://via.placeholder.com/90"}
                  alt="avatar"
                />
                <h2 className="nomeAnunciante">{produto?.usuario?.nome ? produto?.usuario?.nome : "Ong Marias" }</h2>
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
              <h2 className="tituloSobreProduto nomeAnunciante">{produto?.nome}</h2>
              <p className="descricao">
                {produto?.descricao}
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
