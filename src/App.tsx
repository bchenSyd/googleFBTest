import { useEffect, useState } from "react";
import { setupWorker } from "msw";
import {
  getRedirectResult,
  signInWithRedirect,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  User,
} from "firebase/auth";
import { auth } from "./authentication";
import { handlers as serviceHandlers } from "./mocks/services";

const setupApp = async () => {
  setupWorker(...serviceHandlers).start();
};

if (process.env.NODE_ENV === "development") {
  setupApp();
}

const App = () => {
  const [user, setUser] = useState<User | null>(null);
  const [stage, setStage] = useState("not started");
  useEffect(() => {
    setStage("getRedirectResult...");
    getRedirectResult(auth)
      .then((result) => {
        if (result) {
          setStage("redirect success");
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const accessToken = credential?.accessToken || "";
          const user = result.user;
          sessionStorage.setItem("token", accessToken);
          sessionStorage.setItem("user", JSON.stringify(user));
          setUser(user);
        } else {
          // not a redirect
          const session_user = sessionStorage.getItem("user");
          if (!session_user) {
            setStage("Sign in");
            const provider = new GoogleAuthProvider();
            signInWithRedirect(auth, provider);
          } else {
            setStage("remount after signed in");
            // todo: populate accessToken and user info from session storage;
            setUser(JSON.parse(session_user));
          }
        }
      })
      .catch((err) => {
        console.error(`login error`, err);
      });
  }, []);

  return (
    <h1>
      {stage} - {user ? user.displayName : "signing in..."}{" "}
    </h1>
  );
};

export default App;
