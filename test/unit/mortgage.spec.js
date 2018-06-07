const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {


  it('monthly payment function exists', () => {
    const mortgage = new Mortgage(200000, 5.5, 30, 12);
    expect(mortgage.monthlyPayment()).to.exist;
  });
  it('monthly payment returns correct amount', () => {
    const mortgage = new Mortgage(200000, 5.5, 30, 12);
    expect(mortgage.monthlyPayment()).to.equal(1135.58);
  });
  it('monthly payment returns correct amount', () => {
    const mortgage = new Mortgage(350000, 4.5, 15, 12);
    expect(mortgage.monthlyPayment()).to.equal(2677.48);
  });
  it('monthly payment returns correct amount', () => {
   const mortgage = new Mortgage(1000000, 8.5, 15, 12);
    expect(mortgage.monthlyPayment()).to.equal(9847.40);
  });
});