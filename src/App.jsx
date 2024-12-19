import data from "./data"
import Header from "./components/Header"
import Entry from "./components/Entry"

export default function App() {
  const entryElements = data.map((entry) => {
    console.log(entry)

    return (
       <Entry 
         {...entry}

       />
    )

  })
  return (
    <>
        <Header/>
        <main className = "container">
        {entryElements}
        </main>
        
    </>

  )
}