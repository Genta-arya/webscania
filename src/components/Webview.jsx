import React, { useEffect, useState } from "react";
import MainContainer from "./MainContainer";
import Loading from "./Loading";

const Webview = ({ link }) => {
  const links = "https://www.kppmining.com/profile";
  const [loading, setLoading] = useState(true);
  console.log(link);

  useEffect(() => {
    document.body.classList.remove("dark");

    return () => {
      document.body.classList.remove("dark");
    };
  }, []);

  return (
    <MainContainer>
      {loading && <Loading />}

      <iframe
        src={links}
        title="Webview"
        className={`w-full h-screen border-none overflow-hidden ${
          loading ? "hidden" : "block"
        }`}
        sandbox="allow-same-origin  allow-scripts allow-popups allow-forms"
        onLoad={() => setLoading(false)}
      />
    </MainContainer>
  );
};

export default Webview;
