import {Menu} from '../components/Menu'
import { Solicitacao } from '../components/Solicitacao'
import "../pages/styles/dashboard.css"


export const Dashboard =()=>{
  return(
    <>   
      <div className="container">
        <Menu/>
        <div className='dashboard'>
          <div className='header-dashboard'>
            <h2>Acompanhe todas as solicitações</h2>
            <div className='menu-actives'>
              <span><div className='green-icon'></div> Ativados</span>
              <span><div className='red-icon'></div>Desativados</span>
            </div>
            <div className='card_area'>
              <div className='card' id='lucro-diario'>
                <h4>Lucro Diário</h4>
                <p><strong>2</strong> encerramentos</p>
                <h3>R$ 685.80</h3>
              </div>
              <div className='card' id='lucro-mensal'>
                <h4>Lucro Mensal</h4>
                <p><strong>2</strong> encerramentos</p>
                <h3>R$ 685.80</h3>
              </div>
              <div className='card' id='controle'>
                <h4>Controle</h4>
                <p className='p-controle'><strong className='orange'>20</strong> Solicitações Ativas</p>
                <p className='p-controle'><strong className='blue'>25</strong> Aguardando encerramento</p>
                <div href="">Ver solicitações pendentes</div>
              </div>
              <div className='card' id='filtros'>
               <div className='menu_filtros'>
                  <h4>Filtros</h4>
                  <span>Por data</span>
                  <span>Parceiro</span>
                  <span>Canal</span>
               </div>
              </div>
            </div>
          </div>
          <div className="solicitacao-area">
            <div className="headers-tabela">
              <p>solicitação</p>
              <p>Encerramento</p>
              <p>Nome do cliente</p>
              <p>Nb</p>
              <p>Canal</p>
              <p>Parceiro</p>
            </div>
            <div className="lista">
            <Solicitacao/>
            <Solicitacao/>
            <Solicitacao/>
            <Solicitacao/>
            
            </div>
          </div>
        </div>
      </div>      
    </>
  )
}