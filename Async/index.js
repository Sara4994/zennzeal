const employees = [
    {name: 'Jon snow', role: "Software Engineer"},
    {name: 'Harry potter', role: "Senior Software Engineer"}
];

                                            const getEmployees = () => {
                                                setTimeout(() => {
                                                    let output = ''
                                                    employees.forEach((employee, index) => {
                                                        output += `<li>${employee.name}</li>`
                                                    });
                                                    document.body.innerHTML = output;
                                                },2000)
                                            }
                                             
                                            const createEmployee = (employee) => {
                                                return new Promise((resolve, reject) => {
                                                    setTimeout(() => {
                                                        employees.push(employee);
                                                        const error = false;

                                                        if(!error) {
                                                            resolve();
                                                        } else {
                                                            reject('Something went wrong')
                                                        }
                                                    },2000)
                                                });
                                            };

createEmployee({name: 'Peter parker', role: 'Spiderman'}).then(
    getEmployees().then(
        getSalary().then(
            getTaxes().then(
                console.log('')
            )
        )
    )
); 
console.log('outside', employees)  

                //Callback hell
            func 1 -- server to get data -- gets name and role
                func 2 -- gets salary of employees retrieved
                    func 3 --  get the taxes based on their salaries
                        func 4 -- print the data retrieved from server