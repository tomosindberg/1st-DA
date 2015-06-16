// var _ = require('lodash');
// _.mixin(require('lodash-toolbox'));
// var lodash = require('lodash');

//require(['lodash'], function(_) {});
//var _ = require('lodash');
// var array = require('lodash/array');
// var chunk = require('lodash/array/chunk');


var sum = 0,
  numProgrammers2 = 0,
  avgAwesome2 = 0,
  j = 0;


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

console.log(avgAwesome());

function avgAwesome() {
  var total = 0;
  var numProgrammers = 0;
  for (i=0; i<people.length; i++){
    if (people[i].occupation === 'programmer') {
      total += people[i].awesomeIndex;
      numProgrammers += 1;
    }
  }
  return total/numProgrammers;
}
//-------------------------
//var test =
// _.forEach(people, function(){
//   if (people[j].occupation == 'programmer') {
//     sum += _.add(people[j].awesomeIndex);
//     numProgrammers2 += 1;
//   }
//   j++;
//   avgAwesome2 = sum/numProgrammers2;
// });

// console.log(avgAwesome2);
//console.log(test);




