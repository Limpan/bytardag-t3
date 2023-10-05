import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { NextIntlClientProvider } from "next-intl";

import { api } from "../utils/api";

import "../styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const timeZone = "Europe/Stockholm";
  const now = new Date();

  return (
    <NextIntlClientProvider timeZone={timeZone} now={now}>
      <SessionProvider session={session}>
        <div className="container mx-auto px-2">
          <Component {...pageProps} />
        </div>
      </SessionProvider>
    </NextIntlClientProvider>
  );
};

export default api.withTRPC(MyApp);
