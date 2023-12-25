// Goal of this file or of this module is to contain a couple of functions that we reuse over and over in our project.
import { async } from 'regenerator-runtime';
import { TIMEOUT_SEC } from './config';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    //   const res = await fetch(`${API_URL}/${id}`);
    const fetchPro = fetch(url);
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    // const res = await Promise.race[(fetch(url), timeout(0.5))];
    // convert the result to json
    const data = await res.json();

    // create error message when there is a wrong id in api call
    // error as alert window
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data; //this data > resolved value of the promise that getJSON function returns
  } catch (err) {
    // console.log(err); // error will be occurs here
    // rethrow the error instead of console log
    throw err;
  }
};
