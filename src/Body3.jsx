import React from 'react'
import Sideo from './Video.mp4';

const Body3 = () => {
  return (
    <>
      <div className="con1">
        <div className="con12">
          <video src={Sideo} width="400" height={300} controls="controls" autoplay="true" style={{backgroundColor:'white'}} />

        </div>
        <div className="con13">

          <h2>Why tnpLab ?</h2><br />
          <p>
            We provide hands-on training, mentorship and have an inclusive community. Get your journey started with Us!<br /><br />

            Explore a wide range of courses including Data Structures & Algorithms, Web Development, DevOps, Machine Learning, and more!<br /><br />

            All of our courses are well structure with great quality.
            We cover every topic in detail with a Real-life Case Studies.
          </p>

        </div>


      </div>
      <div className="con2">
        <div className="con22">
          <img
            src="https://www.pefo.co.in/assets/web/images/Mobile%20inbox-pana.png"
            width="400px"
            height="500px"


            className="d-inline-block align-top"
          />

        </div>
        <div className="con3">
          <h4> OUR COMMUNITY</h4>
          <p>
            learn together , grow together<br /><br />

            Our instructors, TAs, Mentors, Alumni and fellow students go above and beyond to help guide you and ensure you're on the right path to achieve your goals. Our private tnpLab Discord server is a key factor in taking your skills, confidence and career to the next level.
          </p>
          <h6>CHECK OUT OUR COMMUNITY</h6><br/>
          <img
            src="https://www.svgrepo.com/show/331368/discord-v2.svg"
            width="50"
            height="50"


            className="d-inline-block align-top"
          />
          &nbsp; &nbsp;
           <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
            width="50"
            height="50"


            className="d-inline-block align-top"
          />
           &nbsp; &nbsp;
           <img
            src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3254359/slack-icon-icon-sm.png"
            width="50"
            height="50"


            className="d-inline-block align-top"
          />
           &nbsp; &nbsp;

           <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/767px-WhatsApp.svg.png"
            width="60"
            height="60"


            className="d-inline-block align-top"
          />

        </div>
      </div>
    </>
  )
}

export default Body3