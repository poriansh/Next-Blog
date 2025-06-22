import Header from "@/components/Header";

export default function MainLayout({children}) {
  return (
    <>
      <Header />
      <div className="container">{children}</div>
    </>
  );
}
