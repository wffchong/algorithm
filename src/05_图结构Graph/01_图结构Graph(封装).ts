class Graph<T> {
  // 顶点
  private vertexes: T[] = []
  // 边: 邻接表   adj是adjoin的缩写，邻接的意思
  private adjList: Map<T, T[]> = new Map()
}

export {}
