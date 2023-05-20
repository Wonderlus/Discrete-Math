import { FC, useState} from 'react'
import styles from "./App.module.scss";
import {useApp} from "./useApp"
import { dijkstra } from './solution';


const App: FC = () => {
  const { matrix, error, handleChange, handleChangeMatrix, createMatrix} = useApp();
  const [result, setResult] = useState<string[]>([]);
  const [startNode, setStartNode] = useState<number>(0);
  
  console.log(result)

  return ( 
    <main className={styles.main}>
      <h2 className={styles.title}>Алгоритм Дейкстры и Флойда</h2>
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
          <input className={styles.inputNode} placeholder='Введите начальную вершину' type='text' onChange={(event) => setStartNode(Number(event.target.value))}></input>
          <div className={styles.buttons}>
            <button onClick={() => setResult(dijkstra(matrix, startNode - 1))}>Алгоритм   Дейкстры</button>
            <button>Алгоритм Флойда</button>
          </div>
          {result.map(elem => (
            <div>{elem}</div>
          ))}
        </div> : 
        <div>{error}</div>}
      </div>
    </main>
   );
}
 
export default App;