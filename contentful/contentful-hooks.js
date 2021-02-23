import { useState, useEffect } from 'react'
import { client } from './contentful'

export const useContentfulContentType = (contentType) => {
    let [content, setContent] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        async function fetchData() {
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
        fetchData()
    }, [])
    return { content, error }
}

export const useContentfulEntryId = (entryId) => {
    let [content, setContent] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        async function fetchData() {
            try {
                const entry = await client.getEntry(entryId)
                const content = await entry.fields
                setContent(content)
            }
            catch (error) {
                setError(error)
            }
        }
        fetchData()
    }, [])
    return { content, error }
}

export const useContentfulLinkedContent = (contentType, entryId) => {
    let [content, setContent] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        async function fetchData() {
            try {
                const { items } = await client.getEntries({
                    content_type: contentType,
                    'sys.id': entryId
                })
                setContent(items[0].fields.entries)
            }
            catch (error) {
                setError(error)
            }
        }
        fetchData()
    }, [])
    return { content, error }
}