import React from 'react'
import { NavLink } from 'react-router-dom'

function TestButtons() {
    return (
        <div className='testButtons'>
            <div>
                <NavLink to={'/login'}>로그인🐻‍❄️</NavLink>
            </div>
            
            <div>
                <NavLink to={'/trainer'}>트레이너🐹</NavLink>
            </div>

            <div>
                <NavLink to={'/pay'}>결제페이지🦦</NavLink>
            </div>

        </div>
    )
}

export default TestButtons
