import {
  RiCloseLine,
  RiFacebookBoxLine,
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiMenuLine,
} from 'react-icons/ri';
import { MdLocationPin, MdOutlineEmail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa6';

// Cast once here
export const FacebookIcon = RiFacebookBoxLine as React.ComponentType<{
  className?: string;
}>;
export const InstagramIcon = RiInstagramLine as React.ComponentType<{
  className?: string;
}>;
export const LinkedinIcon = RiLinkedinBoxLine as React.ComponentType<{
  className?: string;
}>;
export const LocationIcon = MdLocationPin as React.ComponentType<{
  className?: string;
}>;
export const EmailIcon = MdOutlineEmail as React.ComponentType<{
  className?: string;
}>;
export const PhoneIcon = FaPhone as React.ComponentType<{ className?: string }>;
export const RiMenuIcon = RiMenuLine as React.ComponentType<{
  className?: string;
}>;
export const RiCloseIcon = RiCloseLine as React.ComponentType<{
  className?: string;
}>;
