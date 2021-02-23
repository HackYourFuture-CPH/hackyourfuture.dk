import Head from 'next/head'
import Layout from '../components/layouts/layout'
import Hire from '../components/hire/Hire'
import styles from './../components/hire/hire.scss'
import { fetchPageContent } from '../contentful/contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export default ({ content, title }) => (
  <Layout>
    
    <Head>
      <title>{title}</title>
    </Head>

    <section className='hire'>
      <style jsx>{styles}</style>
      <div>{documentToReactComponents(content)}</div>
      <Hire />
    </section>
  </Layout>
)

export async function getStaticProps() {
  const pageContent = await fetchPageContent('72JSbjgf1uRWTMx25xYUnD')

  return {
    props: {
      title: pageContent.headline,
      content: pageContent.mainBody
    }
  }
}
