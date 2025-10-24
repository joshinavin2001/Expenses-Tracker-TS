import InputField from "./components/custom/InputField"
import OutputField from "./components/custom/OutputField"
import TotalExp from "./components/custom/TotalExp"


const App = () => {
  return (
    <div className="flex justify-center mt-5 overflow-x-hidden">
      <div className="bg-zinc-200 p-5 rounded-[20px] ">
        <InputField />
        <TotalExp />
        <OutputField />
      </div>
      
    </div>
  )
}

export default App
