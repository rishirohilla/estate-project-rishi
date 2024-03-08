import React from "react";
import {FaSearch} from 'react-icons/fa'
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux';
export default function Header() {
  const {currentUser}=useSelector(state=>state.user);
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-red-400">Riyal</span>
            <span className="text-red-800">Estate</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center w-[30%] justify-between">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-[80%]"
          />
          <FaSearch className="text-slate-600"/>
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-800 hover:underline hover:text-slate-600">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-800 hover:underline hover:text-slate-600">
              About
            </li>
          </Link>
          <Link to='/profile'>
            {currentUser ? (
              <img
                className='rounded-full h-7 w-7 object-cover'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <li className=' text-slate-700 hover:underline'> Sign in</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
