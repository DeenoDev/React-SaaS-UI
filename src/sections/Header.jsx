import React from 'react';

const Header = () => {
  return (
    <header className='fixed top-0 left-0 z-50 w-full py-10'>
        <div>
            <a>
                <img src="/images/xora.svg" width={115} height={55} alt="logo" />
            </a>
        </div>
    </header>
  )
}

export default Header