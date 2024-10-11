import React, { useEffect, useState } from "react";
import useSearch from "../../../libs/Zustand/useSearch";
import { getDataWorkshop } from "../../../Service/workshop/service_workshop";
import ListItemContainer from "../../../components/ListItemContainer";
import { icon } from "../../../utils/utils";
import ImageContainer from "../../../components/ImageContainer";
import Loading from "../../../components/Loading";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const RenderWorkshop = () => {
  const { setPlaceholderText, searchQuery } = useSearch();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
const navigate = useNavigate();
  const fetchData = async () => {
    try {
      const response = await getDataWorkshop();
      setData(response.data);
    } catch (error) {
        toast.error("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    setPlaceholderText("Search Workshop");
  }, [setPlaceholderText]);

  const handleClick = (item) => {
    navigate(`/workshop/${item.id}`);
  };

 
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <ListItemContainer text="Workshop">
      {filteredData.length === 0 ? ( 
        <div className="text-center text-gray-500">
          Folders not found.
        </div>
      ) : (
        filteredData.map((item) => (
          <div key={item.id} className="flex items-center border-b py-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer" onClick={() => handleClick(item)}>
            <ImageContainer img={icon.folder} />
            <div className="ml-2">{item.name}</div>
          </div>
        ))
      )}
    </ListItemContainer>
  );
};

export default RenderWorkshop;
