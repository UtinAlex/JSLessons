function module (){
let employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

//let employersNames = [];
//for (var i = 0; i < employers.length; i++) {
//	if (employers[i].length > 0 && employers[i].length != '') {
//		employersNames.push(employers[i]);
//	}
//}
let employersNames = employers.filter((name)=>{
    return name.length > 0 && name != '';
});
//for (let i = 0; i < employersNames.length; i++) {
//	employersNames[i] = employersNames[i].toLowerCase().trim();
//}
employersNames = employersNames.map((item)=> item.toLowerCase().trim());

let sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

function calcCash(own = 0, ...arr) {
    //own = own || 0;
    //var everyCash = Array.prototype.slice.call(arguments);
    let total = own;
    
    arr.filter((item)=>{
        total += +item;
    });
    //for (var i = 0; i < everyCash.length; i++) {
     //   total += +everyCash[i];
    // }
    return total;

}

let money = calcCash(undefined, ...sponsors.cash);

function makeBusiness(owner, director = 'Victor', cash, emp) {
    //director = director || 'Victor';
    let sumSponsors = sponsors.eu.concat(sponsors.rus, 'unexpected sponsor');
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers:
${emp}`);
    console.log('And we have a sponsors: ');
    console.log.apply(null, sumSponsors);
    console.log('Note. Be careful with ' + sponsors.eu[0] + ". It's a huge risk.");
}
makeBusiness('Sam', undefined, money, employersNames);

}
module ();