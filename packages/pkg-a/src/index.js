/* eslint-disable */
new Promise((resolve) => {
  console.log('this is new Promise');
  const a = {};
  // console.log(a?.b?.c);
  resolve(100);
})
  .then((res) => {
    console.log(`this is ${res}`);
    return;
  })
  .catch((err) => {
    console.log(err);
  });

const { aaa } = require('./ma');
aaa();
const a = new Map();
a.set('aaa', 'bb');
const c = new Set();
c.add('bbb');

function aa(person) {
  return person?.age?.b; // eslint-disable-line
}
