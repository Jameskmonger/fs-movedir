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
