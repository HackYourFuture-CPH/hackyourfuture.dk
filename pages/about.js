import Head from 'next/head'
import marked from 'marked'
import Layout from '../components/layouts/layout'
import Content from '../components/layouts/content/content'
import Map from '../components/map'
import Contactform from '../components/contact-form/contact-form'
import { BoardMembers, CoreTeam } from '../components/team/team'
import Partners from '../components/partners/partners'
import Supporters from '../components/supporters/supporters'
import Sponsors from '../components/sponsors/sponsors'
import Mission from '../components/mission/mission'
import Vision from '../components/vision/vision'
import Press from '../components/press/press'
import Values from '../components/values/values'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { fetchPageContent } from '../contentful/contentful'
import getEntryData from './../utils/utils'

export default ({
  content,
  title,
  contactTitle,
  contactBody,
  missionTitle,
  missionContent,
  visionTitle,
  visionContent
}) => {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>

      <Content>
        <div>{documentToReactComponents(content)}</div>
      </Content>

      <Content id='contact'>
        <h2>{contactTitle}</h2>
        <div>{documentToReactComponents(contactBody)}</div>
        <Contactform email={'cph@hackyourfuture.dk'} />
        <div style={{ marginTop: 40 }}>
          <Map />
        </div>
      </Content>

      <BoardMembers />
      <CoreTeam />
      <Press />
      <Sponsors />
      <Partners />
      <Supporters />
      <Vision title={visionTitle} content={visionContent} />
      <Mission title={missionTitle} content={missionContent} />
      <Values />
    </Layout>
  )
}

export async function getStaticProps() {
  const pageContent = await fetchPageContent('3VD8j3TGv3H66fVLrHGWuC')

  const contactContentId = '57BmNlPMn5pBZBBvPNIoLC'
  const contactContent = getEntryData(pageContent, contactContentId)

  const missionId = '78n7xxaJslhhZgyfenKIfY'
  const mission = getEntryData(pageContent, missionId)

  const visionId = '2fFr5cVrIsqSHp3Y5s0qkz'
  const vision = getEntryData(pageContent, visionId)

  return {
    props: {
      title: pageContent.headline,
      content: pageContent.mainBody,
      contactTitle: contactContent.fields.title,
      contactBody: contactContent.fields.bodyText,
      missionTitle: mission.fields.title,
      missionContent: mission.fields.content,
      visionTitle: vision.fields.title,
      visionContent: vision.fields.content
    }
  }
}
