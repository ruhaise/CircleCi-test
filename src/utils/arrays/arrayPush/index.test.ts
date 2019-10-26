import { arrayPush } from '.'

it('testing array iof numbers', () => {
    expect(arrayPush([1, 2], 3)).toEqual([1, 2, 3])
    expect(arrayPush([2, 2], 2)).toEqual([2, 2, 2])
})

it('testing array of objects', () => {
    expect(
        arrayPush([{ id: 1, task: 'test1' }, { id: 2, task: 'test2' }], {
            id: 3,
            task: 'test3',
        })
    ).toEqual([
        { id: 1, task: 'test1' },
        { id: 2, task: 'test2' },
        { id: 3, task: 'test3' },
    ])
})
