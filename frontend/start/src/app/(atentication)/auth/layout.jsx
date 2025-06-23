export const metadata = {
  title: "ورود",
};

export default function AuthLayout({children}) {
  return (
    <div className="min-h-screen">
      <div className="container">{children}</div>
    </div>
  );
}
