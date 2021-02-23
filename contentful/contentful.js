import { createClient } from 'contentful'

export const client = createClient({
    space: process.env.CTF_SPACE_ID,
    accessToken: process.env.CTF_ACCESS_TOKEN
})

// FETCH ENTRIES
// by entry ID
async function fetchEntry(entryId) {
    const { fields } = await client.getEntry(entryId)
    if (fields) return fields
    else console.log(`error fetching content`)
}

// by content type
async function fetchEntries(contentType) {
    const { items } = await client.getEntries({
        content_type: contentType,
        order: 'fields.id'
    })
    if (items) return items
    else console.log(`error fetching content`)
}

// PAGES
export async function fetchPageContent(pageId) {
    const content = await fetchEntry(pageId)
    return content
}