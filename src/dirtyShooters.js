function shooters(n) {
    if (Number.isInteger(n)) {
        if (n >= 0 && n < 100) {
            if(n > 2 && n < 100) {
                var a = "" + n + " shooters sans alcool sur le mur, " + n +
                    " shooters sans alcool.\n" +
                    "Bois en un et au suivant ! " +
                    (n - 1) + " shooters sans alcool sur le mur.";

                return a;
            } else if (n == 2) {
                return '2 shooters sans alcool sur le mur, 2 shooters sans alcool.\nBois en un et au suivant ! 1 shooter sans alcool sur le mur.';
            } else if (n === 1) {
                return '1 shooter sans alcool sur le mur, 1 shooter sans alcool.\nBois en un et au suivant ! plus de shooters sans alcool sur le mur.';
            } else {
                return 'Plus de shooters sans alcool sur le mur, plus de shooters sans alcool.\nVas au supermarché pour en acheter, 99 shooters sans alcool sur le mur.';
            }
        } else {
            throw new Error("Parameter is not an Integer in expected range 0..100 !");
        }
    } else {
        throw new Error("Parameter is not an Integer in expected range 0..100 !");
    }
}

export { shooters };