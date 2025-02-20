const Footer = ({ open }) => {
  return (
    <footer
      className={`flex flex-row items-center justify-center sm:justify-end py-6 px-3 sm:px-5 transition-all ${
        open ? "ml-60" : "ml-28"
      }`}
    >
      <p className="text-center sm:text-right text-gray-700 text-sm">
        Made with <span className="text-red-500 align-middle">&#10084;</span> by RetailSync{" "}
        {/* <a
          href="https://themewagon.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-primary transition-colors"
          aria-label="Explore ThemeWagon Website"
        >
          RetailSync
        </a> */}
      </p>
    </footer>
  );
};

export default Footer;
