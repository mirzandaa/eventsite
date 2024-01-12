'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, easeInOut, motion } from 'framer-motion';
import { VscMenu, VscChromeClose } from 'react-icons/vsc';
import SearchBar from './SearchBar';

const Header = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '/', label: 'Concerts' },
    { href: '/', label: 'Musical' },
    { href: '/', label: 'Exhibitions' },
    { href: '/', label: 'Classical and Opera' },
    { href: '/', label: 'All Events' },
  ];

  const menuAni = {
    initial: { scaleX: 0 },
    animate: {
      scaleX: 1,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },
    exit: {
      scaleX: 0,
      transition: {
        delay: 0.5,
        duration: 0.2,
        ease: easeInOut,
      },
    },
  };

  const containerAni = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <>
      <header>
        {/* Web Navbar */}
        <nav className="w-screen h-28 bg-background flex justify-between items-center p-10 fixed z-20">
          <span className="text-text text-3xl font-termina">EVENTALES</span>
          <div className="md:flex hidden gap-5 text-text uppercase font-bold">
            {links.map((link, index) => {
              return (
                <NavLink key={index} label={link.label} href={link.href} />
              );
            })}
          </div>
          <SearchBar />
          <button className="bg-primary text-white px-5 py-2 rounded-lg md:inline hidden">
            Login
          </button>
          {open ? (
            <div
              className="text-3xl md:hidden cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <VscChromeClose />
            </div>
          ) : (
            <div
              className="text-3xl md:hidden cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <VscMenu />
            </div>
          )}
        </nav>

        {/* Mobile Navbar */}

        <AnimatePresence>
          {open && (
            <motion.div
              variants={menuAni}
              initial="initial"
              animate="animate"
              exit="exit"
              className="z-30 fixed origin-left w-screen h-screen bg-background text-text p-10 flex justify-between"
            >
              <motion.div
                variants={containerAni}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full"
              >
                {links.map((link, index) => {
                  return (
                    <div
                      className="overflow-hidden"
                      key={index}
                      onClick={() => setOpen(!open)}
                    >
                      <NavLink
                        key={index}
                        label={link.label}
                        href={link.href}
                      />
                    </div>
                  );
                })}
              </motion.div>
              {open ? (
                <div
                  className="text-3xl md:hidden cursor-pointer"
                  onClick={() => setOpen(!open)}
                >
                  <VscChromeClose />
                </div>
              ) : (
                <div
                  className="text-3xl md:hidden cursor-pointer"
                  onClick={() => setOpen(!open)}
                >
                  <VscMenu />
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;

const navAni = {
  initial: {
    y: '30vh',
    transition: {
      duration: 0.1,
      ease: easeInOut,
    },
  },
  open: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeInOut,
    },
  },
};

const NavLink = ({ label, href }: { label: string; href: string }) => {
  return (
    <motion.div variants={navAni}>
      <Link href={href} passHref>
        <span className="hover:text-primary text-text text-lg uppercase font-bold">
          {label}
        </span>
      </Link>
    </motion.div>
  );
};
