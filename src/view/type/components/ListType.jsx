import React, { useEffect, useState } from "react";
import { getDataType } from "../../../Service/type/service_type";
import ListItemContainer from "../../../components/ListItemContainer";
import useSearch from "../../../libs/Zustand/useSearch";
import Loading from "../../../components/Loading";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import PdfView from "../../../components/PdfView";

const ListType = () => {
  const [dataTypes, setDataTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCodes, setSelectedCodes] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [loadingPdf, setLoadingPdf] = useState(false);
  const searchQuery = useSearch((state) => state.searchQuery);
  const setSearchQuery = useSearch((state) => state.setSearchQuery);
  const setPlaceholderText = useSearch((state) => state.setPlaceholderText);

  const fetchData = async () => {
    try {
      const response = await getDataType();
      setDataTypes(response.data);
    } catch (error) {
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    setPlaceholderText("Search Type...");
  }, []);

  const filteredData = dataTypes.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <Loading />;
  }

  const handleItemClick = (codes, name) => {
    setSelectedCodes(codes);
    setSearchQuery("");
    setPlaceholderText("Search Code...");
  };

  const handleCodeClick = (url) => {
    setLoadingPdf(true);
    setPdfUrl(url);
  };

  const handlePdfLoad = () => {
    setLoadingPdf(false);
  };

  const handleBack = () => {
    setSelectedCodes(null);
    setPdfUrl(null);
    setSearchQuery("");
    setPlaceholderText("Search Type...");
  };

  const filteredCodes = selectedCodes
    ? selectedCodes.filter((code) =>
        code.code.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <ListItemContainer
      text={
        pdfUrl
          ? `Codes: ${
              selectedCodes.find((code) => code.pdfUrl === pdfUrl)?.code
            }`
          : selectedCodes
          ? `Codes`
          : "Type"
      }
    >
      {pdfUrl ? (
        <div>
          <button
            onClick={handleBack}
            className="mt-4 p-2 w-full flex justify-center bg-grays text-white rounded-lg mb-4 hover:opacity-80"
          >
            <div className="flex items-center gap-2 px-4">
              <FaArrowLeft />
              <p>Back</p>
            </div>
          </button>

          <PdfView link={pdfUrl} />
        </div>
      ) : selectedCodes ? (
        <div>
          <ul className="space-y-2">
            {filteredCodes.length > 0 ? (
              filteredCodes.map((code) => (
                <li
                  key={code.id}
                  className="p-2 bg-gray-100 dark:bg-gray-600 dark:hover:bg-gray-500 hover:bg-gray-300 rounded shadow-md cursor-pointer"
                  onClick={() => handleCodeClick(code.pdfUrl)}
                >
                  <div className="flex items-center gap-2">
                    <FaArrowRight />
                    <p>{code.code}</p>
                  </div>
                </li>
              ))
            ) : (
              <p className="text-gray-500 text-center">No codes found.</p>
            )}
          </ul>
          <button
            onClick={handleBack}
            className="mt-4 p-2 hover:opacity-80 w-full flex justify-center bg-grays text-white rounded-lg"
          >
            <div className="flex items-center gap-2 px-4">
              <FaArrowLeft />
              <p>Back</p>
            </div>
          </button>
        </div>
      ) : (
        <ul className="space-y-2">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <li
                key={item.id}
                onClick={() => handleItemClick(item.codes, item.name)}
                className="p-4 cursor-pointer bg-gray-200 dark:bg-gray-700 rounded shadow-md hover:bg-gray-300 hover:dark:bg-gray-600 transition"
              >
                {index + 1}. {item.name}
              </li>
            ))
          ) : (
            <p className="text-gray-500 text-center">No types found.</p>
          )}
        </ul>
      )}
    </ListItemContainer>
  );
};

export default ListType;
