var _ = require('lodash');
_.mixin(require('lodash-toolbox'));
var lodash = require('lodash');


var people =[
{
name: 'Bob',
occupation: 'programmer',
awesomeIndex: 7,
},

{
name: 'Alice',
occupation: 'programmer',
awesomeIndex: 8,
},

{
name: 'Zaphod',
occupation: 'President of the Galaxy',
},

{
name: 'Alice',
occupation: 'programmer',
awesomeIndex: 9,
},

{
name: 'Julie',
occupation: 'x-programmer',
awesomeIndex: 3,
}
];

var test = _.each({one: 1, two: 2, three: 3}, console.log());
console.log(test);

var sum = _.sum(people, 'awesomeIndex');
var avgAwesome = sum/people.length;
console.log(sum);
console.log(avgAwesome);

console.log(people[1].awesomeIndex);
console.log(people.length);



//-------------------------
//avgAwesome();
// console.log(avgAwesome());

// function avgAwesome() {
//   var total = 0;
//   var numProgrammers = 0;
//   for (i=0; i<people.length; i++){
//     if (people[i].occupation === 'programmer') {
//       total += people[i].awesomeIndex;
//       numProgrammers += 1;
//     }
//   }
//   return total/numProgrammers;
// }


