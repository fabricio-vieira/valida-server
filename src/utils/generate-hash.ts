import { hash } from 'bcryptjs'

export const generateHash = async (payload: string) => {
    return await hash(payload, 10)
}