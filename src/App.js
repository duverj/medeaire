import React, {useState} from 'react';
import AirStations from './components/airStations/AirStations';

function App() {  
  const [info, setInfo] = useState(false);
  
  const toggleInfo = () => {
    if(!info) {
      setInfo(true);
    } else {
      setInfo(false);
    }
  };
  return (
    <div className="container overflow-hidden">
      <div className="ml-10 mr-10 -mt-16 mb-10 h-20 rounded-lg bg-gray-600 shadow-lg rounded-t-none">-</div>
      <h1 className="text-4xl text-center font-extrabold text-gray-500 antialiased font-sans mb-10">
        Calidad del Aire
        <span className="block text-2xl font-medium leading-none text-gray-600">Valle de Aburrá</span>
      </h1>

      <AirStations />

      {info ? (
        <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md mt-10" role="alert" onClick={toggleInfo}>
        <div className="flex">
          <div className="py-1"><svg className="fill-current h-4 w-4 text-teal-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>
          <div>
            <p className="font-bold text-xs">Sobre esta app</p>
            <p className="text-xs">Este proyecto fue creado para el concurso JSCamp de Yuxi Global, emplea datos extraídos desde el sitio elcolombiano.com y tiene un propósito demostrativo. No se pretende presentar información real sobre el estado de la calidad del aire, aunque emplea datos de una fuente periodística con credibilidad.</p>
          </div>
        </div>
      </div>
      ) : (<button className="button-info mt-8 bg-transparent text-blue-700 font-semibold py-2 px-4 border-none hover:none" onClick={toggleInfo}><svg className="fill-current h-4 w-4 inline-block text-teal-500 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg> <span className="text-sm text-gray-500">Sobre esta app</span></button>)}
    </div>
  );
};

export default App;
