import React from 'react';
import { Link as LinkScroll } from 'react-scroll';

const NavLink = ({ title }) => (
  <LinkScroll>
  {title}

  </LinkScroll>
)

const Header = () => {
  return (
    <header className='fixed top-0 left-0 z-50 w-full py-10'>
        <div className='container flex h-14 items-center max-lg:px-5'>
            <a className='lg:hidden flex h-14 items-center max-lg:px-5 flex-1 cursor-pointer z-2'>
                <img src="/images/xora.svg" width={115} height={55} alt="logo" />
            </a>

            <div className='w-full border-2 border-amber-400'>
              <nav>
                <ul className='flex max-lg:block max-lg:px-12'>
                  <li className='nav-li'>
                    <NavLink title="features"/>
                    <div className="dot"/>
                    <NavLink title="pricing"/>
                  </li>

                </ul>
              </nav>

            </div>
        </div>
    </header>
  )
}

export default Header