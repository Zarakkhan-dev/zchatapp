import { Navigate, Route, Routes } from "react-router-dom";
import ChatRoom from "../Module/Dashboard/index";
import Signup from "../Module/Form/Signup/index";
import Signin from "../Module/Form/Signin/index";
import PropTypes from "prop-types";
const Routepage = () => {

  const ProtectedRoute = ({ children }) => {
    const tokenCheck = localStorage.getItem("accesstoken");
    if (tokenCheck) {
          return children;
    } else {
      return <Navigate to="/signup" />;
    }
  };

  ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
     tokenStatus: PropTypes.arrayOf(),
  };
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <ChatRoom  />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default Routepage;

Routepage.propTypes ={
  tokenStatus : String,
}