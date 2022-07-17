import "./about.scss";

function Works() {
  return (
    <div className='about-me' id="about-me">
           
            <h1>PROFILE</h1>
            I'm a creative  web Developer
            <hr />
            <div className='about-me-tab-div'>
                <div>
                    <h2>AboutMe</h2><br />
                    <p>
                    
I am a Pre Final Year undergraduate & I have deep interest in Data structures and Algorithms & strive to make
my code efficient and elegant. Seeking an entry level opportunity where I can utilize my skills and enhance
learning in the field of work.Capable of mastering new technologies
                    </p>
                </div>
                <div>
                    <img className="img-fluid hover-shadow"
                    src="assets/img.jpeg" alt="" />
                </div>
                <div>
                    <h2>Details</h2><br />
                    <b>Name:</b><br />
                    Anjali Jain<br />
                    <b>Age:</b><br />
                    21 <br />
                    <b>Location:</b><br />
                    Jaipur, Rajasthan, India <br />
                </div>
            </div>
        </div>
    
  )
}

export default Works