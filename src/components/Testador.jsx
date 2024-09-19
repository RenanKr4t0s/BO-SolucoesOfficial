import React from 'react'
import { useParams } from 'react-router-dom';

const Testador = () => {
    const {id} = useParams();
  return (
    <div>
      <p> Eu sou o cara {id}</p>
    </div>
  )
}

export default Testador
