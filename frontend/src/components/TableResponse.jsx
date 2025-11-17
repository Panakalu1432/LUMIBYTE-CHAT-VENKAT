function TableResponse({ data }) {
  if (!data || data.length === 0) return null;

  const keys = Object.keys(data[0]);

  return (
    <table className="mt-3 w-full border-collapse border border-gray-400 dark:border-gray-600">
      <thead className="bg-gray-300 dark:bg-gray-700">
        <tr>
          {keys.map((k) => (
            <th key={k} className="border p-2 capitalize">
              {k}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {keys.map((key) => (
              <td key={key} className="border p-2">
                {row[key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableResponse;
