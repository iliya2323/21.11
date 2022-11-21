class Employee {
	#name;
	
	constructor(name) {
		this.#name = name;
	}
	getName() {
		return this.#name;
	}
}
let empoyee = new Employee('john');
console.log(employee.getName);
