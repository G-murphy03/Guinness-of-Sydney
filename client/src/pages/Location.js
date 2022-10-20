import React from 'react';

const Locations = () => {
  return (
    <div>
      <h1>Locations</h1>

      <h2>Locations of the Best and Worst Guinness in Sydney!</h2>
      <div>
        <iframe
          title='map'
          src='https://www.google.com.au/maps/d/embed?mid=1YpyDlUEQ_KQwcoQfYQ6Z1jFXtMNBfwdk&ehbc=2E312F'
          width='640'
          height='480'
        ></iframe>
      </div>
    </div>
  );
};

export default Locations;
