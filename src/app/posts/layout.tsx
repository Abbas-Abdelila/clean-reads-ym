const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <h1>My layout</h1>
        {children}
      </body>
    </html>
  );
};

export default layout;
