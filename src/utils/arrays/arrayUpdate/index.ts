// array updater fucntion
export const arrayUpdate = (array: any[], predicate: Function, replacer: Function) =>
    array.map(v => (predicate(v) ? replacer(v) : v))
