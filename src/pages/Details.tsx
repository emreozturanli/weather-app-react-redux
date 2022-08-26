
import { useAppSelector } from '../app/hooks'

const Details = () => {
  const {weather, loading} = useAppSelector(state=> state.weather)
  if(loading){
    return <h1>loading</h1>
  }
  return (
    <div>{weather?.main?.temp}</div>
  )
}

export default Details