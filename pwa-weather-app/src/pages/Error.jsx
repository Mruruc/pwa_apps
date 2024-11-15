import { useRouteError } from "react-router";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="container my-5">
      <h1>Oops! Something went wrong.</h1>
      {error && <p>{error.message}</p>}
      <p>Please try again later.</p>
    </div>
  );
};
export default Error;
