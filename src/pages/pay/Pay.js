import React from 'react'
import { NavLink } from 'react-router-dom'

function Pay() {
  return (
    <div className='payDiv'>
        <h1>결제페이지 테스트</h1>
        <button>
            api test
        </button>

        <br />

        <button>
            <NavLink to={'/'} >홈으로</NavLink>
        </button>
    </div>
  )
}

export default Pay