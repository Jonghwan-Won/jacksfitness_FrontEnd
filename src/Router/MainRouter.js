import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/main/MainPage'
import Pay from '../pages/pay/Pay'

function MainRouter() {
  return (
    <>
        <div>
            <Routes>
              <Route path='' element={<MainPage />} />    {/* 메인페이지 */}
              <Route path='pay' element={<Pay />} />      {/* 결제페이지 */}
            </Routes>
        </div>
    </>
    
  )
}

export default MainRouter