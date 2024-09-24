import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

export const Main = () => {
    return (
        <div className='main'>
            <div className="nav">
                <p>My AI</p>
                <div className='nav-right'>
                    <p>Welcome User</p>
                    <img src={assets.user_icon} alt="" />
                </div>
            </div>

            <div className="main-container">
                <div className="greet">
                    <p><span>Hello, User</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <h3 className='yt'>Youtube Videos</h3>
                        <p>Prompt using a youtube video link</p>
                    </div>
                    <div className="card">
                        <h3 className='image'>Image</h3>
                        <p>Prompt using a picture</p>
                    </div>
                    <div className="card">
                        <h3 className='audio'>Audio File</h3>
                        <p>Prompt using a recorded audio files</p>
                    </div>
                    <div className="card">
                        <h3 className='website'>Website link</h3>
                        <p>Prompt using a website link</p>
                    </div>
                </div>
                <p className='bottom-info'>
                    Ask anything from multiple resources
                </p>
                <div className="main-bottom">
                    <div className='search-box'>
                        <input type="text" placeholder='Message' />
                        <div>
                            <img src={assets.camera} alt="" />
                            <img src={assets.document} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img src={assets.send_icon} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
