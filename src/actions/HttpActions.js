import HttpHelper from './HttpHelper';

// Users
function getUsers(token) {
  return HttpHelper().getData('/users', {}, 'GET_USERS', token);
}

// ...
function getSomethingElse(token) {
  return HttpHelper().getData('/something_else', {}, 'SOMETHING_ELSE', token);
}

export { getUsers, getSomethingElse };
