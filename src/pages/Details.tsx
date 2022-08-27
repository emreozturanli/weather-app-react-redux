import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import spinner from '../assets/spinner.gif'
import { getWeather } from '../features/weatherSlice'
import cities from "../utils/cities.json"
import { TiWeatherCloudy } from 'react-icons/ti';
import { TiWeatherWindy } from 'react-icons/ti';
import { WiHumidity } from 'react-icons/wi';
import { WiSunrise } from 'react-icons/wi';
import { WiSunset } from 'react-icons/wi';
import { FaCity } from 'react-icons/fa';

const Details = () => {
  const { weather, loading } = useAppSelector(state => state.weather)
  const dispatch = useAppDispatch()
  const { cityName } = useParams()

  const city = cities.find(city => cityName && city.name === cityName)

  const sunrise = new Date((weather?.sys?.sunrise) * 1000).getHours().toString().padStart(2, '0') + ':' + new Date((weather?.sys?.sunrise) * 1000).getMinutes().toString().padStart(2, '0')

  const sunset = new Date((weather?.sys?.sunset) * 1000).getHours().toString().padStart(2, '0') + ':' + new Date((weather?.sys?.sunset) * 1000).getMinutes().toString().padStart(2, '0')

  useEffect(() => {
    if (city !== undefined) {
      const lat = city.latitude
      const lon = city.longitude
      dispatch(getWeather({ lat, lon }))
    }
  }, [city, dispatch])

  if (loading) {
    return <img className='absolute left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4' src={spinner} alt="loading-spinner" />
  }
  return (

    <section className='bg-slate-600 min-h-screen '>
      <div className='max-w-3xl m-auto text-white p-4'>
        <div className='flex justify-between items-center mb-8'>
          <div className='text-3xl text-orange-500'>
            <FaCity size={40} className="text-yellow-300 m-auto mb-4"/>
            {weather?.name?.split(' ').slice(0, 1).join('')}, {weather?.sys?.country}
          </div>
          <div className='flex flex-col items-center'>
            <img
              src={weather?.weather?.[0]?.icon ? `http://openweathermap.org/img/wn/${weather?.weather?.[0]?.icon}@4x.png` : spinner} alt="weather-img" />
            <p className='text-lg font-bold text-green-400'>
              {weather?.main?.temp} &#8451;
            </p>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-1 gap-y-6 sm:grid-cols-3 md:gap-6'>
          <div className='capitalize flex flex-col items-center'>
            <TiWeatherCloudy size={30} className='text-yellow-300  ' />
            <div>
              <span className='text-lg text-orange-400 mr-2'>
                General :
              </span>
              {weather?.weather?.[0]?.description}
            </div>
          </div>

          <div className='capitalize flex flex-col items-center'>
            <WiHumidity size={30} className='text-yellow-300' />
            <div>
              <span className='text-lg text-orange-400 mr-2'>
                Humidity :
              </span>
              {weather?.main?.humidity}%
            </div>
          </div>

          <div className='capitalize flex flex-col items-center'>
            <TiWeatherWindy size={30} className='text-yellow-300' />
            <div>
              <span className='text-lg text-orange-400 mr-2'>
                Wind :
              </span>
              {weather?.wind?.speed} km/h
            </div>
          </div>

          <div className='capitalize flex flex-col items-center'>
            <WiSunrise size={30} className='text-yellow-300' />
            <div>
              <span className='text-lg text-orange-400 mr-2'>
                Sunrise :
              </span>
              {sunrise}
            </div>
          </div>

          <div className='capitalize flex flex-col items-center'>
            <WiSunset size={30} className='text-yellow-300' />
            <div>
              <span className='text-lg text-orange-400 mr-2'>
                Sunset :
              </span>
              {sunset}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Details