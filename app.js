const yargs = require("yargs");
const { addOrder, listOrders, removeOrders } = require("./orders")

const command = process.argv[2]
console.log(yargs.argv)
if(command === "add"){
    console.log("adding to order...")
    addOrder(yargs.argv.order)
} else if(command === "remove"){
    console.log("removing order")
    removeOrders(yargs.argv.order)
} else if(command === "orders") {
    console.log("retrieving orders")
    listOrders()
}else{
    console.log("command not recognised")
}

var figlet = require('figlet');
 
console.log(figlet.textSync('Coffee', {
    font: 'isometric2',
    horizontalLayout: 'default',
    verticalLayout: 'default'
}));

var twirlTimer = (function() {
    var P = ["\\", "|", "/", "-"];
    var x = 0;
    return setInterval(function() {
      process.stdout.write("\r" + P[x++]);
      x &= 3;
    }, 250);
  })();

  console.log(` 
          ( (
           ) )    
       ...........
       |         |]
       \\         /
        '_______'   `)