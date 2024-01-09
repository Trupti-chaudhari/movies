import "./footerSection.scss"
import fb from "../../images/fb.jpg"
import tweeter from "../../images/tweeter.png"
import gplay from "../../images/gplay.png"
import appstore from "../../images/appstore.png"

function Footersection() {
    return <>
        <div className="footer">
            <div>
                <h3>Company</h3>
                <p>About Us</p>
                <p>Careers</p>
                <p>@ 2023 STAR. All right Reserved</p>
                <div className="link">
                    <a href="">Terms of Use</a>
                    <a href="">Privacy Policy </a>
                    <a href="">FAQ</a>
                </div>
            </div>

            <div>
                <h3>View Website in</h3>
                <p>English</p>
            </div>

            <div>
                <h3>Need Help?</h3>
                <a href="">Visit Help Center</a><br />
                <a href="">Share Feedback</a>
            </div>

            <div className="connect">
                <h3>Connect with us</h3>
                <img src={fb} alt="" />
                <img src={tweeter} alt="" /><br />
                <div className="img">
                    <img src={gplay} alt="" />
                    <img src={appstore} alt="" />
                </div>
            </div>



        </div>



    </>
}

export default Footersection;