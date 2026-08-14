import fs from 'fs'

const html = fs.readFileSync(process.argv[2], 'utf8')
const matches = [...html.matchAll(/payloadcms\/[^"'\\]+\.(webp|png|jpg|jpeg)/gi)].map(m => m[0])
console.log([...new Set(matches)].join('\n'))
