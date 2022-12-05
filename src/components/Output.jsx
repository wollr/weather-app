import Card from 'react-bootstrap/Card';

const Output = (props) => {
  return (
    <Card style={{ width: '18rem' }} className="m-auto align-self-center">
      <Card.Body>
        <Card.Title>{props.weatherData.name}</Card.Title>
        <Card.Text>
          Current temperature: {Math.round(props.weatherData.main.temp)}
          °C
          <br />
          <span>
            {props.weatherData.weather[0].description[0].toUpperCase() +
              props.weatherData.weather[0].description.slice(1)}
          </span>
          <img
            src={`http://openweathermap.org/img/wn/${props.weatherData.weather[0].icon}@2x.png`}
            alt={props.weatherData.weather[0].main}
          />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Output;