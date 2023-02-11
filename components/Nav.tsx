import React from 'react'
import headerNavLinks from '@/data/headerNavLinks';
import Link from 'next/link';
import { navigation } from '@/data/nav'
import CommandPalette from './CommandPalette';
import DropMenu from './DropMenu';
import { useRouter } from "next/router";
import Typewriter from "typewriter-effect";



function Nav() {
      const router = useRouter();

  return (
    <>
      <div className="text-primary-color dark:text-primary-color-dark flex items-center justify-between text-xl font-semibold cursor-pointer">
        {`~${router.asPath}`}{" "}
        <Typewriter
          options={{
            strings: [],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div className="flex items-center text-base leading-5">
        <div className="hidden sm:block">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="link-underline rounded py-1 px-2 text-gray-900 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-700 sm:py-2 sm:px-3"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <CommandPalette navigation={navigation} />
        <DropMenu />
      </div>
    </>
  );
}

export default Nav