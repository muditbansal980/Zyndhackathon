const sessionidtouser = new Map();

function setUser(id, userData) {
    return sessionidtouser.set(id, userData);
}

function getUser(id) {
    return sessionidtouser.get(id);
}

module.exports = {
    setUser,
    getUser
};