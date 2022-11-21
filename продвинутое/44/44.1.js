class Employee {
    #salary
	constructor(salary) {
		this.#salary = salary;
	}
	salary() {
		return this.#salary + '$';
	}
}
let employee = new Employee('330');
let func = employee.salary;
func = func.bind(employee);
console.log(func());