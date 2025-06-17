import Vazir from "@/constants/LocalFont";
import "@/styles/globals.css";
import  Header  from '@/components/Header';

export const metadata = {
  title: {
    template: '%s | بلاگ اپ',
    default: "بلاگ اپ",

  },
  description: "اپلیکیشن مدیریت وبلاگ",
};

export default function RootLayout({children}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${Vazir.variable} font-vazir`} >
        <Header/>
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
