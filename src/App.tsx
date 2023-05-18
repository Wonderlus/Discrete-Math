import { FC, useState} from 'react'
import styles from "./App.module.scss";
import {useApp} from "./useApp"
import { dijkstra } from './solution';


const App: FC = () => {
  const { matrix, error, handleChange, handleChangeMatrix, createMatrix} = useApp();
  const [result, setResult] = useState<number[]>([]);

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
          <button onClick={() => setResult(dijkstra(matrix, 1))}>Посчитать</button>
          <div>{result.join(" ")}</div>
        </div> : 
        <div>{error}</div>}
      </div>
    </main>
   );
}
 
export default App;