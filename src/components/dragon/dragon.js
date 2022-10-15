/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable object-curly-newline */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Badge, Button, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { bookDragons, cancelDragons } from '../../redux/dragon/dragon';
import './dragon.css';

const DragonPage = () => {
  const dispatch = useDispatch();
  const { dragons } = useSelector((state) => state.dragon);
  const clickHandler = (id, reserved) => {
    if (reserved === false || reserved === undefined) {
      dispatch(bookDragons(id));
    } else {
      dispatch(cancelDragons(id));
    }
  };
  document.title = "Space Travelers' Hub| Dragons";
  return (
    <Container>
      {dragons.map((dragon) => (
        <Row className="my-3" key={dragon.id}>
          <Col md={4}>
            <img
              src={
                dragon.flickr_images.length === 2
                  ? 'https://live.staticflickr.com/8578/16655995541_7817565ea9_k.jpg'
                  : dragon.flickr_images
              }
              alt="dragon"
              className="img-fluid"
            />
          </Col>
          <Col md={8}>
            <h3>{dragon.dragon_name}</h3>
            <p>
              <Badge bg="primary">{dragon.reserved ? 'Reserved' : ' '}</Badge>{' '}
              {dragon.type}
            </p>
            <Button
              variant={dragon.reserved ? 'outline-danger' : 'primary'}
              onClick={() => clickHandler(dragon.id, dragon.reserved)}
            >
              {dragon.reserved ? 'Cancel Booking' : 'Book Dragon'}
            </Button>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default DragonPage;
