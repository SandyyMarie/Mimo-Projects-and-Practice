type TransactionCategory =
  | "Investment Return"
  | "Utilities"
  | "Online Shopping"
  | "Rent"
  | "Gift"
  | "Salary"
  | "Car Maintenance"
  | "Groceries";

interface Transaction {
  amount: number;
  category: TransactionCategory;
}

interface Summary {
  totalDeposited: number;
  totalWithdrawn: number;
  balance: number;
}

interface Analysis {
  largestDeposit: Transaction;
  largestWithdrawal: Transaction;
  averageDeposit: number;
  averageWithdrawal: number;
}

const data: Transaction[] = [
  { amount: 749.17, category: "Investment Return" },
  { amount: -11.54, category: "Utilities" },
  { amount: -247.58, category: "Online Shopping" },
  { amount: 981.17, category: "Investment Return" },
  { amount: -410.65, category: "Rent" },
  { amount: 310.60, category: "Rent" },
  { amount: 563.70, category: "Gift" },
  { amount: 220.79, category: "Salary" },
  { amount: -49.85, category: "Car Maintenance" },
  { amount: 308.49, category: "Salary" },
  { amount: -205.55, category: "Car Maintenance" },
  { amount: 870.64, category: "Salary" },
  { amount: -881.51, category: "Utilities" },
  { amount: 518.14, category: "Salary" },
  { amount: -264.66, category: "Groceries" },
];

function printTransactions(transactions: Transaction[]): void {
  transactions.forEach(({ amount, category }) => {
    console.log(`$${amount.toFixed(2)} - ${category}`);
  });
}

function getSummary(transactions: Transaction[]): Summary {
  const deposits = transactions.filter((t) => t.amount >= 0);
  const withdrawals = transactions.filter((t) => t.amount < 0);

  const totalDeposited = deposits.reduce((sum, t) => sum + t.amount, 0);
  const totalWithdrawn = withdrawals.reduce((sum, t) => sum + t.amount, 0);
  const balance = totalDeposited + totalWithdrawn;

  return { totalDeposited, totalWithdrawn, balance };
}

function printSummary(transactions: Transaction[]): void {
  const { totalDeposited, totalWithdrawn, balance } = getSummary(transactions);
  console.log(`Total Deposited: $${totalDeposited.toFixed(2)}`);
  console.log(`Total Withdrawn: $${totalWithdrawn.toFixed(2)}`);
  console.log(`Balance: $${balance.toFixed(2)}`);
}

function analyzeTransactions(transactions: Transaction[]): void {
  const deposits = transactions.filter((t) => t.amount >= 0);
  const withdrawals = transactions.filter((t) => t.amount < 0);

  const analysis: Analysis = {
    largestDeposit: deposits.reduce((max, t) => (t.amount > max.amount ? t : max)),
    largestWithdrawal: withdrawals.reduce((min, t) => (t.amount < min.amount ? t : min)),
    averageDeposit:
      deposits.reduce((sum, t) => sum + t.amount, 0) / deposits.length,
    averageWithdrawal:
      withdrawals.reduce((sum, t) => sum + t.amount, 0) / withdrawals.length,
  };

  console.log(`Largest Deposit: $${analysis.largestDeposit.amount.toFixed(2)} - ${analysis.largestDeposit.category}`);
  console.log(`Largest Withdrawal: $${analysis.largestWithdrawal.amount.toFixed(2)} - ${analysis.largestWithdrawal.category}`);
  console.log(`Average Deposit: $${analysis.averageDeposit.toFixed(2)}`);
  console.log(`Average Withdrawal: $${analysis.averageWithdrawal.toFixed(2)}`);
}

function runMenu(): void {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log("\nTransaction Analyzer");

  const prompt = (): void => {
    console.log("\nChoose an option:");
    console.log("1. Print transactions (type 'print')");
    console.log("2. Print summary (type 'summary')");
    console.log("3. Analyze transactions (type 'analyze')");
    console.log("4. Stop program (type 'stop')");

    rl.question("Enter your option: ", (choice: string) => {
      switch (choice.toLowerCase().trim()) {
        case "print":
          printTransactions(data);
          break;
        case "summary":
          printSummary(data);
          break;
        case "analyze":
          analyzeTransactions(data);
          break;
        case "stop":
          console.log("Goodbye!");
          rl.close();
          return;
        default:
          console.log("Invalid choice. Please try again.");
      }
      prompt();
    });
  };

  prompt();
}

runMenu();
