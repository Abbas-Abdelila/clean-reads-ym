import NavbarAuth from "./feed/NavbarAuth";
import "./globals.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <title>Medium Feed</title>
      </head>
      <body>
        <NavbarAuth />
        {children}
      </body>
    </html>
  );
};

export default Layout;
