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
                        <nav id="fip"><Link id='l1' to="https://web.facebook.com/profile.php?id=100091731711106"><img src="https://seeklogo.com/images/F/facebook-icon-logo-819DD0A07B-seeklogo.com.png" /></Link></nav>
                        <nav id="fip"><Link id='l1' to="https://twitter.com/handleHome_"><img src="https://img.freepik.com/free-icon/twitter_318-674515.jpg" /></Link></nav>
                        <nav id="fip"><Link id='l1' to="/Whatsapp"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png" /></Link></nav>
                        <nav id="fip"><Link id='l1' to="https://web.facebook.com/profile.php?id=100091731711106"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" /></Link></nav>

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
