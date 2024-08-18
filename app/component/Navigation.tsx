import Link from 'next/link';
import React from 'react';
import styles from '../styles/Navigation.module.css';

const Navigation: React.FC = () => {
  return (
    <nav className={`${styles.navigation} shadow-custom-dark shadow-ml z-10`}>
        <span className='flex text-center h-[57px] hidden md:block text-xl !no-underline font-bold text-white'>
          BrevnoKZ
        </span>
      <ul className=''>
        <li>
          <Link
            href={"/"}
            className="flex items-center gap-2 p-3 rounded-lg text-white !no-underline hover:bg-[#254D32] active:bg-[#1a3a22] transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <img src='/icons/home.svg' className="w-6 h-6" alt="Home" />
            <span className='hidden md:block'>
               Главная
            </span>
          </Link>
        </li>
        <li>
          <Link
            href={"/events"}
            className="flex items-center gap-2 p-3 rounded-lg text-white !no-underline hover:bg-[#254D32] active:bg-[#1a3a22] transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <img src='/icons/location.svg' className="w-6 h-6" alt="Location" />
            <span className='hidden md:block'>
              Ивенты
            </span>
          </Link>
        </li>
        <li>
          <Link
            href={"/leaderboards"}
            className="flex items-center gap-2 p-3 rounded-lg text-white !no-underline hover:bg-[#254D32] active:bg-[#1a3a22] transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <img src='/icons/group.svg' className="w-6 h-6" alt="Group" />
            <span className='hidden md:block'>
              Рейтинг
            </span>
          </Link>
        </li>
        <li>
          <Link
            href={"/statistics"}
            className="flex items-center gap-2 p-3 rounded-lg text-white !no-underline hover:bg-[#254D32] active:bg-[#1a3a22] transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <img src='/icons/person.svg' className="w-6 h-6" alt="Person" />
            <span className='hidden md:block'>
              Статистика
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
