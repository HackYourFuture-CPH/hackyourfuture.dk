import Head from 'next/head'
import styles from '../components/layouts/donate.scss'
import Layout from '../components/layouts/layout'
import { fetchPageContent } from '../contentful/contentful'
import DonateBox from '../components/donate/DonateBox'
import DonationGoal from '../components/donate/DonationGoal'
import Partnerships from '../components/partnerships/Partnerships'
export default ({ title, supportOurWork, becomeCompanyMember }) => (
  <Layout>
    <Head>
      <title>{title}</title>
    </Head>
    <style global jsx>
      {`
          .donate li {
            font-size: 18px;
            list-style: inside;
          }
          .donate li p {
            display: inline-block;
          }
          #association-member {
            max-width: 80%;
            margin: 4em auto 2em auto;
            background-size: contain;
            background-color: #F2F2F2;
          }
          .private-membership-icon {
            border-radius: 20px;
            width: 25%;
            height: auto;
            margin: -2em 0 0 -2em;
            vertical-align: top;
          }
          .private-membership-icon::before {
            content:"Private member";
            display: block;
            color:#fff;
          }
          #association-member > article {
            padding: 2em;
            box-sizing: border-box;
            margin: 0;
            background: none;
            display: inline-block;
            max-width:75%;
          }
          #association-member > article > h3 {
            margin-bottom: 1em;
            font-size: 1.75rem;
            line-height: 2.25rem;
          }
          .private-membership-icon-label {
            margin-bottom: 0;
            color: #fff;
            z-index: 9999;
          }
          .donate-cover-end {
            margin-top: 3em;
          }
          @media screen and (max-width: 768px) {
            #association-member {
              max-width: 100%;
              background-size: 220%;
              background-position: center center;
              margin: 2em 0;
              // padding: 9em 3em;
              box-shadow: none;
            }
            #association-member > article {
              transform: scale(1);
            }
          }
        `}
    </style>
    <style jsx>{styles}</style>
    <section className="donate-header">
      <div className="donate-cover">

        <DonateBox>
          {supportOurWork}
        </DonateBox>

      </div>
    </section>
    <DonationGoal />
    <img src="/static/images/donate_splitter.jpg" id="partnerships" />
    <Partnerships>{becomeCompanyMember}</Partnerships>
    <img src="/static/images/donate_endcover.jpg" className="donate-cover-end" />

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
