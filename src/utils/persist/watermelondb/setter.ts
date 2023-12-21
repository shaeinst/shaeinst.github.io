import { appSchema } from '@nozbe/watermelondb'
import { schemaMigrations } from '@nozbe/watermelondb/Schema/migrations'

import { VERSIONS } from './consts'
import { todoMigration, TodoModel, todoSchema } from './models/todoModel'

const schema = appSchema({
    version: VERSIONS.schema,
    tables: [
        //
        todoSchema,
    ],
})

const MODELS: (typeof TodoModel)[] = [
    //
    TodoModel,
]

const migrations = schemaMigrations({
    migrations: [
        //
        todoMigration,
    ],
})

export { schema, MODELS, migrations }
