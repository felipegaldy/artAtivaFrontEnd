import CardProduto from '../cardproduto/CardProduto'
import './CategoriaNome.css'

const CategoriaNome = () => {



  return (
    <>
    <div className="categoriaNome">
    <div className="categoriaNomeHeader">
          <hr className="linhaCategoria" />
          <div className="tituloInicial">Acessórios</div>
          <hr className="linhaCategoria" />
    </div>
    <div className="categoriaNomeBody">
          <div className="categoriaNomeBodyItem">
            <CardProduto nome="Acessório" descricao="lorem ipsum" preco="10" />
          </div>
    </div>  
    </div>
    </>
  )
}

export default CategoriaNome