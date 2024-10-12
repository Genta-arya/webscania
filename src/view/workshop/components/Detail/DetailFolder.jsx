import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainContainer from "../../../../components/MainContainer";
import Search from "../../../../components/Search";
import { getDetailWorkshop } from "../../../../Service/workshop/service_workshop";
import useSearch from "../../../../libs/Zustand/useSearch"; // Import useSearch
import ListItemContainer from "../../../../components/ListItemContainer";
import ImageContainer from "../../../../components/ImageContainer";
import { icon } from "../../../../utils/utils";
import Loading from "../../../../components/Loading";
import PdfView from "../../../../components/PdfView"; // Import PdfView
import { motion } from "framer-motion"; // Import Framer Motion
import ButtonBack from "../../../../components/ButtonBack";
import { toast } from "sonner";

const DetailFolder = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const { searchQuery, setQuery, setPlaceholderText } = useSearch(); // Ambil searchQuery dan setQuery dari useSearch
  const [loading, setLoading] = useState(true);
  const [selectedFileUrl, setSelectedFileUrl] = useState(null); // State untuk menyimpan URL file yang dipilih

  const getData = async () => {
    try {
      const response = await getDetailWorkshop(id);
      setData(response.data);
    } catch (error) {
      toast.error("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
    setPlaceholderText("Search Filename");
  }, [id]);

  const getFileName = (url) => {
    const parts = url.split("/");
    const fileNameWithQuery = parts[parts.length - 1];
    const fileName = fileNameWithQuery.split("?")[0];

    // Bersihkan nama file dari bagian URL
    const cleanedFileName = fileName
      .replace(/pdfs%2F/, "")
      .replace(/%/g, " ")
      .replace(/20/g, " ");

    return cleanedFileName;
  };

  const filteredFiles = data?.files.filter((file) =>
    getFileName(file.fileUrl).toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <Loading />;
  }

  const handleFileClick = (fileUrl) => {
    setSelectedFileUrl(fileUrl); // Set URL file yang dipilih
  };

  const handleBackClick = () => {
    setSelectedFileUrl(null); // Menghapus URL file yang dipilih
  };

  return (
    <MainContainer>
      <Search setQuery={setQuery} />
      <ListItemContainer text={data?.name}>
        <div>
          {selectedFileUrl ? ( // Jika ada URL file yang dipilih, tampilkan PdfView
            <motion.div
              key="pdf-view"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ButtonBack handleBackClick={handleBackClick} />
              <PdfView link={selectedFileUrl} />
            </motion.div>
          ) : (
            <motion.div
              key="file-list"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              {data ? (
                <>
                  {filteredFiles.length > 0 ? (
                    <ul className="list-disc pl-5">
                      {filteredFiles.map((file) => (
                        <li
                          key={file.id}
                          className="py-3 flex items-center gap-2 border-b border-black dark:border-white hover:bg-gray-300 hover:cursor-pointer dark:hover:bg-gray-700"
                          onClick={() => handleFileClick(file.fileUrl)} // Tambahkan handler klik
                        >
                          <ImageContainer img={icon.pdf} />
                          <p>{getFileName(file.fileUrl)}</p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-600 text-center">No files found.</p>
                  )}
                </>
              ) : null}
            </motion.div>
          )}
        </div>
      </ListItemContainer>
    </MainContainer>
  );
};

export default DetailFolder;
