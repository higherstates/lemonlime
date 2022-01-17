import Icon404 from "../images/icon404.svg"
export default function ResultNotFound() {
  return (
    <div className="no-result">
      <img src={Icon404} alt="No matching result icon"/>
      <h2 className="no-result--big">Oops!</h2>
      <p className="no-result--small">No result matches your search, please try again.</p>
    </div>
  );
}
