import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex-between body-text w-full gap-y-10 border-t border-black-400 bg-black-100 px-20 py-1 text-white-800 max-md:flex-col">
      <p>Copyright © 2023 kenLovesToCode | All rights reserved.</p>

      <div className="flex gap-x-9">
        <Link href="/terms-of-use">Terms & Conditions</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
