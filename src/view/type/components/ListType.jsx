import React, { useEffect, useState } from "react";
import { getDataType } from "../../../Service/type/service_type";
import ListItemContainer from "../../../components/ListItemContainer";
import useSearch from "../../../libs/Zustand/useSearch";
import Loading from "../../../components/Loading";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import PdfView from "../../../components/PdfView";
import ListCard from "../../../components/ListCard";
import { motion } from "framer-motion"; // Import motion dari framer-motion
import ButtonBack from "../../../components/ButtonBack";
import { toast } from "sonner";

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
      toast.error("Failed to fetch data");
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

  const handleItemClick = (item) => {
    setSelectedCodes(item.codes);
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
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.04,
      },
    }),
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
          ? `#  ${
              selectedCodes.find((code) => code.pdfUrl === pdfUrl)?.code
            }`
          : selectedCodes
          ? `Codes`
          : "Type"
      }
    >
      {pdfUrl ? (
        <div>
          <ButtonBack handleBackClick={handleBack} />

          <PdfView link={pdfUrl} />
        </div>
      ) : selectedCodes ? (
        <div>
          <ul className="space-y-2">
            {filteredCodes.length > 0 ? (
              filteredCodes.map((code, index) => (
                <motion.li
                  key={code.id}
                  className="p-2 bg-gray-100 dark:bg-gray-600 dark:hover:bg-gray-500 hover:bg-gray-300 rounded shadow-md cursor-pointer"
                  onClick={() => handleCodeClick(code.pdfUrl)}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                >
                  <div className="flex items-center gap-2">
                    <FaArrowRight />
                    <p>{code.code}</p>
                  </div>
                </motion.li>
              ))
            ) : (
              <p className="text-gray-500 text-center">No codes found.</p>
            )}
          </ul>
          <ButtonBack handleBackClick={handleBack} />
        </div>
      ) : (
        <ListCard
          items={filteredData}
          onItemClick={handleItemClick}
          renderItem={(item, index) => (
            <div className="flex items-center gap-2">
              <FaArrowRight />
              <p>
                {index + 1}. {item.name}
              </p>
            </div>
          )}
        />
      )}
    </ListItemContainer>
  );
};

export default ListType;
