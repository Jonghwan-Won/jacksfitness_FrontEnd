import axios from 'axios';
import React, { useEffect, useState } from 'react'
import TestButtons from './TestButtons';
import Banner from './Banner';


function MainPage() {

    // 백엔드 통신 테스트
    const [hello, setHello] = useState('')

    useEffect(() => {
        axios.get('/api/hello')
            .then(response => setHello(response.data))
            .catch(error => console.log(error))
    }, []);

    return (
        <div className='mainPageDiv'>
            {/* 배너영역 */}
            <Banner />

            {/* 바로가기 버튼 영역 */}
            <TestButtons />

            {/* 백엔드 통신 테스트구간 */}
            <div style={{height: '200px', marginTop: '100px'}} >
                <h1>백엔드 통신 테스트구간</h1>
                {hello}
            </div>

        </div>
  )
}

export default MainPage