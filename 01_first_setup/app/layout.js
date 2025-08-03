import "./globals.css";

export const metadata = {
  title: {
    template: "%s | Technical Agency",
    default: " Technical Agency",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ background: "teal" }}>
          <h1>Header</h1>
        </header>
        {children}
        <footer style={{ background: "brown" }}>
          <h1>Footer</h1>
        </footer>
      </body>
    </html>
  );
}
