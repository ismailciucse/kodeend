import React from "react";
import Router from "../../routers/Router";
import Sidebar from "../sidebar/Sidebar";

const LayOut = () => {
  return (
    <div>
      <section className="layout">
        <Sidebar />
        <div className="main-layout">
          <div className="content">
            <Router />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LayOut;
