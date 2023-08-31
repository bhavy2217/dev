// home.html
import React from 'react';
import './Home.css';
import poster from '../assets/images/poster.webp';
import circle_i1 from '../assets/images/circle_i1.webp';
import circle_i2 from '../assets/images/circle_i2.webp';
import circle_i3 from '../assets/images/circle_i3.webp';
import circle_i4 from '../assets/images/circle_i4.webp';
import p4 from '../assets/images/p4.jpg';
import dp5 from '../assets/images/dp5.jpg';
import dp10 from '../assets/images/dp10.jpg';


const Home = () => {
    return (
        <>
            <div className="home">
                <a name="home" href="#"></a>
                <div className="home-content">
                    <div className="sale-image">
                        <img src={poster} alt="" />
                    </div>
                    <div className="print-picture">
                        <p>Example of Prints</p>
                        <div className="picture-box">
                            <div className="print-circle">
                                <img src={circle_i1} className="circle-img1" alt="" />
                            </div>
                            <div className="print-circle">
                                <img src={circle_i2} className="circle-img2" alt="" />
                            </div>
                            <div className="print-circle">
                                <img src={circle_i4} className="circle-img4" alt="" />
                            </div>
                            <div className="print-circle">
                                <img src={circle_i3} className="circle-img3" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="tshirt-color-available-Box">
                        <p>Available Colours</p>
                        <div className="color-available-pic-Box">
                            <div className="tshirt-color-available-pic">
                                <img src={dp10} alt="" className="color-available-pics" />
                            </div>

                            <div className="tshirt-color-available-pic">
                                <img src={dp5} alt="" className="color-available-pics" />
                            </div>

                            <div className="tshirt-color-available-pic">
                                <img src={p4} alt="" className="color-available-pics" />
                            </div>
                        </div>
                    </div>


                    
                </div>
            </div>
        </>
    );
};

export default Home;