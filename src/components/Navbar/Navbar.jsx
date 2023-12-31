import { useState } from 'react';
import { images } from '../../constants';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import './Navbar.scss';

const Navbar = () => {

     const [toggle, setToggle] = useState(false)

     return (
          <nav className='app__navbar'>
               <div className='app__navbar-logo'>
                    <a href="../../assets/Prashanta_CV.pdf" download={true}>
                         <img src={images.logo} alt="logo" />
                    </a>

               </div>
               <ul className='app__navbar-links'>
                    {['Home', 'About', 'Work', 'Skills', 'Contact'].map((item) => (
                         <li className='app__flex p-text' key={`link-${item}`}>
                              <a href={`#${item}`}>
                                   {item}
                              </a>
                              <div />
                         </li>
                    ))}
               </ul>

               <div className="app__navbar-menu">
                    <HiMenuAlt4 onClick={() => setToggle(true)} />

                    {
                         toggle && (
                              <motion.div
                                   whileInView={{ x: [300, 0] }}
                                   transition={{ duration: 0.85, ease: 'easeOut' }}
                              >
                                   <HiX onClick={() => setToggle(false)} />
                                   <ul>
                                        {['Home', 'About', 'Work', 'Skills', 'Contact'].map((item) => (
                                             <li key={item}>
                                                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                                                       {item}
                                                  </a>
                                             </li>
                                        ))}
                                   </ul>
                              </motion.div>
                         )
                    }
               </div>
          </nav>
     )
}

export default Navbar