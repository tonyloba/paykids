const express = require('express');
const parents = express.Router();


// interface childAccountList {
  // id: number;
  // child_id: string; 
  // first_name: string;
  // last_name: string;
  // account_number: string;
  // account_balance: number;
// }

let childrensList = [
  { 
    id: 1 , 
    child_id: 1, 
    parent_id: 1,
    first_name: "Tina", 
    last_name: "Toaster",  
    account_number: 1, 
    account_balance: 500,
    active: true
  },
  { 
    id: 2 , 
    child_id: 2,
    parent_id: 1, 
    first_name: "Bob", 
    last_name: "Toaster",  
    account_number: 2, 
    account_balance: 200,
    active: true
  }
];


let parentsList = [
  { 
    id: 1 , 
    child_id: 1, 
    first_name: "Jane", 
    last_name: "Toaster",  
    account_number: 1, 
    account_balance: 500,
    active: true,
    childrensList: childrensList 
  }
];


// Access all parents
parents.get('/', function(req, res, next) {
  res.json({});
});


// interface parentsListItem{ 
//   id: number; 
//   child_id: number;       // uuid string in production 
//   first_name: string; 
//   last_name: string;  
//   account_number: number; // uuid string in production 
//   account_balance: number;
//   active: boolean;
//   childrensList: array; 
// }


parents.get('/:parents_id', function(req, res, next) {
  console.log("http://localhost:3001/api/parents/:parents_id");
  // const parent = parentsList[parents_id]
  res.json(parentsList[0]);
});

// interface parentsListItem{ 
//   id: number; 
//   child_id: number;       // uuid string in production 
//   first_name: string; 
//   last_name: string;  
//   account_number: number; // uuid string in production 
//   account_balance: number;
//   active: boolean;
//   childrensList: array; 
// }


parents.get('/:parents_id/children/', function(req, res, next) {
  console.log("http://localhost:3001/api/parents/:parents_id/children");
  // const parentsChildren = parentsList[parents_id].childrensList
  res.json(parentsList[0].childrensList);
})

// interface parentsListItem{ 
//   id: number; 
//   child_id: number;       // uuid string in production 
//   first_name: string; 
//   last_name: string;  
//   account_number: number; // uuid string in production 
//   account_balance: number;
//   active: boolean;
//   childrensList: array; 
// }


parents.get('/:parents_id/children/:child_id', function(req, res, next) {
  console.log("http://localhost:3001/api/parents/:parents_id/children/:child_id");
  // const parentsChild = parentsList[parents_id].childrensList[child_id]
  res.json(parentsList[0].childrensList[0]);
})



// interface childAccountList {
  // id: number;
  // child_id: string; 
  // first_name: string;
  // last_name: string;
  // account_number: string;
  // account_balance: number;
// }

parents.get('/:parents_id/children/', function(req, res, next) {
  console.log("http://localhost:3001/api/parents/:parents_id/children/:child_id");
  res.json(childrensList);
});


// interface childAccountList {
  // id: number;
  // child_id: string; 
  // first_name: string;
  // last_name: string;
  // account_number: string;
  // account_balance: number;
// }

parents.get('/:parents_id/children/:child_id', function(req, res, next) {
  console.log("http://localhost:3001/api/parents/:parents_id/children/:child_id");

  res.json(childrensList[0]);
});



// functionality moved to childrens api
parents.get('/:parents_id/request_money/', function(req, res, next) {
  res.json({});
});

// functionality moved to childrens api
parents.get('/:parents_id/request_money/:child_id', function(req, res, next) {
  res.json({});
});


// SendMoney {
//   id: number;
//   child_id: string;
//   parent_id: string
//   send_money_note: string;   // should be $5, $10, $15, $20, $50, $100 
//   send_amount: number
//   created_at: datetime [default: `now()`];
// }

parents.post('/parents/:parents_id/send_money/:child_id', function(req, res, next) {
  res.json({});
});


module.exports = parents;
