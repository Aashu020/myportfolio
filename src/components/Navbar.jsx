function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg px-5 rounded"
      aria-label="Thirteenth navbar example"
      
    >
      {" "}
      <div class="container-fluid">
        {" "}
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample11"
          aria-controls="navbarsExample11"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {" "}
          <span class="navbar-toggler-icon"></span>{" "}
        </button>{" "}
        <div class="collapse navbar-collapse d-lg-flex" id="navbarsExample11">
          {" "}
          <a class="navbar-brand col-lg-3 me-0 fs-3" href="#">
            Asif Nadaf
          </a>{" "}
          <ul class="navbar-nav col-lg-6 justify-content-lg-center gap-2">
            {" "}
            <li class="nav-item">
              {" "}
              <a class="nav-link active fs-5" aria-current="page" href="#">
                Home
              </a>{" "}
            </li>{" "}
            <li class="nav-item">
              {" "}
              <a class="nav-link fs-5" href="#">
                Skills
              </a>{" "}
            </li>{" "}
            <li class="nav-item">
              {" "}
              <a class="nav-link fs-5" href="#">
                About Me
              </a>{" "}
            </li>{" "}
            <li class="nav-item">
              {" "}
              <a class="nav-link fs-5" href="#">
                Projects
              </a>{" "}
            </li>{" "}
            <li class="nav-item">
              {" "}
              <a class="nav-link fs-5" href="#">
                Contact
              </a>{" "}
            </li>{" "}
          </ul>{" "}
          <div class="d-lg-flex col-lg-3 justify-content-lg-end">
            {" "}
            <button class="btn btn-outline-secondary">Hire Me</button>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </nav>
  );
}

export default Navbar;
