"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const testToDebug = 'Client test';
beforeEach(function () {
    const that = this;
    if (process.env.DEBUG_TEST === 'true' && testToDebug) {
        const fullTestTitle = getFullTitle(that.currentTest);
        if (fullTestTitle.search(testToDebug) < 0) {
            this.skip();
        }
    }
});
function getFullTitle(test) {
    const titles = [];
    let current = test;
    while (current) {
        if (current.title) {
            titles.push(current.title);
        }
        current = current.parent;
    }
    return titles.reverse().join(' ');
}
//# sourceMappingURL=debug-test.js.map