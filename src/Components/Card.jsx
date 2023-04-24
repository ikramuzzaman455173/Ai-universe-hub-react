import React, { useEffect, useState } from "react";
import CardData from "./CardData";
import CardModal from "./CardModal";
import Button from "./Button";
const Card = () => {
  const [data, setData] = useState([])
  const [singleData, setSingleData] = useState({})
  const [uniqueId, setUniqueId] = useState(null)
  const [showData, setShowData] = useState(false)
  const [buttonShow, setbuttonShow] = useState(true)
  // console.log(uniqueId);
  useEffect(() => {
      fetch('https://openapi.programming-hero.com/api/ai/tools').then(response => response.json()).then(data => {
        console.log(data)
        setData(data.data.tools)
      }).catch(error=>console.log(`404 page not found ${error}`))
  }, [])

  useEffect(() => {
      const loadData= async () => {
        const res= await fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
        const data = await res.json()
      // console.log('data',data)
        setSingleData(data.data)
    }
    loadData()
  }, [uniqueId])
  // console.log(singleData);
  // data sortBy Date
  const handleDateSort = () => {
    const sortData = data.sort((a, b) => new Date(b.published_in) - new Date(a.published_in))
    console.log(sortData,'date');
    setData([...data, sortData])
    setbuttonShow(false)
  }

  // const handleNameSort = () => {
  //   const sortData = data?.sort((a, b) => (a.name > b.name) ? 1 : -1);
  //   console.log(`sortdnamedata`,sortData);
  //   setData([...data,sortData]);
  //   // setData(sortData)
  // }

  return (
    <>
      <div className="flex justify-center gap-2">
        {/* {
          buttonShow?<span onClick={handleDateSort}><Button>sort by date</Button></span>:
          <span onClick={handleNameSort}><Button>sort by name</Button></span>
        } */}
        <span onClick={handleDateSort}><Button>sort by date</Button></span>
        {/* <span onClick={handleNameSort}><Button>sort by name</Button></span> */}
      </div>
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