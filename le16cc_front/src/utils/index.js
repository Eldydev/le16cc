const TOKEN_KEY = 'jwt';

export const logout = () => {
    localStorage.removeItem('user');
}

export const isLogin = () => {
    if (localStorage.getItem('user')) {
        return true;
    }

    return false;
}