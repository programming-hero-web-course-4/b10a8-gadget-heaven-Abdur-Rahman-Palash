

const Footer = () => {
    return (
       <div className="text-center p-10">
        <h2 className="font-bold text-3xl">Gadget Heaven</h2>
        <p>Leading the way in cutting-edge technology and innovation.</p>
         <footer className="footer bg-white text-black p-10 text-center place-items-center">
        <nav>
          <h6 className="footer-title font-extrabold text-xl">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title font-extrabold text-xl">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title font-extrabold text-xl">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
       </div>
    );
};

export default Footer;