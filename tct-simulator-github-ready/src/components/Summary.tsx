import React from "react";
import { useSimulation } from "../hooks/useSimulation";

export const Summary = ({ params }: { params: any }) => {
  const {
    sales,
    totalSalary,
    vehicleCosts,
    corporateCosts,
    totalExpenses,
    profit,
    tax,
    netProfit,
    monthlyData,
    expenses
  } = useSimulation(params);

  return (
    <div className="section">
      <h2>📊 結果</h2>
      <ul>
        <li>売上合計：¥{sales.toLocaleString()}</li>
        <li>人件費：¥{totalSalary.toLocaleString()}</li>
        <li>経費合計：¥{totalExpenses.toLocaleString()}</li>
        <li>営業利益：¥{profit.toLocaleString()}</li>
        <li>法人税：¥{tax.toLocaleString()}</li>
        <li>税引後利益：¥{netProfit.toLocaleString()}</li>
      </ul>
    </div>
  );
};
