import React, { createContext, useState } from "react";

const initialValue = {
  authed: false,
  login: () => void,
  logout: () => void,
};

const authContext = createContext(initialValue);

function useAuth() {
  const [authed, setAuthed] = useState(false);

  return {
    authed,
    login() {
      return setAuthed(true);
    },
    logout() {
      return setAuthed(false);
    },
  };
}

export function AuthProvider({ children }:{children:any}) {
  const auth = useAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export default function AuthConsumer() {
  return React.useContext(authContext);
}

// TBC how to handle this, localStorage, cookie, HTTP request, etc.

// export {};
