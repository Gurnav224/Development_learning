
import useFetch from './useFetch'

import "bootstrap/dist/css/bootstrap.min.css"
function App() {

const {data , fetchData , loading ,  error} = useFetch('https://api.adviceslip.com/advice')




  return (
<div className="container text-center">
  <h1 className="my-4 display-3">Advice Slip API</h1>
  <button  onClick={fetchData} className="btn btn-info btn-lg ">Get Advice</button>
  {loading && <p>loading..............</p>}
  {error && <p>{error}</p>}

  {
    data && (
      <div>
        <p className='fw-bold fs-5 mt-4'>{data.slip.advice}</p>
      </div>
    )
  }

</div>  
  )
}

export default App
