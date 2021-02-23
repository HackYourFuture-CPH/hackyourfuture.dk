import Head from 'next/head'
import Layout from '../components/layouts/layout'
import Content from '../components/layouts/content/content'
import { fetchPageContent } from '../contentful/contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export default ({ title, content, image }) => (
  <Layout>
    <Head>
      <title>{title}</title>
    </Head>

    <Content>
      <div>{documentToReactComponents(content)}</div>
    </Content>
    <Content>
      <div className='confirmation-page-img'>
        <img src={image.file.url} alt={image.title} />
      </div>
    </Content>
  </Layout>
)

export async function getStaticProps() {
  const pageContent = await fetchPageContent('cS3oLqB8DypN5oaN74EwW')

  return {
    props: {
      title: pageContent.title,
      content: pageContent.content,
      image: pageContent.image.fields
    }
  }
}
