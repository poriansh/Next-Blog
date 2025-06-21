
export const metadata = {
  title: "ورود | بلاگ اپ",
};

export default function AuthLayout({children}) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <main className="container">
          {children}
        </main>
      </body>
    </html>
  );
}
