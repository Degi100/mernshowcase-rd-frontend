import { useContext } from "react";
import AppContext from "../AppContext";

const PageWelcome = () => {
  const { currentUserIsInGroup } = useContext(AppContext);
  return (
    <div>

      <div>
        {currentUserIsInGroup("loggedOutUsers") && (
          <div className="panel">Welcome to this site.</div>
        )}

        {currentUserIsInGroup("members") && (
          <div className="panel">
            <h3>Hello VIPS</h3>
            <p>
              You are the best and fck the rest!
            </p>
          </div>
        )}

        {currentUserIsInGroup("notApprovedUsers") && (
          <div className="panel">
            <h3>Thank you for registering!</h3>
            An administrator will approve your account as soon as possible.
          </div>
        )}
      </div>
    </div>
  );
};

export default PageWelcome;
