//PART A: VARIABLE DECLARATION & TYPE CHECKING
//1. DECLARATION
let storeName = "Nyondo General Harware LTD",
  minimunStockLevel = 50,
  isStoreOpen = true,
  currentManagerName = "",
  closedDepartments = null;

//2. TYPE CHECKING
console.log("storeName is of type ", typeof storeName);
console.log("minimunStockLevel is of type ", typeof minimunStockLevel);
console.log("isStoreOpen is of type ", typeof isStoreOpen);
console.log("currentManagerName is of type ", typeof currentManagerName);
console.log("closedDepartments is of type ", typeof closedDepartments);

//3. WHY CHOOSE LET OVER CONST
// "let" allows us to reassign values to a variable, while const does not allow reassignment after the initial assignment. I have chosen to use "let" because I know that I might need to reassign or change the variables later in the document.

//4. CONSISTENT NAMIMG & CLEANING SUPPLIER NAME
let supplierInput = "john HARDWARE";
let cleanSupplierName = supplierInput;

cleanSupplierName = `${cleanSupplierName
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ")}`;

console.log(cleanSupplierName);
console.log(`Supplier Name: [${cleanSupplierName}]`);

//PART B: STRING MANIPULATION & INPUT VALIDATION

//5. VALIDATION

function validateSupplierName(cleanSupplierName) {
  if (cleanSupplierName === "" || cleanSupplierName.length < 3) {
    return "Invalid supplier name!";
  }
  return "Valid supplier name!";
}
console.log(validateSupplierName(cleanSupplierName));

//6. Validation of phone number

function validatePhoneNumber(phoneNumber) {
  if (
    (phoneNumber.length === 10 && phoneNumber.startsWith("07")) ||
    (phoneNumber.startsWith("2567") && phoneNumber.length === 12)
  ) {
    return "Valid phone number!";
  }
  return "Invalid phone number!";
}
phoneNumber = "0768503692"; //instance
console.log(validatePhoneNumber(phoneNumber));
console.log(validatePhoneNumber("256999999"));

//7. FORMATTING TO FULL NAME

let product = "iron sheets - box of 20";
let formattedResult = product;

formattedResult = `${formattedResult.toUpperCase().replace("-", "with")}`;
console.log(formattedResult);

//8.GENERATE STOCK ITEM

const category = "ROOFING";
const itemId = 204;
const branchCode = "KLA";

const stockCode = `NYD-${category}-${branchCode}-${itemId}`;

console.log(stockCode);

//PART C CONDITIONAL LOGIC & STOCK ARRAYS

//9. IMPLEMENTING RULES USING IF...ELSE STATEMENTS

let userRole = "Sales Attendant";
let quantityOrdered = 30;
let sellingPriceUgx = "45000";
let costPriceUgx = 38000;

//RULE 1 LOG AN ERROR AND STOP
let allowedRoles = ["Store Manager", "Accounts/Admin"];
if (allowedRoles.includes(userRole)) {
  console.log("Access granted. Validating new stock...");
} else {
  console.log("Error: You are not authorised to register new stock.");
}

//RULE 2 SETTING LIMITS ON ORDER QUANTITY
if (quantityOrdered >= 10) {
  console.log("Order Accepted");
} else {
  console.log("Order is below minimum quantity");
}

//RULE 3 CONVERT STRING TO NUMBER THEN COMPARE
sellingPriceUgx = parseInt(sellingPriceUgx);

//I chose parseInt because there are not other values included in the string. I could use Number which is the normal path but I wanted to experiment with parseInt.

if (sellingPriceUgx > costPriceUgx) {
  console.log("Valid: Selling price is greater than the cost price.");
} else {
  console.log("Error: Cost price is greater than the selling price.");
}

//10. LOGICAL && OPERATOR
let isValid = quantityOrdered >= 10 && sellingPriceUgx > costPriceUgx;
console.log(isValid ? "Stock entry valid" : "Stock entry inavlid");

//11. CREATING AN ARRAY/adding...
const hardwareStock = [
  "Iron Sheets",
  "Cement Bags",
  "Steel Rods",
  "Paint (20L)",
  "PVC Pipes",
];

//Adding an item at the end
hardwareStock.push("Binding Wire");
console.log(hardwareStock);

//Remove first item
hardwareStock.shift();
console.log(hardwareStock);

// Checking for items in an array
console.log(hardwareStock.indexOf("Cement Bags"));

//Logging the final array and it's length
console.log(hardwareStock.length);

                    //PART D FUNCTIONS, OBJECTS & LOOPS

//12. FUNCTION FOR INVALID INPUT
function calculateSaleAmount(quantityInUnits, pricePerUnit) {
  let total = quantityInUnits * pricePerUnit;

  if (isNaN(total) || total < 0) return "invalid input";

  return "valid input";
}
console.log(calculateSaleAmount(5, 1000));

//13. ARROW FUNCTION TO VALIDATE A NIN
const validateNIN = (nin) => nin.length === 14 && nin !== "";
console.log(validateNIN("12345678901234"));
console.log(validateNIN("1234"));

//14. GETTING USER PERMISSION
function getUserPermission(role) {
  switch (role) {
    case "Store Manager":
      return "stock_and_pricing";
    case "Sales Attendant":
      return "sales_and_receipts";
    case "Accounts":
    case "Admin":
      return "full-reports";
    default:
      return "unauthorised";
  }
}
console.log(getUserPermission(""));

//15. CREATE A SALE RECORD
const createSaleRecord = (itemName, quantity, buyerContact, amountPaid) => {
  return {
    receiptId: 384584839203,
    itemName: itemName,
    quantityInUnits: quantity,
    buyerContact: buyerContact,
    amountPaid: amountPaid,
    saleDate: new Date(),
    isCredit: false,
  };
};

// Calling the function with test data
let sale = createSaleRecord("Varnish", 150, "0751234567", 15_000);

//Adding a branch property with value "Kampala Main"
sale.branch = "Kampala Main";
console.log(sale);

//Change isCredit from false to true
sale.isCredit = true;
console.log(sale);

//Adding a dueDate using bracket notation
sale["dueDate"] = new Date("2026-04-30");
console.log(sale);

//Use Object.keys to log all property names
console.log(Object.keys(sale));

//16. Creating an array of numbers
const weeklyDeposits = [
  350_000, 400_000, 700_000, 550_000, 630_000, 280_000, 500_000,
];

let total = 0;

for (let i = 0; i < weeklyDeposits.length; i++) {
  total = total + weeklyDeposits[i];
}

// logging total
console.log(total);

//Average daily deposit
const average = Math.round(total / weeklyDeposits.length);
console.log(average);

//Create an array of sales records
const sales = [
  createSaleRecord("Cement", 10, "0700123456", 30000),
  createSaleRecord("Paint", 5, "0700111111", 20000),
  createSaleRecord("Nails", 8, "0700222222", 30000),
  createSaleRecord("Vanish", 3, "0700333333", 15000),
  createSaleRecord("Silicone", 6, "0700444444", 25000),
];
sales[1].isCredit = true;
sales[3].isCredit = true;
sales[0].isCredit = true;

let creditCount = 0;

for (const sale of sales) {
  if (sale.isCredit !== true) {
    continue;
  }
  creditCount++;
}
console.log("Total credit sales:", creditCount);

//Create an inventory array
const inventory = [
  { itemName: "Cement", quantity: 20 },
  { itemName: "Paints", quantity: 15 },
  { itemName: "Varnish", quantity: 0 },
  { itemName: "Paint brush", quantity: 10 },
];

// Loop to find first out-of-stock item
for (let i = 0; i < inventory.length; i++) {
  if (inventory[i].quantity === 0) {
    console.log(`Alert: ${inventory[i].itemName} is out of stock`);
    break;
  }
}

//PART E HOFs SETs & MAPs

//17. USE A MAP TO CREATE A NEW ARRAY
let procurementRecords = [
  {
    id: 1233455666,
    supplierName: "Mercy",
    itemName: "Cement",
    quantityInUnits: 80,
    costInUgx: 30_000,
    deliveryDate: new Date(),
  },
];
const procurementRecords2 = procurementRecords.map((record) => ({
  ...record,
  costPerUnit: record.costInUgx / record.quantityInUnits,
}));
console.log(procurementRecords2);

//18. USE.FILTER
const bulkOrders = procurementRecords.filter(
  (record) => record.quantityInUnits >= 50,
);

console.log(bulkOrders);
console.log("Number of bulk orders:", bulkOrders.length);

// 19. REDUCE ()
// Calculate total quantity
// const totalQuantity = procurementRecords.reduce((acc, record) => acc + record.quantityInUnits, 0);

// // Calculate total cost
// const totalCost = procurementRecords.reduce((acc, record) => acc + record.costInUgx, 0);

// // Log using template literals
// console.log(`The total quantity procured across all records is: ${totalQuantity} units`);
// console.log(`The total cost of all procurements is: UGX ${totalCost.toLocaleString()}`);

const totals = procurementRecords.reduce(
  (acc, record) => {
    acc.quantity += record.quantityInUnits;
    acc.cost += record.costInUgx;
    return acc;
  },
  { quantity: 0, cost: 0 },
);

console.log(`Total quantity: ${totals.quantity}`);
console.log(`Total cost: UGX ${totals.cost.toLocaleString()}`);

//20. SET & MAP TASKS
// Set - extracting unique suppliers
function getUniqueSuppliers(records) {
  // Map to get all names, then use Set to remove duplicates
  const supplierSet = new Set(records.map((record) => record.supplierName));

  return [...supplierSet];
}
const uniqueSuppliers = getUniqueSuppliers(procurementRecords);
console.log("Unique Suppliers:", uniqueSuppliers);

//Map - Creating a map and iteration
const nyondoPriceList = new Map([
  ["Paint", 30000],
  ["Iron Sheets", 20000],
  ["Nails", 5000],
  ["Brush", 15000],
  ["Iron bars", 25000],
]);

function calculateSaleTotal(itemName, quantityInUnits) {
  if (!nyondoPriceList.has(itemName)) {
    return "Item not found";
  }

  const price = nyondoPriceList.get(itemName);
  return price * quantityInUnits;
}

console.log(
  `Total for 10 tins of paint: UGX ${calculateSaleTotal("Paint", 10)}`,
);
console.log(calculateSaleTotal("Bricks", 100));

// Iterate and log each entry
console.log("--- Current Price List ---");
nyondoPriceList.forEach((price, item) => {
  console.log(`${item}: UGX ${price.toLocaleString()}`);
});

// Use .reduce() to find the highest-priced item
// Note: We convert the values to an array first
const highestPrice = Array.from(nyondoPriceList.values()).reduce(
  (max, current) => {
    return current > max ? current : max;
  },
  0,
);

console.log(`---`);
console.log(
  `The highest price in our inventory is: UGX ${highestPrice.toLocaleString()}`,
);
