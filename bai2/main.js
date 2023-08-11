let chain = "heLlo riKkei academy";
// let chain = "this is A tEst"
function standardized(chain) {
    let emptystring = ""
    for (i = 0; i < chain.length; i++) {
        if (i == 0) {
            emptystring += chain[i].toUpperCase()
        } else if (chain[i] == " " && chain[i + 1] != " ") {
            emptystring += " "
            emptystring += chain[++i].toUpperCase()
            i;
        } else {
            emptystring += chain[i].toLowerCase()
        }
    }
    return emptystring
}
let value = standardized(chain)
console.log(value);

