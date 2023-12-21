import { Model, tableSchema } from '@nozbe/watermelondb'
import { field, action } from '@nozbe/watermelondb/decorators'

import { NAMES, VERSIONS } from '../consts'

const MODAL = NAMES.homeTimeline

export const homeTimelineSchema = tableSchema({
    name: MODAL,
    columns: [
        { name: 'name', type: 'string' },
        { name: 'completed', type: 'boolean' },
    ],
})

export class HomeTimelineModel extends Model {
    static table = MODAL

    @field('name') name!: string
    @field('completed') completed!: boolean

}

export const homeTimelineMigration = {
    toVersion: VERSIONS.migration,
    steps: [],
}
