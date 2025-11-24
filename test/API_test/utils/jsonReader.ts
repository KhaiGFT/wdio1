import { promises as fs } from 'fs';

export async function JSON_Reader(filePath: string) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('❌ JSON read/parse error:', err);
        throw err;
    }
}