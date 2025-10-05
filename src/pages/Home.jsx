import React from 'react';
import HabitacionesTable from '../components/HabitacionesTable';

function Home() {
  return (
    <div className="bg-light min-vh-100">
      <header className="bg-primary text-white py-4 shadow-sm">
        <h1 className="text-center fw-bold">🏡 Habitaciones disponibles</h1>
      </header>
      <main className="container py-5">
        <HabitacionesTable />
      </main>
    </div>
  );
}

export default Home;


/*import React from 'react';
import HabitacionesTable from '../components/HabitacionesTable';

function Home() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">🏡 Habitaciones disponibles</h1>
      <HabitacionesTable />
    </div>
  );
}

export default Home;


import HabitacionesTable from '../components/HabitacionesTable';

function Home() {
  return (
    <div className="container mt-4">
      <h2>Habitaciones disponibles</h2>
      <HabitacionesTable />
    </div>
  );
}

export default Home;
*/