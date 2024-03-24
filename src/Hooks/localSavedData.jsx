import { useEffect, useState } from "react";
import { getLocalStorage } from "../utlity/localStorage";


const LocalSavedData = () => {
  const [localSaveData, setLocalSaveData] = useState([]);
  useEffect(() => {
    setLocalSaveData(getLocalStorage());
  }, []);
  return { localSaveData };
};

export default LocalSavedData;