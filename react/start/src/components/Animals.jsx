export function Animals (){
  const animals = ["panda","parrot","dog"]
  return (
    <>
    <h2>aniamls:</h2>
    <ul>
      {animals.map((animal) => {
        return <li key={animal}>{animal}</li>
      })}
    </ul>
    </>
  )
}