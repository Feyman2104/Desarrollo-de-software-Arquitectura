import { Routes, Route } from "react-router-dom";
import HomeHooks from "./playground/HomeHooks";

import HooksUseState from "./playground/hooks/HooksUseState";
import HooksUseEffect from "./playground/hooks/HooksUseEffect";
import HooksUseRef from "./playground/hooks/HooksUseRef";
import HooksUseReducer from "./playground/hooks/HooksUseReducer";
import HooksUseMemo from "./playground/hooks/HooksUseMemo";
import HooksUseCallback from "./playground/hooks/HooksUseCallback";
import HooksUseContext from "./playground/hooks/HooksUseContext";
import HooksNavigate from "./playground/hooks/HooksNavigate";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeHooks />} />
      <Route path="/useState" element={<HooksUseState />} />
      <Route path="/useEffect" element={<HooksUseEffect />} />
      <Route path="/useRef" element={<HooksUseRef />} />
      <Route path="/useReducer" element={<HooksUseReducer />} />
      <Route path="/useMemo" element={<HooksUseMemo />} />
      <Route path="/useCallback" element={<HooksUseCallback />} />
      <Route path="/useContext" element={<HooksUseContext />} />
      <Route path="/navigate" element={<HooksNavigate />} />
    </Routes>
  );
}

export default App;