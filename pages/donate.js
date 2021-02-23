import Head from 'next/head'
import Layout from '../components/layouts/layout'
import Content from '../components/layouts/content/content'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { fetchPageContent } from '../contentful/contentful'

export default ({ title, supportOurWork, becomeCompanyMember }) => (
  <Layout>
    <Head>
      <title>{title}</title>
    </Head>
    <Content>
      <style global jsx>
        {`
          .donate li {
            font-size: 18px;
            list-style: inside;
          }
          .donate li p {
            display: inline-block;
          }
        `}
      </style>
      <div className='donate'>{documentToReactComponents(supportOurWork)}</div>
    </Content>
    <Content>
      <div className='donate'>
        {documentToReactComponents(becomeCompanyMember)}
      </div>
      {/* "Gold partners" > 100.000 kr
"Silver partners" > 30.000 kr
"Bronze partners" < 30.000 kr */}
    </Content>
  </Layout>
)

export async function getStaticProps() {
  const pageContent = await fetchPageContent('4euxs6laNQPt3UiRYfGI7T')

  return {
    props: {
      title: pageContent.title,
      supportOurWork: pageContent.supportOurWork,
      becomeCompanyMember: pageContent.becomeCompanyMember
    }
  }
}
