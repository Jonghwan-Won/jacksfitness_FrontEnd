import React from 'react'
import SocialKakao from '../../component/SocialKakao'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-div'>
                <h1>footer 영역</h1>
            </div>
            <div>
              {SocialKakao()}
            </div>
        </div>
    )
}


export default Footer
