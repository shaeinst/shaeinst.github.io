import { database } from "."
import { KEYS } from "./consts"

type KeyType = (typeof KEYS)[keyof typeof KEYS]

const get = async <T>(key: KeyType): Promise<T> => {
    return database.localStorage.get(key).then((value: any) => {
        const _data: T = JSON.parse(value)
        return _data
    })
}

const set = async <T>({ key, value }: { key: KeyType; value: T }): Promise<boolean> => {
    // return true on sucessfully saving token on storage else return false
    return database.localStorage
        .set(key, JSON.stringify(value))
        .then(() => true)
        .catch(() => false)
}

const remove = async (key: KeyType): Promise<boolean> => {
    // return true on sucessfully removing token from storage else return false
    return database.localStorage
        .remove(key)
        .then(() => true)
        .catch(() => false)
}

export const localStorage = { get, set, remove, KEYS }
