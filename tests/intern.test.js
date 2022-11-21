const Intern = require('../lib/intern');

describe('intern',()=>{

    describe("initialization",()=>{
    it('should create an intern object',()=> {
    const intern = new Intern('Ryan', 25, "ryanstreet122@gmail.com", 'UT');
    expect(intern.school).toEqual('UT')
    })});

    describe('getSchool()',()=>{
        it('should grab the school of intern',()=>{
        const intern = new Intern('Ryan', 25, "ryanstreet122@gmail.com", 'UT')
        expect(intern.getSchool()).toEqual('UT');
        
    })})

    describe('getRole()',()=>{
        it('should override role to intern',()=>{
        const intern = new Intern('Ryan', 25, "ryanstreet122@gmail.com", 'UT')
        expect(intern.getRole()).toEqual('Intern');

    })})
})