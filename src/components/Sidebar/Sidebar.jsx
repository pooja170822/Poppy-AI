import React, { useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'

export const Sidebar = () => {

    return (
        <div className='sidebar'>
            <div className='top'>
                <div className='menu'>
                <img  src={assets.side_bar} alt="" />
                <img src={assets.arrow_icon} alt="" /> 
                </div>
                <div className="new-chat">
                    <img src={assets.plus_icon} alt="" />
                    <p>New Chat</p>
                </div>

                <div className="recent">
                    <p className="recent-title">Recent</p>
                    <div className="recent-entry">
                        <img src={assets.message_icon} alt="" />
                        <p>What is My Ai ?</p>
                    </div>
                    <div className="recent-entry">
                        <img src={assets.message_icon} alt="" />
                        <p>What is Android and..</p>
                    </div>
                    <div className="recent-entry">
                        <img src={assets.message_icon} alt="" />
                        <p>Deep Learning in..</p>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="bottom-item">
                    <img src={assets.question_icon} alt="" />
                    <p>Help</p>
                </div>
                <div className="bottom-item">
                    <img src={assets.setting_icon} alt="" />
                    <p>Settings</p>
                </div>
                <div className='trial'>
                    <div>
                        <p>My Ai Trial for free</p>
                        <p className='bold'> LIMITED TIME</p>
                    </div>
                    <p className='line'>Enjoy 7 days of unlimited access to My Ai. No credit card needed.</p>
                    <div className='button'>
                    <button className='login_btn'>Login</button>
                    <button className='sign-up_btn'>Sign Up</button>
                    </div>
                </div>
            </div>



        </div>

    )
}
