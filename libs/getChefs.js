import path from 'path'
import { promises as fs } from 'fs'


export async function getChefs() {
    const filePath = path.join(process.cwd(), './mock/chefs.json')
   return JSON.parse(await fs.readFile(filePath, 'utf8'))
 }