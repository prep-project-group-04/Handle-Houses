import '../ContactUs/ContactUs.css'
import Footer from '../Footer/Footer'
import Header from '../header/header'

export default function Contactus() {
return (<> 
    <Header/>
    <body id='contactPage'>
     <div className="container">
    <div className="content">
      <div className="left-side">
        <div className="address details">
          <i className="fas fa-map-marker-alt"></i>
          <div className="topic">Address</div>
          <div className="text-one">Irbid</div>
          <div className="text-two">Hashme Street</div>
        </div>
        <div className="phone details">
          <i className="fas fa-phone-alt"></i>
          <div className="topic">Phone</div>
          <div className="text-one">+9627 7262 4902</div>
          <div className="text-two">+9628 3434 5678</div>
        </div>
        <div className="email details">
          <i className="fas fa-envelope"></i>
          <div className="topic">Email</div>
          <div className="text-one">Moath.shakhatreh@gmail.com</div>
          <div className="text-two">qaisdw96@hotmail.com</div>
        </div>
      </div>
      <div className="right-side">
        <div className="topic-text">Send us a message</div>
        <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p>
      <form action="#">
        <div className="input-box">
          <input type="text" placeholder="Enter your name"/>
        </div>
        <div className="input-box">
          <input type="text" placeholder="Enter your email"/>
        </div>
        <div className="input-box message-box">
          <input type="text" placeholder="Enter your comment"/>
        </div>
        <div className="button">
          <input type="button" value="Send Now" />
        </div>
      </form>
    </div>
    </div>
  </div>
    </body>
    <Footer/>
    {/* <p>mkmkmkmkm</p> */}
    </>
)

}
