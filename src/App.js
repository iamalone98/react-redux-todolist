import React, { useEffect } from "react";
import { connect } from 'react-redux';
import Sidebar from "./components/Sidebar/Sidebar";
import Tasks from "./components/Tasks/Tasks";
import { fetchLists } from "./redux/actions";

function App({ fetchLists }) {
  useEffect(() => {
    fetchLists();
  }, [fetchLists])
  return (
    <div className="wrapper">
      <div className="todo">
        <Sidebar />
        <Tasks />
      </div>
    </div>
  );
}

const mapDis = (dispatch) => ({
  fetchLists: () => dispatch(fetchLists()),
})

export default connect(null, mapDis)(App);
