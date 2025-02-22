import Header from './components/Header'
import Entry from './components/Entry'
import entryData from './entryData';

function App() {

  const entries = entryData.map(entry => {
    return (
      <Entry
        key={entry.id}
        img={entry.img}
        title={entry.title}
        country={entry.country}
        googleMapsLink={entry.googleMapsLink}
        dates={entry.dates}
        text={entry.text}
      />
    )
  })

  return (
    <>
      <Header />
            <main className="justify-items-center bg-journal-bg  pt-20 pb-40">
                {entries[0]}
                {entries[1]}
                {entries[2]}

            </main>
    </>
    
  );
}

export default App;
