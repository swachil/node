// Login module

const users = [
    {username: 'Swachil', password: 'green123$'},
    {username: 'Ronak', password: 'green123$'},
    {username: 'Tushar', password: 'green123$'}
];

function login(username, password) {
    const user = users.find(usr => username === usr.username && password === usr.password);
    if(!user) console.log('Invalid username or password.');
    else console.log('Login succeeded.');
    footer();
}

function register(username, password) {
    const user = {
        username: username,
        password: password
    };
    users.push(user);
    footer();
}

function logout() {
    console.log('Logout successfully.');
    footer();
}

function fetchUsers() {
    console.log(users);
    footer();
}

function footer() {
    console.log('Login completed.');
}

module.exports = {
    login,
    register,
    logout,
    fetchUsers
};