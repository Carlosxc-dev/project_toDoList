import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../../domains/user/pages/login/pageLogin";
import Register from "../../domains/user/pages/register/pageRegister";
import Settings from "../../domains/money/pages/settings/settings";
import Home from "../../domains/money/pages/home/home";

import AuthOutlet from "@auth-kit/react-router/AuthOutlet";

function route() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />

        {/* <Route element={<Home />}>
            <Route index element={<Dashboard />} />
            <Route path="dash" element={<Dashboard />} />
            <Route path="addMoney" element={<CreateMoney />} />
            <Route path="settings" element={<Settings />} />
          </Route> 
        </Route>*/}
      </Routes>
    </Router>
  );
}

export default route;
