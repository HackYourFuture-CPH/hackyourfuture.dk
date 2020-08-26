import { useState, useEffect } from 'react'
import { client } from './contentful'

export const useContentfulContentType = (contentType) => {
    let [content, setContent] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        async function fetchContentfulContent() {
            try {
                const entries = await client.getEntries({
                    content_type: contentType,
                    order: 'fields.id'
                })
                const contentList = await entries.items
                setContent(contentList)
            }
            catch (error) {
                setError(error)
            }
        }
        fetchContentfulContent()
    }, [])
    return { content, error }
}

export const useContentfulEntryId = (entryId) => {
    let [content, setContent] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        async function fetchContentfulContent() {
            try {
                const entry = await client.getEntry(entryId)
                const content = await entry.fields
                setContent(content)
            }
            catch (error) {
                setError(error)
            }
        }
        fetchContentfulContent()
    }, [])
    return { content, error }
}