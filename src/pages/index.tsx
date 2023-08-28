import { type NextPage } from "next";
import Head from "next/head";

import { useSession } from "next-auth/react";
import { api } from "@app/utils/api";
import HeaderContainer from "@app/components/HeaderContainer";
import SignUp from "@app/components/SignUp";

const Home: NextPage = () => {
  const event = api.event.getActive.useQuery();

  return (
    <>
      <Head>
        <title>bytardag.se</title>
        <meta name="description" content="Eksjö klädbytardag" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="px-2">
        <HeaderContainer />
        <main>
          <section className="my-8">
            <h3 className="text-xl">Var med och fynda</h3>
            <p>Kom till Klädbytardagen och fynda.</p>
            <p>
              Vi har öppet lördagen den 30 september klockan 9.30 till 13.00.
              Barnkläder och skor säljs i Equmeniakyrkan på Österlånggatan 3
              medan leksaker och tillbehör i säljs på Fröhuset på Österlånggatan
              6. Utanför Equmeniakyrkan kan man köpa fika. Betalning sker med
              Swish eller kontanter.
            </p>
          </section>
          <section className="my-8">
            <h3 className="text-xl">Var med och sälj</h3>
            <p>
              Bli en av våra många säljare. Det är enkelt! För att kunna anmäla
              dig som säljare behöver du registrera en email-adress och ett
              lösenord. Från och med den 10 september klockan 9.00 kan man
              anmäla sig här och bli en av våra 110 säljare. Anmälan är öppen
              tills alla platser är tagna eller till och med tisdagen i samma
              vecka som Klädbytardagen.
            </p>
            <SignUp />
            <p>
              Efter du anmält dig får du ett email med ett unikt säljnummer. Du
              ska sedan märka de barnkläder och saker som du vill sälja enligt
              den instruktion som kommer i emailet. Det som ska säljas lämnas in
              fredagen innan Klädbytardagen mellan 15.00 och 17.00. Observera ny
              tid! För den som absolut inte kan lämna in på fredagen finns
              möjlighet på torsdag kväll.
            </p>
            <p>
              Om du vill ha tillbaka osålda artiklar hämtas dessa på
              Klädbytardagen mellan 16.45 och 17.00. Du som säljare får 75 % i
              förtjänst av dina sålda varor. Resterande pengar går till Equmenia
              Eksjö som är Equmeniakyrkan Eksjös barn och ungdomsverksamhet,
              Equmenia Hult, Fröhuset och välgörenhet.
            </p>
          </section>
          <section className="my-8">
            <h3 className="text-xl">Dela med världen</h3>
            <p>
              Ta del av mer information om vår klädbytardag och sprid den vidare
              så att fler får möjligheten att köpa och sälja!
            </p>
            <ul>
              <li>
                <a href="https://www.facebook.com/kladbytardagen/">
                  Klädbytardagen på Facebook
                </a>
              </li>
              <li>
                <a href="https://equmeniakyrkaneksjo.se/">
                  Equmeniakyrkan Eksjö
                </a>
              </li>
            </ul>
          </section>
          <section>
            <h3 className="text-xl">Var med som volontär</h3>
            <p>
              Vi är många som hjälps åt för att genomföra klädbytardagen.
              Klädytardagen skulle aldrig gå att genomföra utan ett stort antal
              människor som lägger ned tid och engagemang för att det ska bli
              av. Om man vill vara med och förköpa under 2 timmar på
              fredagskvällen måste man fullgöra 3 arbetspass.
            </p>
            <p>
              <a href="/personal">Information för personal</a>
            </p>
          </section>
          <section className="my-8">
            <h3 className="text-xl">Så började det</h3>
            <p>
              Equmenia Eksjö har sedan 2001 anordnat Klädbytardagen. Begagnade
              barnkläder, skor, leksaker och tillbehör får nya ägare. Ett stort
              antal frivilliga sorterar inlämnade saker och sköter
              försäljningen. Det som inte säljs eller hämtas efteråt skänks till
              välgörenhet.
            </p>
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
