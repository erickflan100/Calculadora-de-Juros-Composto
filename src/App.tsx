import { Alert } from 'react-bootstrap'
import React, { useState } from 'react'
import './index.css'

const App = () => {

  const [result, setResult] = useState('0')
  const [valor, setValor] = useState('')
  const [juros, setJuros] = useState('')
  const [meses, setMeses] = useState('')

  function calcular(){
    const a = parseFloat(valor) * Math.pow(1 + parseInt(juros) / 100, parseInt(meses))
    const b = String(a)
    setResult(b)
  }

  return (
    <>
      <div className='bg-info' style={{height:'100vh'}}>
        <div className='container-fluid bg-dark'>
          <h1 className='p-3 text-center text-info'>Calculadora de Juros</h1>
        </div>
        <div className='container-fluid bg-info section d-md-flex justify-content-center'>
          <div className='d-flex justify-content-center me-md-5'>
            <div className='form-floating-fluid'>
              <h4 className='text-center mt-2'>Valor investido</h4>
              <input type='number' className="inp form-control-md p-1 mt-2 mb-3 text-center" placeholder="100" value={valor} onChange={(e) => setValor(e.target.value)}/>
              {parseFloat(valor) < 0 && <Alert variant="danger" className='position-absolute alert'><p>Coloque o valor maior que 0</p></Alert>}
            </div>
          </div>
          <div className='d-flex justify-content-center me-md-5'>
            <div className='form-floating-fluid'>
              <h4 className='text-center mt-2'>Juros Mensal</h4>
              <input type='number' className="inp form-control-md p-1 mt-2 mb-3 text-center" placeholder="13,65" value={juros} onChange={(e) => setJuros(e.target.value)}/>
              {parseFloat(juros) < 0 && <Alert variant="danger" className='position-absolute alert'><p>Coloque o valor maior que 0</p></Alert>}
            </div>
          </div>
          <div className='d-flex justify-content-center'>
            <div className='form-floating-fluid'>
              <h4 className='text-center mt-2'>Meses</h4>
              <input type='number' className="inp form-control-md p-1 mt-2 mb-3 text-center" placeholder="12" value={meses} onChange={(e) => setMeses(e.target.value)}/>
              {parseFloat(meses) < 0 && <Alert variant="danger" className='position-absolute alert'><p>Coloque o valor maior que 0</p></Alert>}
            </div>
          </div>
        </div>
        <div className='sec container-fluid bg-light'>
          <div className='d-flex justify-content-center'>
            <button type='button' className='bttn btn btn-info me-fluid-4' onClick={calcular}>CALCULAR</button>
          </div>
          <div className='d-flex justify-content-center'>
            {parseFloat(result) <= 1 && <span className='result'>Resultado: Preencha todos os campos com números válidos</span>}
            {parseFloat(result) > 1 && <span className='result'>Resultado: {`${parseFloat(result).toFixed(2)} R$`}</span>}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;