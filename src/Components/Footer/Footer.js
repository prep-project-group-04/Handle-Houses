import './Footer.css'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <>
            <footer id="2">


                <section id='infSection'>

                    <nav id='listNave'>
                        <h1>handle<p id=''>Home</p></h1>
                        <ul>
                            <li><Link id='listL' to='/AboutUs'>About Us</Link></li>
                            <li><Link id='listL' to='/ContactUs'>Contact us</Link></li>
                            <li><Link id='listL' to=''>Blogs</Link></li>
                            <li><Link id='listL' to=''>Resources</Link></li>
                        </ul>
                    </nav>

                    <nav id='formNav'>
                        <form>
                            <p>Get Our Latest News</p>
                            <label><input id='input1' placeholder='Enter your email' type='email' required /><input id='input2' type='submit' value="Subsicribe" /></label>
                        </form>
                    </nav>


                    <nav id="logo">
                        <p>Follow us on...</p>
                        <nav id="fip"><Link id='l1' to="https://web.facebook.com/?_rdc=1&_rdr"><img src="https://seeklogo.com/images/F/facebook-icon-logo-819DD0A07B-seeklogo.com.png" alt='facebook' /></Link></nav>
                        <nav id="fip"><Link id='l1' to="https://github.com/Moath-shakhatreh"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt='Inatagram' /></Link></nav>
                        <nav id="fip"><Link id='l1' to="https://github.com/Moath-shakhatreh"><img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png" alt='twitter' /></Link></nav>
                        <nav id="fip"><Link id='l1' to="https://github.com/Moath-shakhatreh"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png" alt='whatsapp' /></Link></nav>

                    </nav>
                </section>
                
                <section id='secC'>
                <section id="line"></section>

                <nav id="lastN">
                    <p id="lp1">Copyright © 2023 RealState</p>
                    <p id='lp2'>handleHome App help people that face a problem in finding home with certain qualities ,
                     and they took a lot of time, by using Reality API to create a responsive application which help users
                      searching about Homes and buildings by determining the place they want ,the min & max price, and the home's space.
                    </p>
                </nav>

                </section>

            </footer>
        </>
    )
} 
