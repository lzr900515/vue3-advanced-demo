const projectName = 'remote';
const globalUsers =
    [{
        loginUserName: "Admin",
        nickName: "Tom",
        password: "123456",
        permissions: "1",
        token: "e2b490f6-106f-455f-b0ac-afb6c52d3aeb"
    }, {
        loginUserName: "Customer",
        nickName: "Jack",
        password: "666666",
        permissions: "2",
        token: "674fc935-c283-42e4-9b7e-f2001ec3b862"
    }
    ];

const getUserInfo = () => {
    const users = localGet('users');
    if (users === null) {
        localSet('users', globalUsers);
    }
    const token = localGet('token');
    const result = localGet("users").find(user => user.token === token);
    console.log(`[${projectName}]getUserInfo token:${token}, result:${result}`);
    console.log(result);
    return result;
};

const login = (loginUserName, password) => {
    const users = localGet('users');
    if (users === null) {
        localSet('users', globalUsers);
    }
    const result = localGet('users').find(user => (user.loginUserName === loginUserName && user.password === password));
    console.log(`[${projectName}]login loginUserName:${loginUserName}, password:${password}, result:${result}`);
    return result;
};

function localGet(key) {
    const value = window.localStorage.getItem(key);
    try {
        return JSON.parse(window.localStorage.getItem(key))
    } catch (error) {
        return value
    }
}

function localSet(key, value) {
    console.log(`[${projectName}]getUserInfo token:${key}, token:${value}`);
    window.localStorage.setItem(key, JSON.stringify(value));
}

function localRemove(key) {
    window.localStorage.removeItem(key);
}

const pathMap = {
    Home: 'Home',
    login: 'Login',
    introduce: 'Introduce',
    dashboard: 'Dashboard',
    shopping: 'Shopping Test',
    account: 'Account'
};

export { getUserInfo, localRemove, localSet, login, pathMap };
