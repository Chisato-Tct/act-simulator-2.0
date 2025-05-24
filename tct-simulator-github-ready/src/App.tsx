import React from "react";
import { InputForm } from "./components/InputForm";
import { Summary } from "./components/Summary";
import "./styles.css";

const defaultParams = {
  vehicles: 5,
  fulltime: 2,
  contract: 2,
  parttime: 1,
  workdays: 365,
  deliveriesPerDay: 10,
  unitPrice: 200,
  kmPerDay: 100,
  fuelCostPerKm: 1,
  lease: 50000,
  insurance: 20000,
  maintenance: 10000,
  officeRent: 80000,
  communication: 10000,
  clerkSalary: 200000,
  misc: 5000,
  ad: 15000
};

export default function App() {
  return (
    <div className="App">
      <InputForm />
      <Summary params={defaultParams} />
    </div>
  );
}
