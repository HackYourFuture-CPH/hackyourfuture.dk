import Head from 'next/head'
import Layout from '../components/layouts/layout'
import Content from '../components/layouts/content/content'
import Hero from '../components/hero/hero'
import VideoHighlight from '../components/video-highlight/video-highlight'
import FindUs from '../components/find-us/find-us'
import Partners from '../components/partners/partners'
import { Graduates } from '../components/team/team'
import { fetchPageContent } from '../contentful/contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import getEntryData from './../utils/utils'

export default ({ title, content, successStories }) => {
  return (
    <Layout>
      <Head>
        <meta
          name='google-site-verification'
          content='YvWW5A5Yye9vDijg-oTcYoggq9HkweFT-6J9d6xjnNA'
        />
        <title>{title}</title>
      </Head>
      <Hero />
      <Content>{documentToReactComponents(content)}</Content>
      <Graduates />
      <Partners />
      <VideoHighlight
        title={successStories.title}
        content={successStories.content}
      />
    </Layout>
  )
}

export async function getStaticProps() {
  const pageContent = await fetchPageContent('7FxhqeZITqO5lhHwvzAu47')

  const successStoriesId = '40NNt3OuP7s2tPGTg50BF5'
  const successStories = getEntryData(pageContent, successStoriesId)

  return {
    props: {
      title: pageContent.headline,
      content: pageContent.mainBody,
      successStories: {
        title: successStories.fields.title,
        content: successStories.fields.content
      }
    }
  }
}
