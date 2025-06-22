

export const metadata = {
  title: "ورود | بلاگ اپ",
};

export default function AuthLayout({children}) {
  return (
    <div>
      <div className="container">{children}</div>
    </div>
  );
}
