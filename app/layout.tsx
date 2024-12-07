import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "FixIt - sklep i serwis",
  description: "FixIt - sklep i serwis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-slate-300`}
        style={{ backgroundColor: "#042340" }}
      >
        <header className="sticky top-0 z-50 bg-[#1a1e28] text-slate-300 shadow-md py-4">
          <div className="flex items-center justify-between max-w-[1200px] mx-auto px-4">
            <Image
              src="/images/logo.png"
              alt="FixIT Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <nav className="flex gap-6">
              <Link href="/" className="text-lg font-semibold hover:underline">
                Home
              </Link>
              <Link
                href="/blog"
                className="text-lg font-semibold hover:underline"
              >
                Blog
              </Link>
              <Link
                href="/services"
                className="text-lg font-semibold hover:underline"
              >
                Usługi
              </Link>
              <Link
                href="/products"
                className="text-lg font-semibold hover:underline"
              >
                Produkty
              </Link>
              <Link
                href="/faq"
                className="text-lg font-semibold hover:underline"
              >
                FAQ
              </Link>
            </nav>
          </div>
        </header>

        <Image
          src="/images/baner.png"
          alt="Banner"
          width={1000}
          height={200}
          className="w-full max-w-[1200px] m-auto"
        />

        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full max-w-[1200px] mx-auto">
          {children}
        </main>

        <footer className="row-start-3 w-full bg-[#1a1e28] text-slate-300 mt-10 p-8">
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <Image
                src="/images/logo.png"
                alt="FixIT Logo"
                width={500}
                height={500}
                className="w-28 h-28"
              />
              <p className="mt-4 text-sm text-gray-400">
                Oficjalnie licencjonowana firma FixIT specjalizująca się w
                serwisie i sprzedaży sprzętu komputerowego.
              </p>
            </div>

            {/* Center Section with Main Links */}
            <div className="flex flex-col gap-2">
            <Link href="/" className="text-lg font-semibold hover:underline">
                Home
              </Link>
              <Link
                href="/blog"
                className="text-lg font-semibold hover:underline"
              >
                Blog
              </Link>
              <Link
                href="/services"
                className="text-lg font-semibold hover:underline"
              >
                Usługi
              </Link>
              <Link
                href="/products"
                className="text-lg font-semibold hover:underline"
              >
                Produkty
              </Link>
              <Link
                href="/faq"
                className="text-lg font-semibold hover:underline"
              >
                FAQ
              </Link>
            </div>

            {/* Right Section with Social Links */}
            <div className="flex flex-col items-start md:items-end gap-4">
              <p className="text-gray-400">Nasze Sociale</p>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="40px"
                    height="40px"
                    className="fill-slate-300"
                  >
                    <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 25.832031 46 A 1.0001 1.0001 0 0 0 26.158203 46 L 31.832031 46 A 1.0001 1.0001 0 0 0 32.158203 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 33 44 L 33 30 L 36.820312 30 L 38.220703 23 L 33 23 L 33 21 C 33 20.442508 33.05305 20.398929 33.240234 20.277344 C 33.427419 20.155758 34.005822 20 35 20 L 38 20 L 38 14.369141 L 37.429688 14.097656 C 37.429688 14.097656 35.132647 13 32 13 C 29.75 13 27.901588 13.896453 26.71875 15.375 C 25.535912 16.853547 25 18.833333 25 21 L 25 23 L 22 23 L 22 30 L 25 30 L 25 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 32 15 C 34.079062 15 35.38736 15.458455 36 15.701172 L 36 18 L 35 18 C 33.849178 18 32.926956 18.0952 32.150391 18.599609 C 31.373826 19.104024 31 20.061492 31 21 L 31 25 L 35.779297 25 L 35.179688 28 L 31 28 L 31 44 L 27 44 L 27 28 L 24 28 L 24 25 L 27 25 L 27 21 C 27 19.166667 27.464088 17.646453 28.28125 16.625 C 29.098412 15.603547 30.25 15 32 15 z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="40px"
                    height="40px"
                    className="fill-slate-300"
                  >
                    <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="40px"
                    height="40px"
                    className="fill-slate-300"
                  >
                    <path d="M 24.402344 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.402344 16.898438 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.902344 40.5 17.898438 41 24.5 41 C 31.101563 41 37.097656 40.5 40.597656 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.097656 35.5 C 45.5 33 46 29.402344 46.097656 24.902344 C 46.097656 20.402344 45.597656 16.800781 45.097656 14.300781 C 44.699219 12.101563 42.800781 10.5 40.597656 10 C 37.097656 9.5 31 9 24.402344 9 Z M 24.402344 11 C 31.601563 11 37.398438 11.597656 40.199219 12.097656 C 41.699219 12.5 42.898438 13.5 43.097656 14.800781 C 43.699219 18 44.097656 21.402344 44.097656 24.902344 C 44 29.199219 43.5 32.699219 43.097656 35.199219 C 42.800781 37.097656 40.800781 37.699219 40.199219 37.902344 C 36.597656 38.601563 30.597656 39.097656 24.597656 39.097656 C 18.597656 39.097656 12.5 38.699219 9 37.902344 C 7.5 37.5 6.300781 36.5 6.101563 35.199219 C 5.300781 32.398438 5 28.699219 5 25 C 5 20.398438 5.402344 17 5.800781 14.902344 C 6.101563 13 8.199219 12.398438 8.699219 12.199219 C 12 11.5 18.101563 11 24.402344 11 Z M 19 17 L 19 33 L 33 25 Z M 21 20.402344 L 29 25 L 21 29.597656 Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Legal Links */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-400 border-t border-gray-700 pt-4">
            <a href="/imprint" className="hover:underline">
              Imprint
            </a>
            <a href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </a>
            <a href="/return-policy" className="hover:underline">
              Return Policy
            </a>
            <a href="/terms" className="hover:underline">
              General Terms and Conditions
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
