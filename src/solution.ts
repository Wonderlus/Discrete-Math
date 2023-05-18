
export function dijkstra(matrix: number[][], startNode: number) {
    const n = matrix.length; // Количество вершин в графе
  
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

      console.log(distances)
      
      // Обновляем расстояния до соседних вершин
      for (let j = 0; j < n; j++) {
        
        if (!visited[j] && matrix[minDistanceNode][j] !== 0) {
          const newDistance = distances[minDistanceNode] + matrix[minDistanceNode][j];
          if (newDistance < distances[j]) {
            
            distances[j] = newDistance;
          }
        }
      }
    }
  
    return distances;
  }
  
// Функция для поиска вершины с наименьшим расстоянием
function findMinDistanceNode(distances: number[], visited: boolean[]) {
    let minDistance = Infinity;
    let minDistanceNode = -1;
  
    for (let i = 0; i < distances.length; i++) {
        
      if (!visited[i] && distances[i] < minDistance) {
        console.log(i);
        minDistance = distances[i];
        minDistanceNode = i;
      }
    }
    console.log(" ")
    return minDistanceNode;
}

// let matrix = 
// [[0, 20, 25, 17],
//  [20, 0, 28, 0],
//  [25, 28, 0, 30],
//  [17, 0, 30, 0]
// ]