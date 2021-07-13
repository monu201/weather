import "./footer.css"
const Footer=()=>{
    return(
        <footer >
           <span className="footer-header">Check out my social media profiles</span><br></br>
           <div className="dd d-flex justify-content-center">
               <a href="https://www.linkedin.com/in/monish-prasad-952a17206/" className="d-flex"><i className="ri-linkedin-box-fill"></i>Linkedin</a>
               <a href="https://mail.google.com/mail/u/0/?ogbl#inbox" className="d-flex"><i className="ri-google-fill" ></i> Google</a>
               <a href="https://www.linkedin.com/in/monish-prasad-952a17206/" className="d-flex"><i className="ri-twitter-fill"></i> Twitter</a>
               <a href="https://www.instagram.com/pr__monish/" className="d-flex"><i className="ri-instagram-fill"></i> Instagram</a>
               <a href="https://github.com/monu201" className="d-flex"><i className="ri-github-fill"></i>github</a>
               <a href="https://www.linkedin.com/in/monish-prasad-952a17206/" className="d-flex"><i class="ri-facebook-box-fill"></i>Facebook</a>
               
           </div>
        </footer>
    )
}

export default Footer;