import React, { useState } from "react";
import Loading from "./Loading";
import { PulseLoader , PropagateLoader } from "react-spinners";

const PdfView = ({ link }) => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <>
          {" "}
          <div className="flex justify-center dark:text-white p-4">
            <PropagateLoader color={"#808080"} size={10} />
          </div>
        </>
      )}

      <iframe
        src={link}
        frameBorder={20}
        title="Webview"
        style={{ height: "500px" }}
        className={`w-full border rounded-lg ${loading ? "hidden" : "block"}`}
        onLoad={() => setLoading(false)}
      />
    </>
  );
};

export default PdfView;
