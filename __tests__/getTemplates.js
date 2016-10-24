const getTemplates = require('../src/index.js');

describe('Get templates', () => {
    it('should return valid templates', () => {
        expect(getTemplates()).toMatchSnapshot();
    });
});