
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importa los estilos de Font Awesome
import './index.css'; // Importa los estilos personalizados

const SecondsCounter = ({ seconds }) => {
  const [currentSeconds, setCurrentSeconds] = useState(seconds);
  const [isCounting, setIsCounting] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isCounting) {
        setCurrentSeconds((prevSeconds) => prevSeconds + 1);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isCounting]);

  const formatTime = (totalSeconds) => {
    const individualNumbers = totalSeconds.toString().split('');
    return individualNumbers.map((num, index) => (
      <div key={index} className="number-box">
        {num}
      </div>
    ));
  };

  const resetCounter = () => {
    setCurrentSeconds(0);
    setIsCounting(true);
  };

  const stopCounter = () => {
    setIsCounting(false);
  };

  const resumeCounter = () => {
    setIsCounting(true);
  };

  useEffect(() => {
    if (currentSeconds === 10) {
      alert('¡Tiempo específico alcanzado!');
      stopCounter(); 
    }
  }, [currentSeconds]);

  return (
    <div className="navbar">
      <div className="">
       
      </div>
      <div className="number-boxes">
      <div className="number-box"> <i className="fas fa-stopwatch white-symbol"></i></div>
        <div className="number-box">0</div>
        <div className="number-box">0</div>
        <div className="number-box">0</div>
        <div className="number-box">0</div>
        <div className="number-box">0</div>
        {formatTime(currentSeconds)}
      </div>
      <div className="control-boxes">
        <button onClick={resetCounter}>Reiniciar</button>
        <button onClick={stopCounter}>Detener</button>
        <button onClick={resumeCounter}>Reanudar</button>
      </div>
    </div>
  );
};


SecondsCounter.propTypes = {
  seconds: PropTypes.number.isRequired
};

export default SecondsCounter;






