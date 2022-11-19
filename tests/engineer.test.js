const Engineer = require('../lib/engineer');


describe('engineer',()=>{

    describe("initialization",()=>{
    it('should create an engineer object');
    const engineer = new Engineer('Ryan', 25, "ryanstreet122@gmail.com", 'RyStreet');
    expect(engineer.github).toEqual('RyStreet')
    });

    describe('getGitHub()',()=>{
        it('should grab the github profile of employee')
        const engineer = new Engineer('Ryan', 25, "ryanstreet122@gmail.com", 'RyStreet')
        expect(engineer.getGithub()).toEqual('RyStreet');
        
    })

    describe('getRole()',()=>{
        it('should override role to engineer')
        const engineer = new Engineer('Ryan', 25, "ryanstreet122@gmail.com", 'RyStreet')
        expect(engineer.getRole()).toEqual('Engineer');

    })
})