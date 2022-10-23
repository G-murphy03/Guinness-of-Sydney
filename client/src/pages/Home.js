import React from 'react';
// import ReviewForm from '../components/ReviewForm';


const Home = () => {
  return (
    <div>
      {/* <ReviewForm /> */}
      <div className="who-we-are">
        <h1>Who We Are</h1>
        <div className="who-we-are-content">
          <img
            src={require("../assets/guinness-beer.png")}
            alt="Guinness"
          ></img>
          <p>
            Guinness of Sydney serves to review beers in pubs all over Sydney.
            Specifically, Guinness beers. Each Guinness Beer is served
            differently, so our goal is to travel all over Sydney, all for the
            sake of judging Guinness beers.
          </p>
        </div>
      </div>
      <div className="the-perfect-pour">
        <h1>The Perfect Pour</h1>
        <div className="step-one">
          <img src={require("../assets/step-one.png")} alt=""></img>
          <p>
            <h3>Step One</h3>
            What does it take to create the perfect pour? Well, first you must
            prepare a glass. A nice, tall Guinness glass is best.
          </p>
        </div>

        <div className="step-two">
          <p>
            <h3>Step Two</h3>
            Tilt the glass. A good Guinness starts at an angle of 45 degrees.
            Now pour until the glass reaches about 3/4 full.
          </p>
          <img src={require("../assets/step-two.jpg")} alt=""></img>
        </div>

        <div className="step-three">
          <img src={require("../assets/step-three.png")} alt=""></img>
          <p>
            <h3>Step Three</h3>
            Now let it settle. Resist your temptation to drink. But only for a
            ninety-two and a half seconds.
          </p>
        </div>
        <div className="step-four">
          <p>
            <h3>Step Four</h3>
            The glass isn't full yet. Time to top up.
          </p>
          <img src={require("../assets/step-four.jpg")} alt=""></img>
        </div>

        <div className="step-five">
          <img src={require("../assets/step-five.jpg")} alt=""></img>
          <p>
            <h3>Step Five</h3>
            Perfection.
          </p>
        </div>
      </div>

      <div className="quote">
        <img src={require("../assets/flann-pic.jpg")} alt=""></img>
        <p>
          "In time of trouble and lousey strife, <br />
          You have still got a darlint plan  <br />
          You still can turn to a brighter life – <br />
          A pint of plain is your only man." <br />
          ~ Flann O'Brien
        </p>
      </div>
    </div>
  );
};

export default Home;
