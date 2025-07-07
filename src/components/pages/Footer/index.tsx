import {
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  LocationIcon,
  PhoneIcon,
} from 'utils/icons';
import logo from '../../../assets/images/icons/logo.png';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-10 pb-5">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-20 text-sm">
        <div>
          <img
            src={logo}
            alt="Logo"
            className="h-8 lg:w-1/2 md:w-full w-52 inline-block mr-2"
          />
          <p className="my-7">
            Solid Horizon Sdn Bhd has been the Integrated Market Leader in
            Modular Construction of Portable Cabin, Toilet Cabin, Guard House,
            Used Container, Polyurethane Cabin since 1994.
          </p>
          <div className="flex gap-4">
            <FacebookIcon className="w-8 h-8" />
            <InstagramIcon className="w-8 h-8" />
            <LinkedinIcon className="w-8 h-8" />
          </div>
        </div>

        <div className="space-y-4 ">
          <h4 className="font-semibold mb-2">Contact Us</h4>
          <div className="my-7">
            <div className="my-7 flex items-center gap-2">
              <LocationIcon className="lg:w-10 md:w-20 w-8 h-10" />
              <span>
                Lot 4912, Jalan Teratai, 5 1/2 Miles Off Jalan Meru, 41050
                Klang, Selangor
              </span>
            </div>
            <div className="flex items-center gap-2">
              <EmailIcon className="w-7 h-7" />
              <p>solid@solidhorizon.com</p>
            </div>
            <div className="my-7 flex items-center gap-2">
              <PhoneIcon className="w-5 h-5" />
              <p>+60 3 3396 3888</p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-4">
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                News
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Career
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-6 text-center border-t border-white/20 pt-4 text-xs">
        Copyright © {new Date().getFullYear()} Solid Horizon Sdn. Bhd.
      </div>
    </footer>
  );
};

export default Footer;
