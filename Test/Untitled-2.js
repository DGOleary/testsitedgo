console.log("hey everyone");
//swapiModule.getPerson(1,function(data) {
//    log("Result of getPerson/1", data);
//});
//console.log(test);
//swapiModule;
let obj;
async function getName(){
    obj=await JSON.parse(swapiModule.getPerson(1));
}
getName();
console.log(obj);
//alert("lol");