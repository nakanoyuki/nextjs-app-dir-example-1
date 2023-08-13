import Link from "next/link";
import "./globals.css";
import Provider from "./Provider";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { Suspense } from "react";
import Loading from "./loading";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head />
      <body>
        {/* Server Component として扱うのではなく、Client Component として扱うように設定する必要がある */}
        <Provider>
          <Header />
          <Suspense fallback={<Loading />}>
            <Main>
              {children}
            </Main>
          </Suspense>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
