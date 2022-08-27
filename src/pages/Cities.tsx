import { useNavigate } from "react-router-dom"
import cities from "../utils/cities.json"

const Cities = () => {
  const navigate = useNavigate()

  const handleClick = (name : string) =>{
    navigate(`/cities/${name}`)
  }

  const sortedCities = cities.sort((a,b)=> (a.name.localeCompare(b.name) ))
  
  return (
    <main className="bg-slate-600 min-h-screen ">
      <h1 className="max-w-7xl m-auto text-center text-orange-500 font-bold text-4xl py-4">Choose A City</h1>
      <section className='max-w-7xl m-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 px-6 pb-4'>
        {
          sortedCities.map((city)=>{
            return (
            <div 
            key={city.name}
            className="bg-slate-400 rounded-md hover:bg-green-400 cursor-pointer shadow-xl py-4"
            onClick={()=>handleClick(city.name)}
            >
                <p 
                className="text-center text-white text-lg sm:text-xl"
                >
                  {city.name}
                </p>
            </div>
            )
          })
        }
      </section>
    </main>
  )
}

export default Cities