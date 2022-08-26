import { useState } from "react"
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [apiKey, setApikey] = useState<string>('')
  const navigate = useNavigate()

  const validateKey = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=${apiKey}`

    const res = await fetch(url)
    if (res.status !== 401) {
      sessionStorage.setItem('apiKey', apiKey)
      navigate('/cities')
      setApikey('')
    }
    else {
      toast.error('API key is invalid. Please type a valid key!')
    }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    validateKey()
  }



  return (
    <section className="bg-slate-600 h-screen grid place-items-center text-white px-2">
      <div>
        <form onSubmit={handleSubmit} className="bg-white flex rounded-sm p-1 text-black w-full max-w-lg">

          <input
            type="text"
            value={apiKey}
            onChange={(e) => setApikey(e.target.value)}
            placeholder='Type a valid API key*'
            className="flex-1 border-none outline-none px-3 rounded-sm"

          />
          <button type="submit" className="bg-blue-500 rounded-sm px-4 py-2 hover:bg-blue-700 text-white">Continue</button>
        </form>

        <p className="text-slate-400 pt-4">
          <i>*Your API key must be a valid key for
            <a href="https://openweathermap.org/" target={'blank'} className="text-orange-400"> openweather.org</a>
          </i>
        </p>
      </div>
    </section>
  )
}

export default Home