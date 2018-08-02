import Axios from 'axios';

export default () => {
  // Generic Configuration
  const HttpHelper = Axios.create({
    /* eslint-disable */
    baseURL: __CONFIGURATION__.api,
    timeout: __CONFIGURATION__.timeout,
    /* eslint-enable */
    headers: { 'Access-Control-Allow-Origin': '*' },
  });

  /*

        GET

   */

  HttpHelper.getData = (path, params, action, token) => {
    HttpHelper.defaults.headers.common.Authorization = `Bearer ${token}`;
    return (dispatch =>
      HttpHelper.get(path, params)
        .then((res) => {
          if (res && res.status === 200) {
            dispatch({ type: action, payload: res.data });
          }
        })
        .catch((res) => {
          dispatch({
            type: 'RAISE_ERROR',
            payload: {
              message: res.message,
              isInfo: false,
            },
          });
          throw HttpHelper.exception(500, path);
        })
    );
  };

  /*

        POST

  */

  HttpHelper.postData = (path, params, action, token) => {
    HttpHelper.defaults.headers.common.Authorization = `Bearer ${token}`;
    return (dispatch =>
      HttpHelper.post(path, params)
        .then((res) => {
          if (res && res.status === 200) {
            dispatch({ type: action, payload: res.data });
          }
        })
        .catch((res) => {
          dispatch({
            type: 'RAISE_ERROR',
            payload: {
              message: res.message,
              isInfo: false,
            },
          });
          throw HttpHelper.exception(500, path);
        })
    );
  };

  HttpHelper.exception = (code, details) => ({
    errorCode: code,
    errorMessage: `A technical error occurred (${details})`,
  });

  return HttpHelper;
};
