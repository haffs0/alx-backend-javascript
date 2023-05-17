const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi calls console.log with the right arguments', () => {
    const calNumSpy = sinon.spy(console);
    const calNumStub = sinon.stub(Utils, 'calculateNumber');

    calNumStub.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(calNumStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(calNumStub.callCount).to.be.equal(1);
    expect(calNumSpy.log.calledWith('The total is: 10')).to.be.true;
    expect(calNumSpy.log.callCount).to.be.equal(1);
    calNumStub.restore();
    calNumSpy.log.restore();
  });
});
