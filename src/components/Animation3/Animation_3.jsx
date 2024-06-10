//Main Imports
import React, { useEffect } from 'react'

//Anime.JS Import
import  anime from "animejs/lib/anime.es";

//Icon Imports
import { GrPlan } from "react-icons/gr"; // Planning
import { LuFileSearch } from "react-icons/lu"; // Requirements
import { MdDesignServices } from "react-icons/md"; // Design
import { FaConnectdevelop } from "react-icons/fa"; // Development
import { GrTest } from "react-icons/gr"; // Testing
import { AiOutlineDeploymentUnit } from "react-icons/ai"; // Deployment

//Style Imports
import './animation_3.style.scss';

//Adding this line for git activity

export default function Animation3Component() {
    const iconSize = 50

    useEffect(() => {
        const timeLineConfig = { loop: true };
        const tl = anime.timeline(timeLineConfig);
        const timeDuration = 250;
        const timeDelay = 50;

        const fsUcLc2 = window.document.querySelector('.fs-uc2 .sm-rc-2');

        const blueColor = 'rgb(50, 83, 144)';
        const yellowColor = 'rgb(248, 191, 101)';
        const redColor = 'rgb(232, 64, 79)';
        const grayColor = 'rgb(154, 174, 189)';
        const lightBlue = 'rgb(103, 141, 227)';
        const pinkColor = 'rgb(255, 116, 129)';

        // const blueColor = 'rgb(0, 0, 0)';
        // const yellowColor = 'rgb(0, 0, 0)';
        // const redColor = 'rgb(0, 0, 0)';
        // const grayColor = 'rgb(0, 0, 0)';
        // const lightBlue = 'rgb(0, 0, 0)';
        // const pinkColor = 'rgb(0, 0, 0)';

        tl.add({
            targets: '#hr-line-f-1',
            width: ['0%', '100%'],
            height: ['0%', '100%'],
            duration: timeDuration,
            easing: 'linear',
        })
        .add({
            targets: '.sm-lc-1',
            backgroundColor: blueColor,
            duration: timeDuration,
            easing: 'linear',
        })
        .add({
            targets: ['.cb-1', '.fs-uc1'],
            color: blueColor,
            borderColor: blueColor,
            delay: 500,
            duration: timeDuration,
            easing: 'linear'
        })
        .add({
            targets: '.sm-rc-1',
            backgroundColor: blueColor,
            duration: timeDuration,
            delay: timeDelay,
            easing: 'linear',
        })
        .add({
            targets: '#hr-line-f-2',
            width: ['0%', '100%'],
            height: ['0%', '100%'],
            duration: timeDuration,
            easing: 'linear',
        })
        .add({
            targets: '.sm-lc-2',
            backgroundColor: yellowColor,
            duration: timeDuration,
            easing: 'linear',
        })
        .add({
            targets: ['.cb-2', '.fs-lc2'],
            color: yellowColor,
            borderColor: yellowColor,
            delay: timeDelay,
            duration: timeDuration,
            easing: 'linear'
        })
        .add({
            targets: '.sm-rc-2',
            backgroundColor: yellowColor,
            delay: timeDelay,
            duration: timeDuration,
            easing: 'linear'
        })
        .add({
            targets: '#hr-line-f-3',
            width: ['0%', '100%'],
            height: ['0%', '100%'],
            duration: timeDuration,
            easing: 'linear',
        })
        .add({
            targets: '.sm-lc-3',
            backgroundColor: redColor,
            delay: timeDelay,
            duration: timeDuration,
            easing: 'linear'
        })
        .add({
            targets: ['.cb-3', '.fs-uc3'],
            color: redColor,
            borderColor: redColor,
            delay: timeDelay,
            duration: timeDuration,
            easing: 'linear'
        })
        .add({
            targets: '.sm-rc-3',
            backgroundColor: redColor,
            delay: timeDelay,
            duration: timeDuration,
            easing: 'linear'
        })
        .add({
            targets: '#hr-line-f-4',
            width: ['0%', '100%'],
            height: ['0%', '100%'],
            duration: timeDuration,
            easing: 'linear',
        })
        .add({
            targets: '.sm-lc-4',
            backgroundColor: grayColor,
            duration: timeDuration,
            easing: 'linear'
        })
        .add({
            targets: ['.cb-4', '.fs-lc4'],
            color: grayColor,
            borderColor: grayColor,
            delay: timeDelay,
            duration: timeDuration,
            easing: 'linear'
        })
        .add({
            targets: '.sm-rc-4',
            backgroundColor: grayColor,
            duration: timeDuration,
            delay: timeDelay,
            easing: 'linear'
        })
        .add({
            targets: '#hr-line-f-5',
            width: ['0%', '100%'],
            height: ['0%', '100%'],
            duration: timeDuration,
            easing: 'linear',
        })
        .add({
            targets: '.sm-lc-5',
            backgroundColor: lightBlue,
            duration: timeDuration,
            delay: timeDelay,
            easing: 'linear'
        })
        .add({
            targets: ['.cb-5', '.fs-uc5'],
            color: lightBlue,
            borderColor: lightBlue,
            delay: timeDelay,
            duration: timeDuration,
            easing: 'linear'
        })
        .add({
            targets: '.sm-rc-5',
            backgroundColor: lightBlue,
            duration: timeDuration,
            delay: timeDelay,
            easing: 'linear'
        })
        .add({
            targets: '#hr-line-f-6',
            width: ['0%', '100%'],
            height: ['0%', '100%'],
            duration: timeDuration,
            easing: 'linear',
        })
        .add({
            targets: '.sm-lc-6',
            backgroundColor: pinkColor,
            duration: timeDuration,
            delay: timeDelay,
            easing: 'linear'
        })
        .add({
            targets: ['.cb-6', '.fs-lc6'],
            color: pinkColor,
            borderColor: pinkColor,
            delay: timeDelay,
            duration: timeDuration,
            easing: 'linear'
        })
        .add({
            targets: '.sm-rc-6',
            backgroundColor: pinkColor,
            duration: timeDuration,
            delay: timeDelay,
            easing: 'linear'
        })
        .add({
            targets: '#hr-line-f-7',
            width: ['0%', '100%'],
            height: ['0%', '100%'],
            duration: timeDuration,
            easing: 'linear',
        })

    }, []);

    return (
        <>
            <div className='first-1-div'></div>
            <div className='animation-3'>
                <div className='dsk-animation'>
                    <div className='dsk-process'>
                        {/* Block 1 Planning */}
                        <div className='hr-line fs-ln'>
                            <div className='hr-line-fill' id='hr-line-f-1'></div>
                        </div>
                        <div className='back-circle fs-c1'>
                            <div className='upper-circle fs-uc1'>
                                <span className='sm-lc-1'/>
                                <span className='sm-rc-1'/>

                                <span className='count-box cb-1'>01</span>

                                <span className='inner-content box-1'>
                                    <GrPlan color='white' size={iconSize}/>
                                </span>
                            </div>
                            <div className='lower-circle fs-lc1'></div>
                        </div>

                        {/* Block 2 Requirements */}
                        <div className='hr-line fs-ln'>
                            <div className='hr-line-fill' id='hr-line-f-2'></div>
                        </div>
                        <div className='back-circle fs-c2'>
                            <div className='upper-circle fs-uc2'>
                                <span className='sm-lc-2'/>
                                <span className='sm-rc-2'/>

                                <span className='count-box cb-2' id='cb-2'>02</span>

                                <span className='inner-content box-2'>
                                    <LuFileSearch color='white' size={iconSize}/>
                                </span>

                            </div>
                            <div className='lower-circle fs-lc2'>
                                <span className='count-box cb-2'>02</span>
                            </div>
                        </div>

                        {/* Block 3 Design */}
                        <div className='hr-line fs-ln'>
                            <div className='hr-line-fill' id='hr-line-f-3'></div>
                        </div>
                        <div className='back-circle fs-c3'>
                            <div className='upper-circle fs-uc3'>
                                <span className='sm-lc-3'/>
                                <span className='sm-rc-3'/>

                                <span className='count-box cb-3'>03</span>

                                <span className='inner-content box-3'>
                                    <MdDesignServices color='white' size={iconSize}/>
                                </span>
                            </div>
                            <div className='lower-circle fs-lc3'></div>
                        </div>

                        {/* Block 4 Development */}
                        <div className='hr-line fs-ln'>
                            <div className='hr-line-fill' id='hr-line-f-4'></div>
                        </div>
                        <div className='back-circle fs-c4'>
                            <div className='upper-circle fs-uc4'>
                                <span className='sm-lc-4'/>
                                <span className='sm-rc-4'/>

                                <span className='count-box cb-4' id='cb-4'>04</span>
                                <span className='inner-content box-4'>
                                    <FaConnectdevelop color='white' size={iconSize}/>
                                </span>

                            </div>
                            <div className='lower-circle fs-lc4'>
                                <span className='count-box cb-4'>04</span>
                            </div>
                        </div>

                        {/* Block 5 Testing */}
                        <div className='hr-line fs-ln'>
                            <div className='hr-line-fill' id='hr-line-f-5'></div>
                        </div>
                        <div className='back-circle fs-c5'>
                            <div className='upper-circle fs-uc5'>
                                <span className='sm-lc-5'/>
                                <span className='sm-rc-5'/>

                                <span className='count-box cb-5'>05</span>

                                <span className='inner-content box-5'>
                                    <GrTest color='white' size={iconSize}/>
                                </span>
                            </div>
                            <div className='lower-circle fs-lc5'></div>
                        </div>

                        {/* Block 6 Deployments */}
                        <div className='hr-line fs-ln'>
                            <div className='hr-line-fill' id='hr-line-f-6'></div>
                        </div>
                        <div className='back-circle fs-c6'>
                            <div className='upper-circle fs-uc6'>
                                <span className='sm-lc-6'/>
                                <span className='sm-rc-6'/>

                                <span className='count-box cb-6' id='cb-6'>06</span>

                                <span className='inner-content box-6'>
                                    <AiOutlineDeploymentUnit color='white' size={iconSize}/>
                                </span>

                            </div>
                            <div className='lower-circle fs-lc6'>
                                <span className='count-box cb-6'>06</span>
                            </div>
                        </div>
                        <div className='hr-line fs-ln'>
                            <div className='hr-line-fill' id='hr-line-f-7'></div>
                        </div>
                    </div>
                    <div className='process-titles-div'>
                        <div className='title-div'>
                            <h4 className='title-heading'>Planning</h4>
                            <p className='title-description'>Understand client objectives, audience, and app features.</p>
                        </div>
                        <div className='title-div'>
                            <h4 className='title-heading'>Requirements</h4>
                            <p className='title-description'>Determine the backend and database requirements</p>
                        </div>
                        <div className='title-div'>
                            <h4 className='title-heading'>Design</h4>
                            <p className='title-description'>Develop UI/UX designs for a visually appealing and intuitive user experience.</p>
                        </div>
                        <div className='title-div'> 
                            <h4 className='title-heading'>Development</h4>
                            <p className='title-description'>Write code and develop the app's frontend and backend.</p>
                        </div>
                        <div className='title-div'> 
                            <h4 className='title-heading'>Testing</h4>
                            <p className='title-description'>Rigoursly test the app to detect and resolve bugs and issues.</p>
                        </div>
                        <div className='title-div'> 
                            <h4 className='title-heading'>Deployment</h4>
                            <p className='title-description'>Prepare the app for deployment, including server setup and configuration.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='first-1-div'></div>
        </>
    );

}
