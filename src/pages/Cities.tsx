import { useNavigate } from "react-router-dom"
import { useAppDispatch} from "../app/hooks"
import { getWeather } from "../features/weatherSlice"
import cities from "../utils/cities.json"

const Cities = () => {
  const navigate = useNavigate()
  const dispatch =  useAppDispatch()

  const handleClick = (lat : string, lon: string, name : string) =>{
    navigate(`/cities/${name}`)
    dispatch(getWeather({lat, lon}))
  }
  
  return (
    <main className="bg-slate-600 min-h-screen ">
      <h1 className="max-w-7xl m-auto text-center text-orange-500 font-bold text-4xl py-4">Choose A City</h1>
      <section className='max-w-7xl m-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 px-6 pb-4'>
        {
          cities.map((city)=>{
            return (
            <div 
            key={city.name}
            className="bg-slate-400 rounded-md hover:bg-green-400 cursor-pointer shadow-xl"
            onClick={()=>handleClick(city.latitude,city.longitude,city.name)}
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