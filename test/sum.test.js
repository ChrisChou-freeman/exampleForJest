const sum = require('../sum');

beforeAll(()=>{
  console.log('run before')
});
afterAll(()=>{
  console.log('run after');
});

test('adds 1 + 2 to equal 3', () => {
  const data = sum(1,2);
  expect(data).toBe(3);
});

