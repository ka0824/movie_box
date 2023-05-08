import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

interface NavElement {
  name: string;
  href: string;
}

const list: NavElement[] = [
  {
    name: '박스 오피스',
    href: '/boxoffice',
  },
  {
    name: '영화 검색',
    href: '/search',
  },
];

function NavLink({ element }: { element: NavElement }) {
  const { name, href } = element;

  return (
    <Link href={href} className="mr-4">
      {name}
    </Link>
  );
}

function HorizonNav() {
  return (
    <div className="flex px-24 py-4 select-none justify-between items-center max-md:hidden">
      <div className="font-black text-4xl">Movie Box</div>
      <div className="flex">
        {list.map((element, idx) => (
          <NavLink element={element} key={`nav-element-${idx}`}></NavLink>
        ))}
      </div>
    </div>
  );
}

function VerticalNav() {
  const [isShow, setShow] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (navRef.current === null) {
      return;
    }

    if (isShow) {
      navRef.current.style.left = '0px';
    } else {
      navRef.current.style.left = '-160px';
    }
  }, [isShow]);

  function handleShow() {
    setShow((prevState) => !prevState);
  }

  return (
    <div
      className="flex flex-col absolute px-8 py-4 select-none items-center md:hidden top-0 min-h-full w-64 transition-all shadow-2xl bg-slate-50"
      ref={navRef}
    >
      <button className="ml-auto" onClick={handleShow}>
        {isShow ? (
          <AiOutlineLeft></AiOutlineLeft>
        ) : (
          <AiOutlineRight></AiOutlineRight>
        )}
      </button>
      {isShow && (
        <>
          <div className="font-black text-4xl mb-4">Movie Box</div>
          <div className="flex flex-col">
            {list.map((element, idx) => (
              <NavLink element={element} key={`nav-element-${idx}`}></NavLink>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function Nav() {
  return (
    <div>
      <HorizonNav></HorizonNav>
      <VerticalNav></VerticalNav>
    </div>
  );
}

export default Nav;
