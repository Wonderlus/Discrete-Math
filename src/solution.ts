
export function dijkstra(matrix: number[][], startNode: number) {
    
    const n = matrix.length; // Количество вершин в графе
    const result: Map<number, string> = new Map();
    for (let i = 1; i < n + 1; i++) {
      i == startNode + 1 ? 
      result.set(i, (i + " -> " + i)) :
      result.set(i, "");
    }

    // Инициализация массива для хранения расстояний от начальной вершины до остальных вершин
    const distances = new Array(n).fill(Infinity);
    distances[startNode] = 0; // Расстояние из начальной вершины в саму себя

    // Инициализация массива для отслеживания посещенных вершин
    const visited = new Array(n).fill(false);
    
    // Цикл для обхода всех вершин графа
    for (let i = 0; i < n - 1; i++) {
        // Находим вершину с наименьшим расстоянием
      const minDistanceNode = findMinDistanceNode(distances, visited);
      visited[minDistanceNode] = true;
      console.log(minDistanceNode)
      console.log(distances)
      console.log(visited)
      
      // Обновляем расстояния до соседних вершин
      for (let j = 0; j < n; j++) {
        if (!visited[j] && matrix[minDistanceNode][j] !== 0) {
          const newDistance = distances[minDistanceNode] + matrix[minDistanceNode][j];
          if (newDistance < distances[j]) {
            
            distances[j] = newDistance;
            result.set(j + 1, buildPath(result, minDistanceNode + 1, j + 1, startNode));
            console.log(result.get(j + 1));
            

          }
        }
      }


    }
    return printResult(distances, result, n);
  }
  
// Функция для поиска вершины с наименьшим расстоянием
function findMinDistanceNode(distances: number[], visited: boolean[]) {
    let minDistance = Infinity;
    let minDistanceNode = -1;
  
    for (let i = 0; i < distances.length; i++) {
        
      if (!visited[i] && distances[i] < minDistance) {
        minDistance = distances[i];
        minDistanceNode = i;
      }
    }

    return minDistanceNode;
}

function buildPath(result: any, from: number, to: number,  startNode: number) : string {
  if (result.get(to) === "") {
    result.set(to, (from + " -> " + to));
  }
  if (from === startNode + 1) {
    
    return result.get(to);
  } 

  
  let newFrom = Number(result.get(from)[0]);
  return buildPath(result, newFrom, from, startNode).slice(0, -1) + (from + " -> " + to);
}

function printResult(distances: number[], result: any, n: number) {
  let final = []
  for (let i = 0; i < n; i++) {
    final.push(result.get(i + 1) + " " + distances[i]);
  }

  return final;
}

// let matrix = 
// [[0, 20, 25, 17],
//  [20, 0, 28, 0],
//  [25, 28, 0, 30],
//  [17, 0, 30, 0]
// ]