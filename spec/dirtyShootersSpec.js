import { shooters } from "../src/dirtyShooters";

describe('dirtyShooters', () => {
    for(let i = 3; i < 100; i++) {
        it(`return expected verse for standard verse`, () => {
            let expected =
                `${i} shooters sans alcool sur le mur, ` +
                `${i} shooters sans alcool.\nBois en un et au suivant ! ` +
                `${i - 1} shooters sans alcool sur le mur.`;

            expect(shooters(i)).toBe(expected);
        });
    }

    it('return expected verse for input equal to 2', () => {
        let expectedVerse =
            '2 shooters sans alcool sur le mur, 2 shooters sans alcool.\nBois en un et au suivant ! 1 shooter sans alcool sur le mur.';
        expect(shooters(2)).toBe(expectedVerse);
    });

    it('return expected verse for input equal to 1', () => {
        let expectedVerse =
            '1 shooter sans alcool sur le mur, 1 shooter sans alcool.\nBois en un et au suivant ! plus de shooters sans alcool sur le mur.';
        expect(shooters(1)).toBe(expectedVerse);
    });

    it('return expected verse for input equal to 0', () => {
        let expectedVerse =
            'Plus de shooters sans alcool sur le mur, plus de shooters sans alcool.\nVas au supermarché pour en acheter, 99 shooters sans alcool sur le mur.';
        expect(shooters(0)).toBe(expectedVerse);
    });

    it('return an error with float number', () => {
        expect( function() { shooters(1.5); } ).toThrow(new Error("Parameter is not an Integer in expected range 0..100 !"));
    });

    it('return an error with String', () => {
        expect( function() { shooters('0'); } ).toThrow(new Error("Parameter is not an Integer in expected range 0..100 !"));
    });
});