import "./style.scss"
function Index() {
  return (
    <div className="auth">
      <form className="auth--form" action="#">
        <p className="auth--form-title">Login to your account</p>
        <label htmlFor="username" className="auth--form--label">
          <p className="auth--form--label-title">Username</p>
          <input
           id="username"
            className="auth--form--label-input"
            type="text"
            placeholder="Username"
          />
        </label>
        <label htmlFor="phone" className="auth--form--label">
        <p className="auth--form--label-title">Phone number</p>
          <input
          id="phone"
            className="auth--form--label-input"
            type="text"
            placeholder="+998 (__) (___) (__) (__)"
          />
        </label>
        
        <button className="auth--form-btn" type="submit">
        Login now
        </button>
        <p className="auth--form--titleButton">
          Don't have an account ?<span>Sign up</span>
        </p>
      </form>
    </div>
  );
}

export default Index;
