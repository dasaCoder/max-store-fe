'use client';

import React, { useEffect, useState } from 'react'
import { Dialog, DialogPanel, Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/lib/store';
import { Cart } from '@/app/components/cart';
import { useRouter } from 'next/navigation';
import { logoutUser, getUserInfo } from '../../../auth/firebase';
import { toggleCart } from '@/app/lib/features/app/app-slice';

interface HeaderProps {
}

interface User {
  username: string;
  email: string;
  imgURL: string;
}

const Header: React.FC<HeaderProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navBg, setNavBg] = useState(false);
  const [search, setSearch] = useState('');
  const { user } = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch();

  const router = useRouter();
  const pathname = usePathname();

  const isHomePage = pathname === '/';
  const cart = useSelector((state: RootState) => state.cart.items);

  const changeNavBg = () => {
    window.scrollY >= 200 ? setNavBg(true) : setNavBg(false);
  }

  const handleAuth = () => {
    router.push('/login');
  }

  const handleLogout = () => {
    logoutUser().then(() => {
      router.push('/');
    });
  }

  const toggleCartDialog = () => {
    dispatch(toggleCart());
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNavBg);

    return () => {
      window.removeEventListener('scroll', changeNavBg);
    }
  }, []);

  const handleSearch = () => {
    if (search === '') {
      return;
    }
    router.push(`/search/${search}`);
  }


  return (
    <header className={`${isHomePage ? 'fixed' : 'relative text-dark'} inset-x-0 top-0 z-10 ${!isHomePage || navBg ? 'bg-white text-dark shadow-md' : ''}`} >
      <nav aria-label="Global" className="flex items-center justify-between px-6 py-3 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="">
            <span className="sr-only">Max Store</span>
            <img
              alt=""
              src={navBg || !isHomePage ? "/images/mini-max-logo.png" : "/images/max-logo.png"}
              className={navBg || !isHomePage ? "h-[40px]" : "h-[80px]"}
            />
          </a>
        </div>


        <div className="flex lg:hidden">
          <button onClick={() => toggleCartDialog()} className='pr-2'>
            <img src="/images/icons/icon-cart.png" className='w-[30px]' alt="" />
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {cart.length}
            </span>
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 mr-5"
          >
            <span className="sr-only">Open main menu</span>

            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        {(!isHomePage || navBg) && <div className="hidden lg:flex lg:gap-x-12">
          <div className="relative">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search"
              className="py-2 px-4 pr-10 text-dark rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent w-[500px]"
            />
            <button className="absolute top-0 right-0 h-full px-3 flex items-center text-dark" onClick={handleSearch}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>
          </div>
        </div>}

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button onClick={() => toggleCartDialog()} className="relative pr-2">
            <img src="/images/icons/icon-cart.png" className="w-[30px]" alt="Cart" />
            <span className="absolute top-0 right-[10px] bg-indigo-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs transform translate-x-1/2 -translate-y-1/2">
              {cart.length}
            </span>
          </button>

          <Popover>
            <PopoverButton className="block text-sm/6 font-dark text-dark/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">

              {user?.imgURL ? <img src={user.imgURL} className='w-[30px] rounded-full' alt="" /> : <img src="/images/icons/icon-user.png" className='w-[30px]' alt="" />}

            </PopoverButton>
            <PopoverPanel
              transition
              anchor="bottom"
              className="divide-y divide-white/5 rounded-xl bg-white text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0 z-50"
            >
              <div className="">
                {
                  user ?

                    <button className="block rounded-lg py-2 px-3 pointer-curser" onClick={handleLogout}>
                      <p className="font-semibold text-dark">Logout</p>
                    </button>

                    : <button className="block rounded-lg py-2 px-3 pointer-curser" onClick={handleAuth}>
                      <p className="font-semibold text-dark">Login</p>
                    </button>
                }
              </div>

            </PopoverPanel>
          </Popover>
          <button>

          </button>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Max's Store</span>
              <img
                alt=""
                src="/images/max-logo.png"
                className="h-12 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">

              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
      <Cart />
    </header>
  );
};

export default Header;