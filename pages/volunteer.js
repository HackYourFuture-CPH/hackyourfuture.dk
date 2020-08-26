import Head from 'next/head'
import Layout from '../components/layouts/layout'
import Content from '../components/layouts/content/content'
import Contactform from '../components/contact-form/contact-form'
import { MentorsTeam } from '../components/team/team'
import Partners from '../components/partners/partners'
import Curriculum from '../components/curriculum/curriculum'
import FAQ from '../components/faq/faq-mentors'
import { fetchPageContent } from '../contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default ({ content, title }) => (
  <Layout>
    <Head>
      <title>{title}</title>
    </Head>
    <Content>
      <div>{documentToReactComponents(content)}</div>
      <Curriculum />

      <h2 id='becoming-mentor'>Would you like to help?</h2>
      <Contactform email={'cph@hackyourfuture.net'} />
    </Content>

    <Content>
      <FAQ />
    </Content>

    <MentorsTeam id='mentors' />

    <Partners />
  </Layout>
)
export async function getStaticProps() {
  const pageContent = await fetchPageContent('4D9bygQz21rkPZtsRb8ccr')

  return {
    props: {
      title: pageContent.headline, content: pageContent.mainBody
    }
  }
}