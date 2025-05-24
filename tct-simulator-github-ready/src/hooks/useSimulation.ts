export const useSimulation = (params: any) => {
  const {
    vehicles,
    fulltime,
    contract,
    parttime,
    workdays,
    deliveriesPerDay,
    unitPrice,
    kmPerDay,
    fuelCostPerKm,
    lease,
    insurance,
    maintenance,
    officeRent,
    communication,
    clerkSalary,
    misc,
    ad
  } = params;

  const sales = deliveriesPerDay * unitPrice * workdays * (fulltime + contract + parttime);

  const fulltimeSalary = fulltime * 250000;
  const contractSalary = contract * 200000;
  const parttimeSalary = parttime * 100000;
  const totalSalary = fulltimeSalary + contractSalary + parttimeSalary;

  const fuel = fuelCostPerKm * kmPerDay * workdays * (fulltime + contract + parttime);
  const vehicleCosts = lease + fuel + insurance + maintenance;
  const corporateCosts = officeRent + communication + clerkSalary + misc + ad;

  const totalExpenses = totalSalary + vehicleCosts + corporateCosts;
  const profit = sales - totalExpenses;
  const tax = Math.max(profit * 0.3, 0);
  const netProfit = profit - tax;

  const expenses = {
    fulltimeSalary,
    contractSalary,
    parttimeSalary,
    lease,
    fuel,
    insurance,
    maintenance,
    officeRent,
    communication,
    clerkSalary,
    misc,
    ad
  };

  const monthlyData = Array.from({ length: 12 }).map((_, i) => ({
    sales: sales / 12,
    salary: totalSalary / 12,
    vehicle: vehicleCosts / 12,
    corporate: corporateCosts / 12,
    profit: profit / 12,
    tax: tax / 12,
    netProfit: netProfit / 12
  }));

  return {
    sales,
    totalSalary,
    vehicleCosts,
    corporateCosts,
    totalExpenses,
    profit,
    tax,
    netProfit,
    expenses,
    monthlyData
  };
};
