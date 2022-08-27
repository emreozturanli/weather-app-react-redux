import { useAppDispatch, useAppSelector } from '../app/hooks'
import { getWeather, handleError } from '../features/weatherSlice'
import { TiWeatherCloudy } from 'react-icons/ti';
import { TiWeatherWindy } from 'react-icons/ti';
import { TbArrowBackUp } from 'react-icons/tb';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import spinner from '../assets/spinner.gif';
import { WiHumidity } from 'react-icons/wi';
import { WiSunrise } from 'react-icons/wi';
import { WiSunset } from 'react-icons/wi';
import cities from "../utils/cities.json";
import { FaCity } from 'react-icons/fa';
import { useEffect } from 'react'
import Item from '../components/Item';
import toast from 'react-hot-toast';

const Details = () => {
  const { weather, loading, error } = useAppSelector(state => state.weather)
  const dispatch = useAppDispatch()
  const { cityName } = useParams()
  const navigate = useNavigate()

  const city = cities.find(city => cityName && city.name === cityName)

  const sunrise = new Date((weather?.sys?.sunrise) * 1000).getHours().toString().padStart(2, '0') + ':' + new Date((weather?.sys?.sunrise) * 1000).getMinutes().toString().padStart(2, '0')

  const sunset = new Date((weather?.sys?.sunset) * 1000).getHours().toString().padStart(2, '0') + ':' + new Date((weather?.sys?.sunset) * 1000).getMinutes().toString().padStart(2, '0')

  useEffect(() =>{
    if (city !== undefined) {
      const lat = city.latitude
      const lon = city.longitude
      dispatch(getWeather({ lat, lon }))
    }
    else{
      toast.error('City not found. Redirected to cities page....')
      navigate('/cities')
    }
  }, [city, dispatch,navigate])

  if (loading) {
    return <img className='absolute left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4' src={spinner} alt="loading-spinner" />
  }

  if (error) {
    dispatch(handleError())
    return <Navigate to='/cities' />
  }

  return (

    <section className='bg-slate-600 min-h-screen '>
      <div className='max-w-3xl m-auto text-white p-4'>

        <div>
          <Link to='/cities'>
            <TbArrowBackUp size={40} className='inline hover:text-green-400' />
          </Link>
        </div>

        <div className='flex justify-between items-center mb-8'>
          <div className='text-3xl text-orange-500'>
            <FaCity size={40} className="text-yellow-300 m-auto mb-4" />
            {weather?.name?.split(' ').slice(0, 1).join('')}, {weather?.sys?.country}
          </div>
          <div className='flex flex-col items-center'>
            <img
              src={weather?.weather?.[0]?.icon ? `http://openweathermap.org/img/wn/${weather?.weather?.[0]?.icon}@4x.png` : spinner} alt="weather-img" />
            <p className='text-2xl font-bold text-orange-500'>
              {weather?.main?.temp.toFixed(0)} &#8451;
            </p>
          </div>
        </div>

        <div className='grid grid-cols-1 gap-3 gap-y-6 sm:grid-cols-2 md:grid-cols-3 md:gap-6'>

          <Item spanText='General' text={weather?.weather?.[0]?.description} >
            <TiWeatherCloudy size={30} className='text-yellow-300' />
          </Item>
          <Item spanText='Humidity' text={`${weather?.main?.humidity.toString()}%`} >
            <WiHumidity size={30} className='text-yellow-300' />
          </Item>
          <Item spanText='Wind' text={`${weather?.wind?.speed.toString()} km/h`} >
            <TiWeatherWindy size={30} className='text-yellow-300' />
          </Item>
          <Item spanText='Sunrise' text={sunrise} >
            <WiSunrise size={30} className='text-yellow-300' />
          </Item>
          <Item spanText='Sunset' text={sunset} >
            <WiSunset size={30} className='text-yellow-300' />
          </Item>

        </div>
      </div>
    </section>
  )
}

export default Details