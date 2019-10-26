import { arrayUpdate } from '.'

it('testing array of objects update', () => {
    expect(
        arrayUpdate(
            [
                { id: 1, task: 'test1' },
                { id: 2, task: 'test2' },
                { id: 3, task: 'test3' },
            ],
            ({ id }: any) => id === 3,
            (v: any) => ({ ...v, task: 'awesome' })
        )
    ).toEqual([
        { id: 1, task: 'test1' },
        { id: 2, task: 'test2' },
        { id: 3, task: 'awesome' },
    ])
    expect(
        arrayUpdate(
            [
                { id: 1, task: 'test1' },
                { id: 2, task: 'test2' },
                { id: 3, task: 'test3' },
            ],
            ({ id }: any) => id === 1,
            (v: any) => ({ ...v, id: 4 })
        )
    ).toEqual([
        { id: 4, task: 'test1' },
        { id: 2, task: 'test2' },
        { id: 3, task: 'test3' },
    ])
    expect(
        arrayUpdate(
            [
                { id: 1, task: 'test1' },
                { id: 2, task: 'test2' },
                { id: 3, task: 'test3' },
            ],
            ({ task }: any) => task === 'test1',
            (v: any) => ({ ...v, id: 4 })
        )
    ).toEqual([
        { id: 4, task: 'test1' },
        { id: 2, task: 'test2' },
        { id: 3, task: 'test3' },
    ])
    expect(
        arrayUpdate(
            [
                { id: 1, task: 'test1' },
                { id: 2, task: 'test2' },
                { id: 3, task: 'test3' },
            ],
            ({ task }: any) => task === 'test1',
            (v: any) => ({ ...v, task: 'test4' })
        )
    ).toEqual([
        { id: 1, task: 'test4' },
        { id: 2, task: 'test2' },
        { id: 3, task: 'test3' },
    ])
})
