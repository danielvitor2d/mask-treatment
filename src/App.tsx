import React, { useState, useCallback } from 'react';
import Input from './components/Input';

interface Usuario {
  cep: string
  cpf: string
  price: number
}

const App: React.FC = () => {
  const [usuario, setUsuario] = useState<Usuario>({} as Usuario)

  const handleChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setUsuario({
      ...usuario,
      [e.currentTarget.name]: e.currentTarget.value
    })
  }, [usuario])

  return (
    <div>
      <Input placeholder='99999-999' maxLength={8} name='cep' onKeyUp={handleChange} mask='cep' />
      <Input placeholder='12.300,00' prefix='R$' name='price' onKeyUp={handleChange} mask='currency' />
      <Input placeholder='987.490.720-72' maxLength={11} name='cpf' onKeyUp={handleChange} mask='cpf' />
      <button onClick={() => console.log(usuario)} >Salvar</button>
    </div>
  )
}

export default App