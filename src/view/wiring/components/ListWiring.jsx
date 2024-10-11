import React, { useEffect, useState } from "react";
import ListItemContainer from "../../../components/ListItemContainer";
import useSearch from "../../../libs/Zustand/useSearch";
import { getDataWiring } from "../../../Service/wiring/service_wiring";
import ListCard from "../../../components/ListCard";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import PdfView from "../../../components/PdfView";
import ButtonBack from "../../../components/ButtonBack";
import Loading from "../../../components/Loading";
import { toast } from "sonner";

const ListWiring = () => {
  const { setPlaceholderText, searchQuery } = useSearch();
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [pdfUrl, setPdfUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      const response = await getDataWiring();
      setData(response.data);
    } catch (error) {
        toast.error("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    setPlaceholderText("Search Wiring Diagram...");
  }, []);

  const handleItemClick = (item) => {
    setPdfUrl(item.fileUrl);
  };

  const handleBackClick = () => {
    setPdfUrl(null);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  if (loading) {
    return <Loading />;
  }

  return (
    <ListItemContainer text={"Wiring"}>
     

      {pdfUrl ? (
        <div>
          <ButtonBack handleBackClick={handleBackClick} />

          {pdfUrl && <PdfView link={pdfUrl} />}
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

export default ListWiring;
