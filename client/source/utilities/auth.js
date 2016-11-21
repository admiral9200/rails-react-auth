export function hasLocalStorage (): Boolean {
  return (window.localStorage.length !== undefined);
}

export const auth = {
  clear: () => {
    if (!hasLocalStorage()) { return false; }
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  },
  set: (data) => {
    if (!hasLocalStorage()) { return false; }
    if (!data || !data.auth_token || !data.user) { return false; }

    localStorage.setItem('authToken', data.auth_token);
    localStorage.setItem('user', JSON.stringify(data.user));

    return data.user;
  },
  token: () => {
    if (!hasLocalStorage()) { return false; }
    return localStorage.getItem('authToken');
  },
  user: () => {
    if (!hasLocalStorage()) { return false; }
    return localStorage.getItem('user');
  },
  all: () => {
    if (!hasLocalStorage()) { return false; }
    return {
      authToken: localStorage.getItem('authToken'),
      user: JSON.parse(localStorage.getItem('user'))
    };
  },
  parse: () => {
    if (!hasLocalStorage()) { return false; }
    let token = localStorage.getItem('authToken');

    let segments = token.split('.');
    let dataset = JSON.parse(atob(segments[1]));
  }
};

export function requireAuth (store, nextState, replace, next) {
  if (!store.getState().auth.user) {
    replace('/login');
  }

  next();
}
