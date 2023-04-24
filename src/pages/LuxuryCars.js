import { useGetLuxuryCarOwnersWithNoDigitsInEmailQuery } from "../redux/services/backendApi";

const LuxuryCars = () => {
  const { data } = useGetLuxuryCarOwnersWithNoDigitsInEmailQuery();
  return (
    <>
      {data ? (
        <table>
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Car Brand</th>
              <th>Email</th>
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
                <td>{item?.car}</td>
                <td>{item?.email}</td>
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

export default LuxuryCars;
