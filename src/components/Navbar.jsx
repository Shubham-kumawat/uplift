import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className=" left">
        <h3>
          break<span className="span">io</span>
        </h3>
      </div>

      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label htmlFor="menu-toggle" className="hamburger">
        <span></span>
        <span></span>
        <span></span>
        
      </label>
      <div className="right">
        <a href="">Explore</a>
        <a href="">Solutions</a>
        <a href="">About</a>
        <a href="">Blog</a>
        <a href="">Login</a>
        <button>Start Now</button>
      </div>
    </div>
  );
}

export default Navbar;
