import { useGetUsersWithLastNameAndQuoteRequirementsQuery } from "../redux/services/backendApi";
const QuoteRequirements = () => {
  const { data } = useGetUsersWithLastNameAndQuoteRequirementsQuery();
  return (
    <>
      {data ? (
        <table>
          <thead>
            <tr>
              <th>Index</th>
              <th>Full Name</th>
              <th>Last Name Initial</th>
              <th>Quote Length</th>
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
                <td>{item?.last_name?.[0]}</td>
                <td>{item?.quote.length}</td>
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

export default QuoteRequirements;
