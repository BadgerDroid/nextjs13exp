'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import '../../styles/globals.scss';

const HeaderHelper = ({}) => {
  // past and current open submenus
  const [openSubMenu, setOpenSubMenu] = useState<string | undefined>();

  const showSubmenu = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    event.preventDefault();
    const clickedSubMenu = event.currentTarget.querySelector('ul');

    if (clickedSubMenu?.id === undefined)
      return console.log('clickedSubMenu id is undefined');
    //check if submenu is already open
    if (openSubMenu) {
      const openSubMenuElement = document.getElementById(openSubMenu);
      if (openSubMenuElement) {
        openSubMenuElement.classList.remove('sub-menu-open');
      }
    }
    // show submenu
    if (clickedSubMenu?.id !== openSubMenu) {
      setOpenSubMenu(clickedSubMenu?.id);

      clickedSubMenu?.classList.add('sub-menu-open');

      const checkClickOutside = (event: MouseEvent) => {
        if (
          event.target !== clickedSubMenu &&
          event.target !== clickedSubMenu.parentElement
        ) {
          setOpenSubMenu('');
          clickedSubMenu?.classList.remove('sub-menu-open');
          window.removeEventListener('click', checkClickOutside);
        }
      };
      window.addEventListener('click', checkClickOutside);
    } else if (clickedSubMenu?.id === openSubMenu) {
      setOpenSubMenu('');
      clickedSubMenu?.classList.remove('sub-menu-open');
    }
  };

  return (
    <header>
      <div>
        <Link href={'/'}>
          <Image src='/logo.png' alt='logo' width={100} height={100} />
        </Link>
        <Link href={'/'}>Dave #1</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href={'/'}>Home</Link>
          </li>
          <li>
            <Link href={'/'}>Page 1</Link>
          </li>
          <li>
            <Link href={'/'}>Page 2</Link>
          </li>
          <li onClick={(event) => showSubmenu(event)} className='menu-item '>
            Dropdown 1
            <ul id='menu1' className='sub-menu'>
              <li>
                <Link href={'/'}>River</Link>
              </li>
              <li>
                <Link href={'/'}>lake</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href={'/'}>Summer</Link>
          </li>
          <li
            id='submenu'
            onClick={(event) => showSubmenu(event)}
            className='menu-item '
          >
            Dropdown 2
            <ul className='sub-menu'>
              <li>
                <Link href={'/'}>River 2</Link>
              </li>
              <li>
                <Link href={'/'}>lake 2</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link href={'/'}>Page 1</Link>
          </li>
        </ul>
      </nav>
      <div className='site-search-lng'>
        <div className='search'>🔎</div>
        <div className='langMenu'>
          {' '}
          <span>FI</span> 🗺️
        </div>
      </div>
    </header>
  );
};

export default HeaderHelper;
