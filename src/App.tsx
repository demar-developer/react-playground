import { useState } from 'react'
import './App.css'

function App() {
  const [cells, setCells] = useState(["a", "b", "c"])

  const changeCellContent = (newCellValue: string, indexToUpdate: number) => {
    setCells((prevCells) => (
      prevCells.map((cell, index) => (index === indexToUpdate ? newCellValue : cell))
    ))
  }

  const handlePlusClicked = (index: number) => {
    setCells((prevCells) => {
      const newCells = [...prevCells]
      newCells.splice(index + 1, 0, "_")
      return newCells
    })
  }

  const combineCells = cells.join('')

  return (
    <main className="App">
      <section className="cells">
        {cells.map((cell, index) => (
          <div className="cell" key={index}>
            <input
              onChange={(e) => changeCellContent(e.currentTarget.value, index)}
              value={cell}
            ></input>
            {index !== cells.length - 1 && (
              <span
                className="plus"
                onClick={() => handlePlusClicked(index)}
              ></span>
            )}
          </div>
        ))}
      </section>
      <section className="cells-text">{combineCells}</section>
    </main>
  );
}

export default App
