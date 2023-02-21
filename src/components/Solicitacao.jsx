import { useState } from 'react'
import './styles/solicitacao.css'

export const Solicitacao = ()=>{
  
  const [active,setActive] = useState(true)

  function showDetails(){
    if(active){
      return(
        <div className='detalhes'>
          <div className='content'>
            <div className='observacoes'>
              <h3>Observações</h3>
              <textarea name="" id="" cols="30" rows="5" className='textarea' placeholder='Digite uma observação...'>
              </textarea>
            </div>
            <div className="status_pedido">

            </div>
          </div>
        </div>
      )
    }
  }

  return(
    <>
      <div className="solicitacao" onClick={()=> setActive(!active)}>
        <p>12/01/23</p>
        <p>20/01/23</p>
        <p id='nome'>José alvelino sousa costa</p>
        <p>8569842</p>
        <p>Amanda</p>
        <p>Carla</p>
        <p>{active?<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="icon">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="icon">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>}
        </p> 
      </div>
      {showDetails()}
      
    </>
  )
}