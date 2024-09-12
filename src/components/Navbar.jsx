const Navbar = () => {
  return (
    <>
      <nav className="navbar bgBlack" data-bs-theme="dark">
        <div className="ps-sm-5 pe-sm-5 ps-3 pe-3 w-100">
          <a
            className="navbar-brand gap-3 d-flex align-items-center goodTimesFontText"
            href="/"
          >
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhSmw-a2mt30oca7Cl8vlggmn5lJa8WsP-c5nvodsAQHoN9MR8ZRxxtDS3mAFx975Ldp_SQ6eQPEZeY103D-GbtcKH4KALmWyQhtgONY2FhQN97DU2zV2u9bgCk2dz0AA3Kf5WGBrUOW9hQDaMm_1fhQloATtr-VPsdLREpNxulTnfyHBB5B-QRd2w7/s1600/logo.png"
              alt="Logo"
              width="90"
              className="d-inline-block align-text-top"
            />
            <p className="ms-sm-0 ms-auto mt-auto mb-auto fontGoodTimes">MAJU JAYA AUTO</p>
          </a>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
