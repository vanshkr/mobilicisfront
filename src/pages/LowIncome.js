import { useGetBMWOrMercedesOwnersWithLowIncomeQuery } from "../redux/services/backendApi";
import "./styles.css";
const LowIncome = () => {
  const { data } = useGetBMWOrMercedesOwnersWithLowIncomeQuery();
  return (
    <>
      {data ? (
        <table>
          <thead>
            <tr>
              <th>Index</th>
              <th>Full Name</th>
              <th>Income(in Dollars)</th>
              <th>Car Brand</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "table-row-even" : "table-row-odd"}
              >
                <td>{index + 1}</td>
                <td>{item?.first_name + " " + item?.last_name}</td>
                <td>{"$" + item?.income}</td>
                <td>{item?.car}</td>
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

export default LowIncome;
