public List<IEnumerable<T>> Chunk<T>(T[] arr, int size)
{
  var chunks = new List<IEnumerable<T>>();

  for (int i = 0; i < arr.Length / size; i++)
  {
    var chunk = arr.Skip(i * size).Take(size);
    chunks.Add(chunk);
  }

  return chunks;
}