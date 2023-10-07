import { type AppType } from "next/dist/shared/lib/utils";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  display: "swap",
  subsets: ['latin'],
  variable: '--font-oswald',
});

import "~/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <main className={`${oswald.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
};

export default MyApp;
