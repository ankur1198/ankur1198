import './App.css';
import profile from "./a.png";
import email from "./email.jpg";
import pass from "./pass.jpg";
function LoginUi() {
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div>


         </div>
         <div>
           <h2>Login to your account</h2>
           <div>
             <img src={email} alt="email" className="email"/>
             <input type="text" placeholder="user name/ email" className="name"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="email"/>
             <input type="password" placeholder="password" className="name"/>
           </div>
          <div className="login-button">
          <button>Log in</button>
          </div>
           
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
// This is testing file