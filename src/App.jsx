import { useState } from 'react'
import { Header } from "./components/Header.jsx";
import Entry from './components/Entry.jsx';
import data from './data.js'

console.log("data", data)

function App() {
  const entries = data.map((oneEntry) =>{
    return <Entry
    {...oneEntry} //passing the entire object to the Entry as props
    />
  })

  return (
    <>
      <Header/>
      <main>
        {entries}
      </main>
    </>
  )
}

export default App




