'use strict';

const assert = require('assert');
const app = require('../../src/app');

describe('\'moonall\' service', () => {
  it('registered the service', () => {
    const service = app.service('moonall');

    assert.ok(service, 'Registered the service');
  });
});
