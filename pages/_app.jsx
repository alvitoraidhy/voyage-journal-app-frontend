import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";

function MyApp({ Component, pageProps }) {
  const [token, setToken] = useState(null);

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <Toaster />
      <Component {...pageProps} token={token} setToken={setToken} />
    </>
  );
}

export default MyApp;
