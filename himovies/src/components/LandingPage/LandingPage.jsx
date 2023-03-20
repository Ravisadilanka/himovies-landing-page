import React from 'react'
import './LandingPage.css'
import { FaArrowAltCircleRight, FaPinterest, FaSearch, FaTelegramPlane } from 'react-icons/fa'
import { AiOutlineFacebook, AiOutlinePlus, AiOutlineTwitter, AiOutlineWhatsApp } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'


function LandingPage() {
  return (
    <>
        <div className="container-land">
            <div className="landing-logo">
                <img src="Images/logo.png" alt="" />
            </div>
            <div className="landing-title">
                <h1>HiMovies</h1>
            </div>

            <form>
                <div className="search-bar">
                    <input type="text" placeholder="Enter keywords..." />
                    <i><FaSearch /></i>
                </div>
            </form>

            <div className="share-btn">
                <div className="share-icon-wrapper1">
                    <i className='share-icon1'><AiOutlineTwitter/></i>
                    <span>Twitter</span>
                </div>
                <div className="share-icon-wrapper2">
                    <i className='share-icon2'><AiOutlineFacebook/></i>
                    <span>Facebook</span>
                </div>
                <div className="share-icon-wrapper3">
                    <i className='share-icon3'><AiOutlineWhatsApp/></i>
                    <span>Whatsapp</span>
                </div>
                <div className="share-icon-wrapper4">
                    <i className='share-icon4'><FaPinterest/></i>
                    <span>Pinterest</span>
                </div>
                <div className="share-icon-wrapper5">
                    <i className='share-icon5'><FaTelegramPlane/></i>
                    <span>Telegram</span>
                </div>
                <div className="share-icon-wrapper6">
                    <i className='share-icon6'><MdEmail/></i>
                    <span>Email</span>
                </div>
                <div className="share-icon-wrapper7">
                    <i className='share-icon7'><AiOutlinePlus/></i>
                    <span>More 63.1K</span>
                </div>
            </div>

            <div className="view-site">
                <h3>View Full Site</h3>
                <i className='arrow'><FaArrowAltCircleRight/></i>
            </div>

            <div className="text-left-align">
                <h3>What is HiMovies</h3>
                <p>HiMovies was launched in 2019 to allow people to watch HD movies and TV shows online without having to pay anything. HiMovies has been continuously increasing in popularity since its first launch. With big library of HD movies and HD series, you will mostly find your favorite movies and series on himovies website.</p>

                <br />
                <h3>Is HiMovies a safe movies streaming website?</h3>
                <p>Users believe HiMovies to be a safe website since it is clean even after an html code scan. Furthermore, the whole ad network is examined on a regular basis to ensure that the site does not include any potentially hazardous advertisements. To remain anonymous and improve streaming performance, we recommend that you use a reliable VPN.</p>

                <br />
                <h3>Is it legal to use HiMovies?</h3>
                <p>It is perfectly legal to stream free HD movies on HiMovies; it is only against the law to download and save movies on your device, which is why HiMovies does not provide a download option at the moment</p>

                <br />
                <h3>Alternatives to HiMovies: What's the Best out there apart from HiMovies?</h3>
                <p>On the Internet, there are thousands of free online movie streaming sites, but only a tiny percentage of them are secure and trustworthy. Try 123movies, gomovies, 6movies, and fmovies if HiMovies is unavailable.</p>

                <br />
                <h3>Is there a HiMovies app for smartphones, iPads, or TV?</h3>
                <p>Please install the HiMovies Android Movies Apk for your Android devices to get faster streaming speeds, Chromecast support, no advertisements, and premium customer service. Please have a look at this page to view the HiMovies Android apk.
                    True happiness is free, and so is HiMovies. Let's take a look at the site’s features to see why you should ditch paid premium subscriptions of other sites and start utilizing HiMovies instead.</p>

                <br />
                <h3>HiMovies review</h3>
                <p>Despite being newly established, HiMovies has garnered a lot of attention from movie fans all around the world because of the following features:</p>
            </div>

            <div className="text-align-center">
                <h3>Safety</h3>
                <p>As previously said, HiMovies is a secure and trusted service for streaming movies online as long as you follow the safety guidelines. To ensure your protection, connect to the site using a VPN and use the AdBlock add-on.</p>

                <br />
                <h3>Large content library</h3>
                <p>HiMovies has over 300,000 movies and TV episodes to choose from. The most recent releases, golden oldies, and even regional treasures may all be found here. New titles are added regularly, so the library will continue to grow.
                    HiMovies also has several subtitles available for your convenience. To get the most out of the service, switch on the English, Spanish, or German subtitles.</p>

                <br />
                <h3>Regular updates</h3>
                <p>HiMovies is one of the most up-to-date streaming services. Every day, new titles are added to ensure that your supply of amusement never runs dry.</p>

                <br />
                <h3>HD Streaming Resolution</h3>
                <p>HiMovies has the highest resolution. The majority of its material is in HD, however anticipate CAM quality for recently released films in cinemas and SD quality for older films.</p>

                <br />
                <h3>Streaming experience</h3>
                <p>The movie quality is comparable to that of premium streaming providers. Do they seem too good to be true? The loading speed is fast, the smooth streaming is on spot, and the commercials are low.</p>

                <br />
                <h3>Easy-to-use interface</h3>
                <p>The site is really simple to use and navigate. If you're looking for a certain name, just simply type its title into the search box. If not, you can browse for something that strikes your attention by searching by categories or clicking "View Full Site."</p>

                <br />
                <p>The site is really simple to use and navigate. If you're looking for a certain name, just simply type its title into the search box. If not, you can browse for something that strikes your attention by searching by categories or clicking "View Full Site."</p>

                <br />
                <h3>Compatibility with many devices</h3>
                <p>HiMovies is mobile-friendly and Chromecast-compatible, so you can watch free movies and TV series on all of your devices.</p>

                <br />
                <h3>Advertisements and pop-ups</h3>
                <p>There are no advertisements on HiMovies. You'll have to go through one or two adverts before the video starts, but that's unavoidable because ads are their only source of revenue. With the AdBlock plugin, popups can be prevented.</p>

                <br />
                <h3>No need to create an account or register</h3>
                <p>At HiMovies, there is no need to sign up or register to watch free movies and TV shows. All you need is a good internet connection, a working smart device, and get access to https://HiMovies.to/.</p>

                <br />
                <h3>Customer care</h3>
                <p>HiMovies, unlike most free streaming services, pays attention to what its viewers have to say. Please feel free to connect with us by Facebook, Twitter, Telegram, email, and other social media platforms. Simply send us an email if you have any problems. If your streaming links are broken or your desired movie is unavailable, submit a request and they will respond within one business day.</p>
            </div>

            <div className="view-site">
                <h3>Go to HiMovies</h3>
                <i className='arrow'><FaArrowAltCircleRight/></i>
            </div>

            <div className="footer-list">
                <ul>
                    <li>
                        <a Android href="/android-app">Android App</a>
                    </li>
                    <li>
                        <a href="/terms">Terms of services</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                    <li>
                        <a href="/sitemap">Sitemap</a>
                    </li>
                    <li>
                        <a href="/9nime">9nime</a>
                    </li>
                </ul>

                <br />
                <div className="footer-text">
                    <p>HiMovies is a Free Movies streaming site with zero ads. We let you watch movies online without having to register or paying, with over 10000 movies and TV-Series. You can also Download full movies from HiMovies and watch it later if you want</p>
                    <span>© HiMovies</span>
                </div>
        </div>
        </div>
    </>
  )
}

export default LandingPage