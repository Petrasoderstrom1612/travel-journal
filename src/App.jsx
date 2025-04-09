import { useState } from 'react'
import { Header } from "./components/Header.jsx";
import Entry from './components/Entry.jsx';
import data from './data.js'

console.log("data", data)

function App() {
  const entries = data.map((oneEntry) =>{
    return <Entry
    img={oneEntry.img} //left is my made up name that will appear in JSX, right is coming from data.js
    country={oneEntry.country}
    googleMapsLink={oneEntry.googleMapsLink}
    place={oneEntry.country}
    date={oneEntry.dates}
    description={oneEntry.text}
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




