import { useState, useEffect } from "react";

export function useApp() {
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
      newMatrix[j][i] = Number(event.target.value);
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

  return { matrix, error, handleChange, handleChangeMatrix, createMatrix}
}