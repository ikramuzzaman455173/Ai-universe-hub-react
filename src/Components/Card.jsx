import React, { useEffect, useState } from "react";
import CardData from "./CardData";
import CardModal from "./CardModal";
import Button from "./Button";
const Card = () => {
  const [data, setData] = useState([])
  const [singleData, setSingleData] = useState({})
  const [uniqueId, setUniqueId] = useState(null)
  const [showData, setShowData] = useState(false)
  // console.log(uniqueId);
  useEffect(() => {
      fetch('https://openapi.programming-hero.com/api/ai/tools').then(response => response.json()).then(data => {
        // console.log(data)
        setData(data.data.tools)
      }).catch(error=>console.log(`404 page not found ${error}`))
  }, [])

  useEffect(() => {
      const loadData= async () => {
        const res= await fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
        const data = await res.json()
      console.log('data',data)
        setSingleData(data.data)
    }
    loadData()
  }, [uniqueId])
  console.log(singleData);
  return (
    <>
      <Button>sort by date</Button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:mx-10 md:mx-12 mx-10 my-6 overflow-x-hidden">
        {data.slice(0,showData?12:6).map(item=><CardData setUniqueId={setUniqueId} key={item.id} data={item} />)}
      </div>
      {
        !showData&&(<span onClick={()=>setShowData(true)} className="my-5 bg-blue-500">
        <Button>See More</Button>
        </span>)
      }
      <CardModal singleData={singleData} />
    </>
  );
};

export default Card;