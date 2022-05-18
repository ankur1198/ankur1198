import './App.css';
import email from "./assets/email.jpg";
import pass from "./assets/pass.jpg";
import google from "./assets/google.png";
import facebook from "./assets/facebook.png";
function LoginUi() {
  return (
    <div className="main">
     <div className="sub-main">
     <div>
         <div className="imgs">
           
    

         </div>
         <div>
           <h2>Login to your account</h2>
            <span className=''>Continue with</span>
           <div className="continue-with">
            <a href="#">
            <img src={google} alt="google" className='icon' />
             </a>
            <a href="#">
              <img src={facebook} alt="facebook" className='icon' />
             </a>
           </div> 

           <span>-----------Or-----------</span>
           <form>
           <div>
             <img src={email} alt="email" className="email"/>
             <input type="email" placeholder="email" className="name"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="email"/>
             <input type="password" placeholder="password" className="name"/>
           </div>
          <div className="login-button">
          <button type='submit' >Log in</button>
          </div>
           </form>
            <p className="link">
              <a href="#">Forgot password ?</a> <br></br>
              <br></br>
              New user?<a href="#">Sign up</a>
            </p>
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default LoginUi;