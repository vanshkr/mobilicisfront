import { Link } from "react-router-dom";
const Home = () => {
  const displayStyle = {
    display: "flex",
    flexDirection: "column",
  };
  const linkStyle = {
    backgroundColor: "black",
    color: "white",
    textDecoration: "none",
    float: "right",
  };

  const queryStyle = {
    FontSize: "16px",
    float: "left",
  };
  return (
    <div style={displayStyle}>
      <div>
        <div style={queryStyle}>
          Users which have income lower than $5 USD and have a car of brand
          “BMW” or “Mercedes”.
        </div>
        <p>
          <Link style={linkStyle} to={`/low_income`}>
            {" "}
            View Table{" "}
          </Link>
        </p>
      </div>
      <div>
        <div style={queryStyle}>
          Male Users which have phone price greater than 10,000.
        </div>
        <p>
          <Link style={linkStyle} to={`/expensive_phones`}>
            View Table{" "}
          </Link>
        </p>
      </div>
      <div>
        <div style={queryStyle}>
          Users whose last name starts with “M” and has a quote character length
          greater than 15 and email includes his/her last name.
        </div>

        <p>
          <Link style={linkStyle} to={`/quote_requirements`}>
            View Table
          </Link>
        </p>
      </div>
      <div>
        <div style={queryStyle}>
          Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose
          email does not include any digit.
        </div>
        <p>
          <Link style={linkStyle} to={`/luxury_cars`}>
            View Table
          </Link>
        </p>
      </div>
      <div>
        <div style={queryStyle}>
          Show the data of top 10 cities which have the highest number of users
          and their average income.
        </div>
        <p>
          <Link style={linkStyle} to={`/top_cities`}>
            View Table
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Home;
