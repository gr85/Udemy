import Form from "./components/Form"
import Header from "./components/Header"
import ListPatients from "./components/ListPatients"

function App() {

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form />
        <ListPatients />
      </div>
      
    </div>
  )
}

export default App
