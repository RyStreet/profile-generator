const Manager = require('../lib/manager');

describe('manager',()=>{

    describe("initialization",()=>{
    it('should create an manager object',()=>{
    const manager = new Manager('Ryan', 25, "ryanstreet122@gmail.com", 22);
    expect(manager.officeNumber).toEqual(22)
    });

    describe('getOffice()',()=>{
        it('should grab the office of manager', ()=>{
        const manager = new Manager('Ryan', 25, "ryanstreet122@gmail.com", 22)
        expect(manager.getOffice()).toEqual(22);
        
    })})

    describe('getRole()',()=>{
        it('should override role to manager',()=>{
        const manager = new Manager('Ryan', 25, "ryanstreet122@gmail.com", 22)
        expect(manager.getRole()).toEqual('Manager');

        })})
})});