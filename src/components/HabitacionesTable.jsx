import { useEffect, useState } from 'react';
import api from '../services/api';

function HabitacionesTable() {
  const [habitaciones, setHabitaciones] = useState([]);

  useEffect(() => {
    api.get('/habitaciones')
      .then(res => setHabitaciones(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="row">
      {habitaciones.map(h => (
        <div className="col-md-6 col-lg-4 mb-4" key={h.id}>
          <div className="card h-100 shadow-sm border-0">
            {h.imagenesUrl?.[0] && (
              <img src={h.imagenesUrl[0]} className="card-img-top" alt={h.titulo} style={{ height: '200px', objectFit: 'cover' }} />
            )}
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{h.titulo}</h5>
              <p className="text-muted mb-1">{h.ciudad}</p>
              <p className="card-text flex-grow-1">{h.descripcion}</p>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <span className="fw-bold text-primary">{h.precioMensual} €/mes</span>
                <button className="btn btn-outline-primary btn-sm">Reservar</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HabitacionesTable;

/*
import { useEffect, useState } from 'react';
import api from '../services/api'; // Usa tu instancia Axios con JWT si aplica

function HabitacionesTable() {
  const [habitaciones, setHabitaciones] = useState([]);

  useEffect(() => {
    api.get('/habitaciones')
      .then(res => setHabitaciones(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="row">
      {habitaciones.map(h => (
        <div className="col-md-4 mb-4" key={h.id}>
          <div className="card shadow-sm h-100">
            {h.imagenesUrl?.[0] && (
              <img src={h.imagenesUrl[0]} className="card-img-top" alt={h.titulo} />
            )}
            <div className="card-body">
              <h5 className="card-title">{h.titulo}</h5>
              <p className="card-text text-muted">{h.ciudad}</p>
              <p className="card-text">{h.descripcion}</p>
              <div className="d-flex justify-content-between align-items-center">
                <span className="fw-bold text-primary">{h.precioMensual} €/mes</span>
                <button className="btn btn-outline-success btn-sm">Reservar</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HabitacionesTable;



import { useEffect, useState } from 'react';
import axios from 'axios';

function HabitacionesTable() {
  const [habitaciones, setHabitaciones] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/habitaciones')
      .then(res => setHabitaciones(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Título</th>
          <th>Ciudad</th>
          <th>Precio</th>
          <th>Descripción</th>
        </tr>
      </thead>
      <tbody>
        {habitaciones.map(h => (
          <tr key={h.id}>
            <td>{h.titulo}</td>
            <td>{h.ciudad}</td>
            <td>{h.precioMensual} €</td>
            <td>{h.descripcion}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default HabitacionesTable;
*/