import React from 'react'
import SearchIcon from '@material-ui/icons/Search';

function Banner() {
  return (
    <div>
        <div className='bannerImg'>
            <img src='https://www.da-gym.co.kr/_next/image?url=https%3A%2F%2Fs3.ap-northeast-2.amazonaws.com%2Fstone-i-dagym-centers%2Fimages%2Fevents%2F2310_invitation_pc.png&w=768&q=75' alt='sample'/>
        </div>

        {/* 검색창 material ui */}
        <div className='bannerSearch'>
            
            <SearchIcon style={{position:'relative', top:'8px', right:'5px'}}/>
            <span>어떤 운동을 찾고 계신가요?</span>
            
        </div>
    </div>
  )
}

export default Banner