import { useState } from 'react'
import { Header } from "./components/Header.jsx";
import Entry from './components/Entry.jsx';
import data from './data.js'

console.log("data", data)

function App() {
  const entries = data.map((oneEntry) =>{
    return <Entry
    img={oneEntry.img} //left is my made up name that I am sending into the Entry as props, right is value coming from data.js. Also I send an entire img object to the Entry.jsx that then goes inside of it and choose which values it wants
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




