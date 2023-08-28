import { type NextPage } from "next";
import Head from "next/head";

import { api } from "@app/utils/api";
import HeaderContainer from "@app/components/HeaderContainer";

const Home: NextPage = () => {
  const user = api.user.info.useQuery();

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
          <table>
            <tbody>
              <tr>
                <td>ID</td>
                <td>{user.data?.id}</td>
              </tr>
              <tr>
                <td>Name</td>
                <td>{user.data?.name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{user.data?.email}</td>
              </tr>
              <tr>
                <td>Roll</td>
                <td>{user.data?.role}</td>
              </tr>
            </tbody>
          </table>
        </main>
      </div>
    </>
  );
};

export default Home;
