load_balancer = require('./node_modules/load_balancer/main')

/*
* Purpose: The start of the program, determines which major paths to take
* Arguments:
* Notes:
*/
function main() {
    load_balancer.balance()
}

if (require.main === module) {
    main();
}