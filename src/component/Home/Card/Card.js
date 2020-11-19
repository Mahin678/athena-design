import React from 'react';
import './Card.scss';

const Card = () => {
    return (
        <div className=' text-center'>
            <h1>Choose Your Dedicated Team</h1>
             <div className='row mt-5'>
                <div className="col-md-4">
                    <div class="card" style={{width: "26rem", height: '35rem'}}>
                    <div class="text-dark text-center">

                        <h1 className='mb-4 text-dark' style={{fontSize: '70px'}}>$199</h1>
                        <div style={{fontSize: '18px', fontWeight:'500'}}>
                            <p className='text-secondary'>For Elite</p>
                            <input className='input1' type="text"/>
                            <p>Homepage</p>
                            <p>No Inner Pages</p>
                            <p>Asset file</p>
                            <p>Source file</p>
                            <p>Free Stock Photos</p>
                            <p>10 Days free Support</p>
                            <p>24/7 Support</p>
                        </div>
                        <button className='button'>Order Now</button>
                    </div>
                    </div>
                </div>
                <div className="col-md-4 ">
                    <div class="card" style={{width: "26rem", height: '35rem'}}>
                    <div class="text-dark text-center">

                        <h1 className='mb-4 text-dark' style={{fontSize: '70px'}}>$399</h1>
                        <div style={{fontSize:'18px', fontWeight:'500'}}>
                            <p className='text-secondary'>For Preferred</p>
                            <input className='input1' type="text"/>
                            <p>Homepage</p>
                            <p>4 Inner Pages</p>
                            <p>Asset file</p>
                            <p>Source file</p>
                            <p>Free Stock Photos</p>
                            <p>20 Days free Support</p>
                            <p>24/7 Support</p> 
                        </div>
                        <button className='button'>Order Now</button>
                    </div>
                    </div>
                </div>
                <div className="col-md-4 ">
                    <div class="card" style={{width: "26rem", height: '35rem'}}>
                    <div class="text-dark text-center">

                        <h1 className='mb-4 text-dark' style={{fontSize: '70px'}}>$599</h1>
                        <div style={{fontSize:'18px', fontWeight:'500'}}>
                            <p className='text-secondary'>For Elite</p>
                            <input className='input1' type="text"/>
                            <p>Homepage</p>
                            <p>8 Inner Pages</p>
                            <p>Asset file</p>
                            <p>Source file</p>
                            <p>Free Stock Photos</p>
                            <p>30 Days free Support</p>
                            <p>24/7 Support</p>
                        </div>
                        <button className='button'>Order Now</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;