var lodash = require('lodash');  //comment out to run with HTML
var _ = require('lodash');    //same as above

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
  awesomeIndex: 7,
  },

  {
  name: 'Julie',
  occupation: 'x-programmer',
  awesomeIndex: 3,
  }
];

// staffInfo();
// average();
console.log(average());
function staffInfo() {
  var text = [];
  //var i = 0;
  _.forEach(people, function(n) {
    text += "<tr><td>" + "Name:  " + n.name + "<td>" +
    "Occupation:  " + n.occupation + "<td>" +
    "Awesome Index:  " + n.awesomeIndex + "</tr>";
    //i++;
  });
  // console.log(text);
  return text;
}

function average() {
  var sum = 0;
  var aweArray = 0;

  aweArray = _.pluck(_.filter(people, {'occupation':'programmer'}),'awesomeIndex');
  sum = _.reduce(aweArray, function(total, i){
    return total + i;
  });
  // var aweAvg = sum/_.size(aweArray);
// console.log(aweArray);
// console.log(sum);

  return _.round((sum/_.size(aweArray)),1);
  // var aweAvg = _.round(z,1);
// var x = _.filter(people, {'occupation':'programmer'});//,'awesomeIndex');

// console.log(z);
// console.log(aweAvg);
  // _.forEach(people, function(n) {   //could run (n,i)  people[i]
  //   if(n.occupation == 'programmer') {  //_.filter, pluck, map and reduce
  //     sum += n.awesomeIndex;          //remove forEach and If
  //     numProgrammers += 1;
  //   }
  // });
  // console.log(sum/numProgrammers);
  // return (sum/numProgrammers).toFixed(1);
}

function timesThree(n) {
  return n * 3;
}

var x = _.map([1, 2], timesThree);
console.log(x);
// $("#staff").click (function(){
//   console.log("clicked staff button");
//   $("#name").html(staffInfo());
// });

// $("#AvgAwesomeButton").click (function(){
//   console.log("clicked Awesome button");
//   $("#awesome-index").text("Average Awesomeness:  " + average());
// });
