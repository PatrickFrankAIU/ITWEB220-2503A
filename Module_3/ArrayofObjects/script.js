let employees = [
  { name: 'Pat', office: 'Miami', extension: 1305 },
  { name: 'Sandy', office: 'Miami', extension: 1302 },
  { name: 'Andrea', office: 'Atlanta', extension: 1403 },
];

// Display all employees
function displayEmployees() { 
  let output = "";
  for (let employee of employees) { // Iterate through each employee
    output += `👤 ${employee.name} | 🏢 ${employee.office} | ☎️ ${employee.extension}\n`; 
  }
  document.getElementById("output").textContent = output;
}

// Sort by extension (numeric)
function sortByExtension() {
  employees.sort((a, b) => a.extension - b.extension); // Compare numeric values
  displayEmployees();
}

// Sort by name (alphabetic)
function sortByName() {
  employees.sort((a, b) => a.name.localeCompare(b.name)); // Compare strings alphabetically
  displayEmployees();
}

// Add new employee via prompt()
function addEmployee() { 
  let name = prompt("Enter employee name:");// Prompt for employee name
  if (!name) return;

  let office = prompt("Enter office location:");// Prompt for office location
  if (!office) return;

  let extension = prompt("Enter extension number:");// Prompt for extension number
  extension = parseInt(extension);// Convert to integer
  if (isNaN(extension)) return alert("Invalid extension!");

  employees.push({ name: name, office: office, extension: extension });// Add new employee object to array
  displayEmployees();// Display updated employee list
}
