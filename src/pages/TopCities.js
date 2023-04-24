import { useGetTopCitiesByUserCountAndIncomeQuery } from "../redux/services/backendApi";

const TopCities = () => {
  const { data } = useGetTopCitiesByUserCountAndIncomeQuery();
  return (
    <>
      {data ? (
        <table>
          <thead>
            <tr>
              <th>Index</th>
              <th>City Name</th>
              <th>Number of Users</th>
              <th>Average Income(in Dollars)</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "table-row-even" : "table-row-odd"}
              >
                <td>{index + 1}</td>
                <td>{item?._id}</td>
                <td>{item?.count}</td>
                <td>{"$" + item?.avgIncome}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        "waiting for connection"
      )}
    </>
  );
};

export default TopCities;
