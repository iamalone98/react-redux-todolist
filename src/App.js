import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import Sidebar from "./components/Sidebar/Sidebar";
import Tasks from "./components/Tasks/Tasks";
import { fetchLists } from "./redux/actions";
function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchLists()), [dispatch]);
  return (
    <div className="wrapper">
      <div className="todo">
        <Sidebar />
        <Tasks />
      </div>
    </div>
  );
}

export default App;
