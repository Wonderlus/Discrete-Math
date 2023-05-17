import { useState, FC, useEffect } from 'react'
import styles from "./App.module.scss";


const App: FC = () => {
  const [n, setSize] = useState(NaN);
  const [matrix, setMatrix] = useState<number[][]>([[]]); 
  const [error, setError] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

      setSize(Number(event.target.value));
    
  }

  const createMatrix = (event: React.FormEvent) => {
    event.preventDefault();
    let matrix: number[][] = [];
    if (n > 0) {
      for (let i = 0; i < n; i++) {
        matrix.push([]);
        for (let j = 0; j < n; j++) {
          matrix[i].push(0);
        }
      }
  
      setMatrix(matrix);
    }
    
  }

  const handleChangeMatrix = (i: number, j: number, event: React.ChangeEvent<HTMLInputElement>) => {
    let newMatrix = [...matrix];

    if (Number(event.target.value) >= 0 && Number(event.target.value) < 10000) {
      newMatrix[i][j] = Number(event.target.value);
    }
    setMatrix(newMatrix);
  }

  useEffect(() => {
    if (n < 0) {
      setError("Введите корректные данные");
    }
    else {
      setError("");
    }

  }, [n])

  const solve = () => {
    null;
  }
  console.log(matrix)
  return ( 
    <main className={styles.main}>
      <h2 className={styles.title}>Алгоритм Дейкстры</h2>
      <div>
        <form onSubmit={createMatrix}>
          <input id='size'  type='text' onChange={handleChange} placeholder='Введите размер матрицы'/>
          <button type='submit'>Сгенерировать матрицу</button>
        </form>
        {(matrix[0].length !== 0) ? 
        <div className={styles.matrix}>
          Матрица
          <div>
            {matrix.map((row, i) => (
              <div key={i} className={styles.row}>
                {row.map((col, j) => (
                  <div key={j} className={styles.column}>
                    <input className={styles.matrixInput} type='text' value={matrix[i][j]} onChange={(event) => handleChangeMatrix(i, j, event)} />
                  </div>
                ))
                }
              </div>
            ))
            }
            
          </div>
          <button onClick={() => solve()}>Посчитать</button>
        </div> : 
        <div>{error}</div>}
      </div>
    </main>
   );
}
 
export default App;