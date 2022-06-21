var config = require("../config"),
    pgp = require('pg-promise')();

function do_auth(username, passwordxy) {
    var db = pgp(config.db.connectionString);

    var q = "SELECT * FROM users WHERE name = '" + username + "' AND password ='" + passwordxy + "';";

    return db.one(q);
}

module.exports = do_auth;
