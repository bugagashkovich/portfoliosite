function Navbar() {
  return (
    <nav className="navbar  navbar-expand-lg bg-transparent">
      <div className="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <a class="nav-link active" aria-current="main" href="#">
                Главная
              </a>
              <a class="nav-link" aria-current="about" href="#">
                Обо мне
              </a>
              <a class="nav-link" aria-current="pet" href="#">
                Пэт проекты
              </a>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
