const Employee = require('../lib/employee');


describe("employee",()=>{
    //test initialization for employee object
    describe("Initialization",()=>{
    it("should create an employee object with name, ID and email",()=>{
        const employee = new Employee('Ryan', 25,'ryanstreet122@gmail.com');
         expect(employee.name).toEqual(expect.any(String));
         expect(employee.id).toEqual(expect.any(Number));
         expect(employee.email).toEqual(expect.any(String));
    })
    });
    //tests getName function
    describe("getName()",()=>{
        it("should take an employee's name", ()=>{
        const employee = new Employee ('Ryan', 25, 'ryanstreet122@gmail.com');
        expect(employee.getName()).toEqual('Ryan')
        })
    });

    describe('getId()',()=>{
        it("should take an employee's ID number",()=>{
            const employee = new Employee ("Ryan", 25, 'ryanstreet122@gmail.com');
            expect(employee.getID()).toEqual(25)
        })
    });

    describe('getEmail()',()=>{
        it("should take an employee's email",()=>{
            const employee = new Employee ("Ryan", 25, 'ryanstreet122@gmail.com');
            expect(employee.getEmail()).toEqual('ryanstreet122@gmail.com')
        })
    });

    describe('getRole()',()=>{
        it("should identify role as employee",()=>{
            const employee = new Employee ("Ryan", 25, 'ryanstreet122@gmail.com');
            expect(employee.getRole()).toEqual('Employee')
        })
    });

});
