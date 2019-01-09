const axios = require('axios');

const getURL = 'https://interview.adpeai.com/api/v1/get-task';
const postURL = 'https://interview.adpeai.com/api/v1/submit-task';

function solveMathProblem(operation, value1, value2) {
  let answer = null;

  switch (operation) {
    case 'addition':
      answer = value1 + value2;
      break;
    case 'subtraction':
      answer = value1 - value2;
      break;
    case 'multiplication':
      answer = value1 * value2;
      break;
    case 'division':
      answer = value1 / value2;
      break;
    case 'remainder':
      answer = value1 % value2;
      break;
    default:
      console.log(`Operation: ${operation} not found.`);
  }

  return answer;
}

const getResult = async (gURL) => {
  try {
    const response = await axios.get(gURL);
    const { data } = response;
    const {
      id, operation, left, right,
    } = data;
    const result = solveMathProblem(operation, left, right);

    return { id, result };
  } catch (error) {
    return console.error(error);
  }
};

const postResult = async (pURL, id, result) => {
  try {
    const res = await axios.post(pURL, { id, result });
    if (res.status === 200) console.log(`Success! ID: ${id} Result: ${result}`);
    if (res.status === 400) console.log('Incorrect value in result; no ID specified; value is invalid!');
    else if (res.status === 500) console.log('ID cannot be found!');
    return res.data;
  } catch (error) {
    return console.error(error);
  }
};

setInterval(() => {
  getResult(getURL).then((data) => {
    postResult(postURL, data.id, data.result);
  });
}, 100);
// getResult(getURL).then((data) => {
//   postResult(postURL, data.id, data.result);
// });

module.exports = {
  getResult,
  postResult,
};
