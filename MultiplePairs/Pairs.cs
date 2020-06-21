public IEnumerable<IEnumerable<double>> FindPairs(List<double> arr, int sum)
{
  List<IEnumerable<double>> pairs = new List<IEnumerable<double>>();
  Dictionary<double, double> map = new Dictionary<double, double>();

  for (int i = 0; i < arr.Count; i++)
  {
    double divisor = Math.Ceiling(sum / arr[i]);

    if (map.ContainsKey(arr[i]))
    {
      map[arr[i]] += 1;
    }
    else
    {
      map[arr[i]] = 1;
    }

    if (map.ContainsKey(divisor))
    {
      pairs.Add(new List<double> { arr[i], divisor });
    }
  }

  return pairs;
}