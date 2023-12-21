import { Model, tableSchema } from '@nozbe/watermelondb'
import { field, action } from '@nozbe/watermelondb/decorators'

import { NAMES, VERSIONS } from '../consts'

const MODAL = NAMES.todos

export const todoSchema = tableSchema({
    name: MODAL,
    columns: [
        { name: 'name', type: 'string' },
        { name: 'completed', type: 'boolean' },
    ],
})

export class TodoModel extends Model {
    static table = MODAL

    @field('name') name!: string
    @field('completed') completed!: boolean

    // @action async toggleCompleted() {
    //     await this.update(record => {
    //         record.completed = !record.completed
    //     })
    // }
}

export const todoMigration = {
    toVersion: VERSIONS.migration,
    steps: [],
}
