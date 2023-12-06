import { useState } from "react"
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';



const Footer = () => {

     const [formData, setFormData] = useState({
          name: '',
          email: '',
          message: '',
     })
     const { name, email, message } = formData;

     const [isFormSubmitted, setIsFormSubmitted] = useState(false);
     const [loading, setLoading] = useState(false)

     const handleChangeInput = (e) => {
          const { name, value } = e.target;

          setFormData({ ...formData, [name]: value })
     }

     const handleSubmit = (e) => {
          e.preventDefault();
          setLoading(true);

          const contact = {
               _type: 'contact',
               name: name,
               email: email,
               message: message,
          }

          client.create(contact)
               .then(() => {
                    setLoading(false);
                    setIsFormSubmitted(true);
               })
     }

     return (
          <>
               <h2 className="head-text">
                    Take a coffee & chat with me
               </h2>

               <div className="app__footer-cards">
                    <div className="app__footer-card">
                         <img src={images.email} alt="Email" />
                         <a href="mailto: apras.dixit@gmail.com" className="p-text">apras.dixit@gmail.com</a>
                    </div>
                    <div className="app__footer-card">
                         <img src={images.mobile} alt="mobile" />
                         <a href="tel:+977 9860664666 " className="p-text">+977 9860664666</a>
                    </div>
               </div>

               {!isFormSubmitted ?
                    <form className="app__footer-form app__flex"
                         action="POST"
                         onSubmit={handleSubmit}
                    >
                         <div className="app__flex">
                              <input type="text" className="p-text" placeholder="Your Name" value={name} onChange={handleChangeInput} name='name' required />
                         </div>
                         <div className="app__flex">
                              <input type="email" className="p-text" placeholder="Your Email" value={email} onChange={handleChangeInput} name='email' required />
                         </div>
                         <div>
                              <textarea className="p-text" placeholder="Your Message..." value={message} name="message" onChange={handleChangeInput} required />
                         </div>
                         <button className="p-text">
                              {loading ? 'Sending' : 'Send Message'}</button>
                    </form>
                    :
                    <div>
                         <h3 className="head-text">Thank you for getting in touch!</h3>
                    </div>
               }
               <div className="copyright">
                    <p className='p-text'>&copy; 2023 Prashanta. All rights reserved</p>
               </div>
          </>
     )
}

export default AppWrap(
     MotionWrap(Footer, 'app__footer'),
     'Contact',
     'app__whitebg',
);