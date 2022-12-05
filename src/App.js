import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import CityForm from './components/CityForm';
import Output from './components/Output';

function App() {
  const apiKey = 'c58c2734f177111e4e37f6d683585dd8';
  const [weatherData, setWeatherData] = useState([{}]);
  // const [formIsVisible, setFormIsVisible] = useState(true);

  const submitHandler = async (enteredCity) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${enteredCity}&appid=${apiKey}&units=metric&lang=en`
    );
    // setFormIsVisible(false)
    const data = await response.json();
    setWeatherData(data);
  };

  return (
      <Container>
        <CityForm onSubmit={submitHandler} />
        {typeof weatherData.main !== 'undefined' && (
          <Output weatherData={weatherData} />
        )}
        {weatherData.cod === '404' && (
          <p style={{ textAlign: 'center' }}>City not found.</p>
        )}
      </Container>
  );
}

export default App;
