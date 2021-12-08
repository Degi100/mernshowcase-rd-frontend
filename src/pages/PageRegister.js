import { useContext } from "react";
import AppContext from "../AppContext";

const PageRegister = () => {
  const { siteStatus, toggleStatus } = useContext(AppContext);
  return (
    <div>
      This is the Register.
      <span className="highlight"> {siteStatus}</span>
    </div>
  );
};

export default PageRegister;
