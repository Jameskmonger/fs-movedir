'use strict';

const test = require('tape');
const proxyquire = require('proxyquire');

test('it should make a directory when moving "x" into "a"', t => {
    t.plan(1);

    let fs = {
        mkdir: function (dir, cb) {
            t.pass('mkdir called');
        }
    };

    let mod = proxyquire('./index.js', {'fs': fs});

    mod('x', 'a');
});

test('it should make a directory "a" when moving "x" into "a"', t => {
    t.plan(1);

    let toDir = 'a';

    let fs = {
        mkdir: function (dir, cb) {
            if (dir === toDir) {
                t.pass('mkdir called');
            }
        }
    };

    let mod = proxyquire('./index.js', {'fs': fs});

    mod('x', toDir);
});

test('it should make a directory "b" when moving "x" into "b"', t => {
    t.plan(1);

    let toDir = 'b';

    let fs = {
        mkdir: function (dir, cb) {
            if (dir === toDir) {
                t.pass('mkdir called');
            }
        }
    };

    let mod = proxyquire('./index.js', {'fs': fs});

    mod('x', toDir);
});

test('it should rename a directory when moving "x" into "a"', t => {
    t.plan(1);

    let fs = {
        mkdir: function (dir, cb) { },
        rename: function (from, to, cb) {
            t.pass('rename called');
        }
    };

    let mod = proxyquire('./index.js', {'fs': fs});

    mod('x', 'a');
});
