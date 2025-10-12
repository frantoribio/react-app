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
