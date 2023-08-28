import React from "react";
import Header from "./Header";
import { useSession } from "next-auth/react";

const HeaderContainer = () => {
  const session = useSession();

  const user = session.status === "authenticated" ? session.data.user : null;

  return <Header user={user} />;
};

export default HeaderContainer;
