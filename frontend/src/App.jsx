import { useState } from "react"
import axios from "axios";

function App() {

  const [name, setName] = useState("");
  const [isDisplayName, setIsDisplayName] = useState(false);

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/users', {name}, {withCredentials: true})

      console.log(response.data);
      setIsDisplayName(true);
    } catch (error) {
      console.log('Error in frontend', error)
    }
  }
  return (
    <>
      <div className="ml-2">
        <h1 className="text-black">Write Your Name</h1>
        <input value={name} onChange={(e)=> setName(e.target.value)} className="w-70 border border-2" type="text"/>
        <button onClick={handleSubmit} className="w-20 border border-2 ml-5">Submit</button>
        <span className="text-red-500 m-10">{isDisplayName ? name : ""}</span>
      </div>
    </>
  )
}

export default App
