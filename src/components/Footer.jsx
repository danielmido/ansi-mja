const Footer = () => {
  return (
    <footer className="text-white bgBlack py-3 mt-3">
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <h1>Hitam</h1>
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
        <div>
          <ul className="list-unstyled d-flex gap-3">
            <li>
              <a href="#" className="text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
