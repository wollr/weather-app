import { useRef, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const CityForm = (props) => {

  const cityInputRef = useRef();

  useEffect(() => {
    cityInputRef.current.focus();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    const city = cityInputRef.current.value;
    props.onSubmit(city);
    cityInputRef.current.value = '';
  };

  return (
    <Container className="h-100 py-5">
      <Row className="justify-content-center align-items-center h-100">
        <Col lg='4'>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicInput">
              <Form.Label htmlFor="cityInput">Enter a City</Form.Label>
              <Form.Control
                required
                id="cityInput"
                type="input"
                placeholder="Enter a City..."
                ref={cityInputRef}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CityForm;