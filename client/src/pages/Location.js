import React from 'react';
import { Container, Ratio } from 'react-bootstrap';

const Locations = () => {
  return (
    <Container fluid="sm, md, lg, xl, xxl">
      <div className="locations-page">
        <h2 className="locations-header">
          Locations of the Best and Worst Guinness in Sydney!
        </h2>
        <Container className="iframe">
          <Ratio>
            <embed
              title="map"
              src="https://www.google.com.au/maps/d/embed?mid=1YpyDlUEQ_KQwcoQfYQ6Z1jFXtMNBfwdk&ehbc=2E312F"
            />
          </Ratio>
        </Container>
      </div>
    </Container>
  );
};

export default Locations;
