import { BsGithub } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { FaBloggerB } from 'react-icons/fa';

function Footer() {
  return (
    <div className="flex px-24 py-4 justify-between select-none items-center max-md:px-0 max-md:pl-28 z-20 bg-white flex-wrap">
      <div className="text-xl">Movie Box, 2023</div>
      <button></button>
      <div className="flex flex-wrap">
        <a href="https://github.com/ka0824" className="mr-4 p-2">
          <BsGithub size={30}></BsGithub>
        </a>
        <a href="mailto:rkgud0824@gmail.com" className="mr-4 p-2">
          <MdEmail size={30}></MdEmail>
        </a>
        <a href="https://ka0824.github.io/" className="mr-4 p-2">
          <FaBloggerB size={30}></FaBloggerB>
        </a>
      </div>
    </div>
  );
}

export default Footer;
