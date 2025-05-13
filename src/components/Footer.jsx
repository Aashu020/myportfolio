function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-4 text-center border-top">
      <div className="container" style={{wordSpacing:"2px"}}>
      <small>&copy; {currentYear} ASIF NADAF. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
