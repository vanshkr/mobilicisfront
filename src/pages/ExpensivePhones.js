import { useGetMaleUsersWithExpensivePhonesQuery } from "../redux/services/backendApi";
const ExpensivePhones = () => {
  const { data } = useGetMaleUsersWithExpensivePhonesQuery();
  return (
    <>
      {data ? (
        <table>
          <thead>
            <tr>
              <th>Index</th>
              <th>Full Name</th>
              <th>Gender</th>
              <th>Phone Price</th>
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
                <td>{item?.gender}</td>
                <td>{item?.phone_price}</td>
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

export default ExpensivePhones;
