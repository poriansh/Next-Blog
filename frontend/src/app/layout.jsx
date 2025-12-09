
import Vazir from "@/constants/LocalFont";
import "@/styles/globals.css";
import { Providers } from "@/app/Providers";

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
      <body className={`${Vazir.variable} font-vazir min-h-screen`}>
        <Providers>
          <div className="min-h-screen">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
