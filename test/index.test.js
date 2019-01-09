const { expect } = require('chai');
const nock = require('nock');

const { getResult, postResult } = require('../index');

describe('Multiplication test', () => {
  before(() => {
    const task = {
      id: 'd7998718-28df-4db9-9d74-fe3de2e41f49',
      operation: 'multiplication',
      left: -2388657711485603,
      right: 699958381248628,
    };

    nock('https://interview.adpeai.com')
      .get('/api/v1/get-task')
      .reply(200, task);

    nock('https://interview.adpeai.com')
      .post('/api/v1/submit-task', {
        id: 'd7998718-28df-4db9-9d74-fe3de2e41f49',
        result: -1.6719609850885148e+30,
      })
      .reply(200, { data: 'Correct' });
  });

  it('Should pass for multiplication get request', async () => {
    const get = await getResult('https://interview.adpeai.com/api/v1/get-task');
    expect(get.id).to.equal('d7998718-28df-4db9-9d74-fe3de2e41f49');
    expect(get.result).to.equal(-1.6719609850885148e+30);
  });

  it('Should pass for multiplcation post request', async () => {
    const post = await postResult('https://interview.adpeai.com/api/v1/submit-task', 'd7998718-28df-4db9-9d74-fe3de2e41f49', -1.6719609850885148e+30);
    expect(post.data).to.equal('Correct');
  });
});

// ID: 1968cb51-0030-4e6a-95b0-e45ac0873752 OPERATION: addition LEFT: -4326933301611071 RIGHT: 5770250504883389 RESULT: 1443317203272318

describe('Addition test', () => {
  before(() => {
    const task = {
      id: '1968cb51-0030-4e6a-95b0-e45ac0873752',
      operation: 'addition',
      left: -4326933301611071,
      right: 5770250504883389,
    };

    nock('https://interview.adpeai.com')
      .get('/api/v1/get-task')
      .reply(200, task);

    nock('https://interview.adpeai.com')
      .post('/api/v1/submit-task', {
        id: '1968cb51-0030-4e6a-95b0-e45ac0873752',
        result: 1443317203272318,
      })
      .reply(200, { data: 'Correct' });
  });

  it('Should be pass for addition get request', async () => {
    const result = await getResult('https://interview.adpeai.com/api/v1/get-task');
    expect(result.id).to.equal('1968cb51-0030-4e6a-95b0-e45ac0873752');
    expect(result.result).to.equal(1443317203272318);
  });

  it('Should pass for addition post request', async () => {
    const post = await postResult('https://interview.adpeai.com/api/v1/submit-task', '1968cb51-0030-4e6a-95b0-e45ac0873752', 1443317203272318);
    expect(post.data).to.equal('Correct');
  });
});

// ID: b74236f4-4dc3-437a-b67d-45762c1f36a4 OPERATION: remainder LEFT: 277742125234033 RIGHT: -905963504018963 RESULT: 277742125234033

describe('Remainder test', () => {
  before(() => {
    const task = {
      id: 'b74236f4-4dc3-437a-b67d-45762c1f36a4',
      operation: 'remainder',
      left: 277742125234033,
      right: -905963504018963,
    };

    nock('https://interview.adpeai.com')
      .get('/api/v1/get-task')
      .reply(200, task);

    nock('https://interview.adpeai.com')
      .post('/api/v1/submit-task', {
        id: 'b74236f4-4dc3-437a-b67d-45762c1f36a4',
        result: -1.6719609850885171e+31,
      })
      .reply(200, { data: 'Correct' });
  });

  it('Should be pass for remainder get request', async () => {
    const result = await getResult('https://interview.adpeai.com/api/v1/get-task');
    expect(result.id).to.equal('b74236f4-4dc3-437a-b67d-45762c1f36a4');
    expect(result.result).to.equal(277742125234033);
  });

  it('Should pass for remainder post request', async () => {
    const post = await postResult('https://interview.adpeai.com/api/v1/submit-task', 'b74236f4-4dc3-437a-b67d-45762c1f36a4', -1.6719609850885171e+31);
    expect(post.data).to.equal('Correct');
  });
});

// ID: 6bbbd3aa-0a0f-4bbb-a105-619621f21346 OPERATION: division LEFT: 7473971850701293 RIGHT: -7203791993926995 RESULT: -1.037505227386086

describe('Division test', () => {
  before(() => {
    const task = {
      id: '6bbbd3aa-0a0f-4bbb-a105-619621f21346',
      operation: 'division',
      left: 7473971850701293,
      right: -7203791993926995,
    };

    nock('https://interview.adpeai.com')
      .get('/api/v1/get-task')
      .reply(200, task);

    nock('https://interview.adpeai.com')
      .post('/api/v1/submit-task', {
        id: '6bbbd3aa-0a0f-4bbb-a105-619621f21346',
        result: -1.037505227386086,
      })
      .reply(200, { data: 'Correct' });
  });

  it('Should be pass for division get request', async () => {
    const result = await getResult('https://interview.adpeai.com/api/v1/get-task');
    expect(result.id).to.equal('6bbbd3aa-0a0f-4bbb-a105-619621f21346');
    expect(result.result).to.equal(-1.037505227386086);
  });

  it('Should pass for division post request', async () => {
    const post = await postResult('https://interview.adpeai.com/api/v1/submit-task', '6bbbd3aa-0a0f-4bbb-a105-619621f21346', -1.037505227386086);
    expect(post.data).to.equal('Correct');
  });
});

// ID: 197a40de-0c85-4b32-aef3-ad774ca777e3 OPERATION: subtraction LEFT: 1635772402482309 RIGHT: -8874980487887763 RESULT: 10510752890370072

describe('Subtraction test', () => {
  before(() => {
    const task = {
      id: '197a40de-0c85-4b32-aef3-ad774ca777e3',
      operation: 'subtraction',
      left: 1635772402482309,
      right: -8874980487887763,
    };

    nock('https://interview.adpeai.com')
      .get('/api/v1/get-task')
      .reply(200, task);

    nock('https://interview.adpeai.com')
      .post('/api/v1/submit-task', {
        id: '197a40de-0c85-4b32-aef3-ad774ca777e3',
        result: 10510752890370072,
      })
      .reply(200, { data: 'Correct' });
  });

  it('Should be pass for subtraction get request', async () => {
    const result = await getResult('https://interview.adpeai.com/api/v1/get-task');
    expect(result.id).to.equal('197a40de-0c85-4b32-aef3-ad774ca777e3');
    expect(result.result).to.equal(10510752890370072);
  });

  it('Should pass for subtraction post request', async () => {
    const post = await postResult('https://interview.adpeai.com/api/v1/submit-task', '197a40de-0c85-4b32-aef3-ad774ca777e3', 10510752890370072);
    expect(post.data).to.equal('Correct');
  });
});
