import { Poppins } from "next/font/google";
import "./globals.css";
import "./styles.css"
import Header from "./Components/Header";
const inter = Poppins({ subsets: ["latin"] ,weight: "400"});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children } : {children : React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${inter.className} lg:mx-10 lg:px-20 px-5 py-5 `}>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
