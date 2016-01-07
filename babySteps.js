var inputs = process.argv.slice(2)

var total = inputs.reduce(function(a,b) {
    return Number(a) + Number(b);
});

console.log(total);

