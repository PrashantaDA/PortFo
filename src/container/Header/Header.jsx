import { motion } from 'framer-motion'
import { AppWrap } from '../../wrapper'
import { images } from '../../constants'
import './Header.scss'

const scaleVariants = {
     whileInView: {
          scale: [0, 1],
          opacity: [0, 1],
          transition: {
               duration: 1,
               ease: 'easeInOut'
          }
     }
}

const Header = () => {
     return (
          <div className='app__header app__flex' >
               <motion.div
                    whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className='app__header-info'
               >
                    <div className="app__header-badge">
                         <div className="badge-cmp app__flex">
                              <span>👋</span>
                              <div>
                                   <p className='p-text'>Hello, I am</p>
                                   <h1 className='head-text'>Prashanta</h1>
                              </div>
                         </div>

                         <div className="tag-cmp ap__flex">
                              <p className='p-text'>Frontend Developer</p>
                              <p className='p-text'>Web Designer</p>
                              <p className='p-text'>QA</p>
                         </div>

                    </div>
               </motion.div >

               <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5, delayChildren: 0.5 }}
                    className='app__header-img'>
                    <img src={images.profile} alt="profile_bg" className='profile_img' />
                    <motion.img
                         whileInView={{ scale: [0, 1] }}
                         transition={{ duration: 1, ease: 'easeInOut' }}
                         src={images.circle}
                         alt="profile_circle"
                         className='overlay_circle'
                    />
               </motion.div>

               <motion.div
                    variants={scaleVariants}
                    whileInView={scaleVariants.whileInView}
                    className='app__header-circles'
               >
                    {[images.html, images.css, images.javascript, images.react, images.sass].map((circle, idx) => (
                         <div className='circle-cmp app__flex' key={`circle - ${idx}`} >
                              <img src={circle} alt="circle" />
                         </div>
                    ))}
               </motion.div>

          </div >
     )
}

export default AppWrap(Header, 'Home') 
