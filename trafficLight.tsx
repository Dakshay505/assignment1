import { useState } from "react"


const Home = () => {
  const [light , setLight] = useState("green");

  const greenClass = `w-[50px] h-[50px] rounded-full bg-white ${light=== "green" ? "bg-green-500" : "bg-white"}`;
  const redClass = `w-[50px] h-[50px] rounded-full bg-white ${light=== "red" ? "bg-red-500" : "bg-white"}`;
  const yellowClass = `w-[50px] h-[50px] rounded-full bg-white ${light=== "yellow" ? "bg-yellow-500" : "bg-white"}`;
  if(light === "yellow"){
    setInterval(()=>{
      setLight("red")
    },500)
  }else if(light === "red"){
    setInterval(()=>{
      setLight("green")
    },5000)
  }else{
    setInterval(()=>{
      setLight("yellow")
    },4000)
  }

  return (
    <div className="h-full w-full flex items-center justify-center">
    <div className="h-[200px] w-[60px] bg-black rounded-lg flex items-center flex-col justify-between p-2">
      <div className={redClass}>

      </div>
      <div className={yellowClass}>

      </div>
      <div className={greenClass}>

      </div>

    </div>
    </div>
  )
}

export default Home