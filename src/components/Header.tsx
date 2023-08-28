import React from "react";

import { signIn, signOut } from "next-auth/react";

const Header = ({
  user,
}: {
  user: {
    id: string;
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  } | null;
}) => {
  return (
    <header className="flex">
      <h1 className="grow py-4">Eksjö Klädbytardag</h1>
      {!user && <button onClick={() => signIn()}>Sign in</button>}

      {user && (
        <div className="flex items-center gap-2">
          <span className="italic">
            <a href="/profile">{user.name}</a>
          </span>
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      )}
    </header>
  );
};

export default Header;
