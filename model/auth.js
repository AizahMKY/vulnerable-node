var config = require("../config"),
    pgp = require('pg-promise')();

function do_auth(username, passwordx) {
    var db = pgp(config.db.connectionString);

    var q = "SELECT * FROM users WHERE name = '" + username + "' AND password ='" + passwordx + "';";

    return db.one(q);
}

module.exports = do_auth;
