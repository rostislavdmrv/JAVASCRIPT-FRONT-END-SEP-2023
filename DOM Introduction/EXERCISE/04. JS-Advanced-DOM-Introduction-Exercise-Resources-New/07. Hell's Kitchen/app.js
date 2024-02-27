function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
       const inputArray = JSON.parse(document.querySelector("textarea").value);
       const restaurants = {};

       inputArray.forEach(element => {
           const [restaurantName, workerData] = element.split(" - ");

           if (!restaurants.hasOwnProperty(restaurantName)) {
               createRestaurant(restaurants, restaurantName);
           }

           assignWorkers(restaurants, restaurantName, workerData);
           calcAverageSalary(restaurants, restaurantName);
       });

       generateOutput(restaurants);
   }

   function createRestaurant(restaurants, restaurantName) {
       restaurants[restaurantName] = {
           workers: [],
           averageSalary: 0,
           bestSalary: 0
       };
   }

   function assignWorkers(restaurants, restaurantName, workerData) {
       workerData.split(", ").forEach(data => {
           const [workerName, salary] = data.split(" ");
           const parsedSalary = Number(salary);

           restaurants[restaurantName].workers.push({
               name: workerName,
               salary: parsedSalary
           });

           if (parsedSalary > restaurants[restaurantName].bestSalary) {
               restaurants[restaurantName].bestSalary = parsedSalary;
           }
       });
   }

   function calcAverageSalary(restaurants, restaurantName) {
       const currentAverage = restaurants[restaurantName].workers.reduce((acc, curr) => {
           return acc += curr.salary / restaurants[restaurantName].workers.length;
       }, 0);

       restaurants[restaurantName].averageSalary = currentAverage;
   }

   function generateOutput(restaurants) {
       const bestRestaurant = Object.keys(restaurants)
           .sort((a, b) => restaurants[b].averageSalary - restaurants[a].averageSalary)[0];

       const restaurantInfo = `Name: ${bestRestaurant}`
           + ` Average Salary: ${(restaurants[bestRestaurant].averageSalary).toFixed(2)}`
           + ` Best Salary: ${(restaurants[bestRestaurant].bestSalary).toFixed(2)}`;

       const workersInfo = restaurants[bestRestaurant].workers
           .sort((a, b) => b.salary - a.salary)
           .map(worker => `Name: ${worker.name} With Salary: ${worker.salary}`)
           .join(" ");

       document.querySelector("#bestRestaurant p").textContent = restaurantInfo;
       document.querySelector("#workers p").textContent = workersInfo;
   }
}