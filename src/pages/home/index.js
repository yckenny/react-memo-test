import { useState, useEffect} from "react";
import { API_GET_DATA } from "../../global/constants";
import Edit from "./components/edit";
import List from "./components/list";
import "./index.css";

async function fetchData(setData) {
    const res = await fetch(API_GET_DATA)
    const { data } = await res.json()
    setData(data)
}

async function fetchSetData(data) {
    await fetch(API_GET_DATA, {
        method: "PUT",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ data })
    })
}



const Home = () => {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    fetchSetData(data)
  }, [data])

  useEffect(() => {
    fetchData(setData)
  }, [])

  return (
    <div className="container">
      <Edit add={setData} />
      <List listData={data} removeData={setData} />
    </div>
  );
};

export default Home;
