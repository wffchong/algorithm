class Graph<T> {
  // 顶点
  private vertexes: T[] = []
  // 边: 邻接表
  private adjList: Map<T, T[]> = new Map()

  /** 添加顶点和边的方法 */
  addVertex(vertex: T) {
    // 将顶点添加数组中保存
    this.vertexes.push(vertex)
    // 创建一个邻接表中的数组
    this.adjList.set(vertex, [])
  }

  addEdge(v1: T, v2: T) {
    this.adjList.get(v1)?.push(v2)
    this.adjList.get(v2)?.push(v1)
  }

  traverse() {
    console.log('Graph:')
    this.vertexes.forEach(vertex => {
      const edges = this.adjList.get(vertex)

      console.log(`${vertex} -> ${edges?.join(' ')}`)
    })
  }

  // 广度优先  ---> 基于队列，入队列的顶点先被探索
  bfs() {
    // 判断是否有顶点
    if (!this.vertexes.length) return

    // 创建队列结构访问每一个顶点
    const queue: T[] = []
    queue.push(this.vertexes[0])

    // 存储访问过的顶点
    const visited = new Set<T>()
    visited.add(this.vertexes[0])

    while (queue.length) {
      const vertex = queue.shift()!
      console.log(vertex)
      // 相邻的顶点
      const neighbors = this.adjList.get(vertex)
      if (!neighbors) continue
      for (const nei of neighbors) {
        if (!visited.has(nei)) {
          visited.add(nei)
          queue.push(nei)
        }
      }
    }
  }
}

const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')
graph.addVertex('G')
graph.addVertex('H')
graph.addVertex('I')

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')

graph.traverse()
graph.bfs()

export {}
