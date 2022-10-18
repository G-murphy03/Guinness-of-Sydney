import React from 'react';

// TODO: Work on CSS
const Home = () => {
    return (
        <div>
            <div className='who-we-are'>
                <h1>Who We Are</h1>
                <img src={require('../assets/guinness-beer.png')}></img>
                <p>
                    Guinness of Sydney serves to review beers in pubs all over Sydney. Specifically, Guinness beers.

                </p>
            </div>
            <div className='the-perfect-pour'>
                <h1>The Perfect Pour</h1>
                <img src={require('../assets/step-one.png')}></img>
                <p className='step-one'>
                    What does it take to create the perfect pour?
                    Well, first you must prepare a glass. A nice, tall Guinness glass is best.
                </p>
                <img src={require('../assets/step-two.png')}></img>
                <p className='step-two'>
                    Tilt the glass. A good Guinness starts at an angle of 45 degrees.
                </p>
                <p className='step-three'>
                    Pour. That's it, just pour. Pour until you fill the glass 3/4 full.
                </p>
                <img src={require('../assets/step-four.png')}></img>
                <p className='step-four'>
                    Now let it settle. Resist your temptation to drink. But only for a ninety-two and a half seconds.
                </p>
                <img src={require('../assets/step-five.png')}></img>
                <p className='step-five'>
                    The glass isn't full yet. Time to top up.
                </p>
                <img src={require('../assets/step-six.png')}></img>
                <p className='step-six'>
                    Perfection.
                </p>
            </div>
            <div>
                <img src={require('../assets/flann-pic.jpg')}></img>
                <p className='quote'>
                    "In time of trouble and lousey strife,
                    You have still got a darlint plan
                    You still can turn to a brighter life –
                    A pint of plain is your only man."
                    ~ Flann O'Brien
                </p>
            </div>
        </div>
    )
}

export default Home;