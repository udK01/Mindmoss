import React, { createContext, useState, useContext } from "react";

const DevLogContext = createContext();

export function DevLogProvider({ children }) {
  const [logs, setLogs] = useState([]);

  const addLog = (newLog) => setLogs((prev) => [...prev, newLog]);
  const updateLog = (index, updatedLog) => {
    setLogs((prev) => prev.map((log, i) => (i === index ? updatedLog : log)));
  };
  const removeLog = (index) => {
    setLogs((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <DevLogContext.Provider
      value={{ logs, setLogs, addLog, updateLog, removeLog }}
    >
      {children}
    </DevLogContext.Provider>
  );
}

export function useDevLogs() {
  const context = useContext(DevLogContext);
  if (!context) {
    throw new Error("useDevLogs must be used within a DevLogProvider");
  }
  return context;
}
