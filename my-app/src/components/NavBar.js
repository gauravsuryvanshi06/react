import React from 'react';


class NavBar extends React.Component {
  state = {};
  render() {
    return (
        <div>
            
        <nav className="navbar navbar-expand-md py-5 navbar-dark bg-info shadow-sm">
          <div className="container">
            <a href="#" className="navbar-brand ">
              GeeksForGeeks
            </a>
            <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent3" aria-controls="navbarSupportedContent3" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler"><span className="navbar-toggler-icon" /></button>
            <div id="navbarSupportedContent3" className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active"><a href="#" className="nav-link">Home</a></li>
                <li className="nav-item"><a href="#" className="nav-link">About</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Services</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>

        <nav className="navbar navbar-light bg-light">
  <form className="form-inline">
    <button className="btn btn-outline-success" type="button">
      Main button
    </button>
    <button className="btn btn-sm btn-outline-secondary" type="button">
      Smaller button
    </button>
  </form>
</nav>


      </div>
    );
  }
}

export default NavBar;
