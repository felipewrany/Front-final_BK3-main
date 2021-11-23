import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {
  const entrada = props.data;
  return (
    <Link to={`/view/${entrada._id}`} className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{ entrada.nome }</h5>
          <span className="badge bg-light text-dark">R$ { entrada.valor }</span>
        </div>
      </div>
    </Link>
  )
}

export default Card
