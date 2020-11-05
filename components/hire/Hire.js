import * as React from 'react'
import alumniList from './alumni.json'
import ItemCard from '../team/item-card/item-card'
import Content from '../layouts/content/content'
import styles from './hire.scss'
import id from 'uuid/v4'

class Hire extends React.Component {
  state = {
    uniqueSkills: [],
    selectedSkills: [],
    selectedStatus: [],
    uniqueStatuses: [],
    alumniList: alumniList.filter(alumni => {
      // Added condition to also filter profile which is not updated from last 6months 
      const todayDate = new Date()
      const dateToArray = alumni.lastUpdateDate.split('-')
      const formatedDateString = new Date(
        `${dateToArray[2]}-${dateToArray[1]}-${dateToArray[0]}`
      )
      return (
        alumni.status === 'looking for jobs' &&
        formatedDateString >
          new Date(todayDate.getTime() - 24 * 60 * 60 * 1000 * 182.5)
      )
    })
  }

  componentDidMount() {
    let skills = []
    let statuses = []
// Applying this to the original alumnilist
    alumniList.forEach(alumni => {
      skills = [...skills, ...alumni.skills]
      statuses = [...statuses, alumni.status]
    })

    this.setState({
      // get distinct unique items from an array
      uniqueSkills: [...new Set(skills)].sort((a, b) =>
        a.toLowerCase().localeCompare(b.toLowerCase())
      ),
      uniqueStatuses: [...new Set(statuses)].filter(
        skill => skill === 'looking for jobs'
      )
    })
  }

  doFiltering = () => {
    // by default: all alumni list
    let newAlumniList = alumniList.filter(
      alumni => {
        const todayDate = new Date()
        const dateToArray = alumni.lastUpdateDate.split('-')
        const formatedDateString = new Date(
          `${dateToArray[2]}-${dateToArray[1]}-${dateToArray[0]}`
        )
        return (
          alumni.status === 'looking for jobs' &&
          formatedDateString >
            new Date(todayDate.getTime() - 24 * 60 * 60 * 1000 * 182.5)
        )
      }
    )
    // if any filter by skills button is clicked, then filter by skills
    if (this.state.selectedSkills.length !== 0) {
      newAlumniList = newAlumniList.filter(alumni =>
        this.state.selectedSkills.every(s => alumni.skills.includes(s))
      )
    }
    if (this.state.selectedStatus.length !== 0) {
      newAlumniList = newAlumniList.filter(alumni =>
        this.state.selectedStatus.every(s => alumni.status === s)
      )
<<<<<<< HEAD
    }     
=======
    }
>>>>>>> parent of 77fcc43... added filter on newALumniList  not to show profiles which are not updated from last 6months when selected skills is empty
    this.setState({ alumniList: newAlumniList })
  }

  filterSkillsHandler = skill => {
    this.setState(
      state => ({
        selectedSkills: state.selectedSkills.includes(skill)
          ? state.selectedSkills.filter(i => i !== skill)
          : [...state.selectedSkills, skill]
      }),
      () => this.doFiltering()
    )
  }

  filterStatusesHandler = status => {
    this.setState(
      state => ({
        selectedStatus: state.selectedStatus.includes(status)
          ? state.selectedStatus.filter(i => i !== status)
          : [...state.selectedStatus, status]
      }),
      () => this.doFiltering()
    )
  }

  render = () => {
    const {
      alumniList,
      uniqueSkills,
      selectedSkills,
      uniqueStatuses,
      selectedStatus
    } = this.state
    return (
      <section className='hire'>
        <style jsx>{styles}</style>
        <h1>Find the right candidate</h1>
        <p>
          Meet the HackYourFuture alumni. Making a good match between our
          dedicated graduates and hiring companies is super important to us.
          <br />
          <br />
          We hope that this database will help you find your next favourite
          employee or colleague!
        </p>
        <div className='filters'>
          {/*FILTER BY SKILLS ---------------- */}
          <p>
            <strong>Select competency</strong>
          </p>
          {uniqueSkills.map(skill => {
            return (
              <button
                key={id()}
                onClick={() => this.filterSkillsHandler(skill)}
                className={`${
                  selectedSkills.includes(skill) ? 'active' : 'outlined'
                } filter`}
                color='primary'
                aria-label='Filter specific skills'
              >
                {skill}
              </button>
            )
          })}

          {/*FILTER BY STATUS ---------------- */}
          <p>
            <strong>Select status</strong>
          </p>
          {uniqueStatuses.map(status => {
            return (
              <button
                key={id()}
                onClick={() => this.filterStatusesHandler(status)}
                className={`${selectedStatus.includes(status) &&
                  'active'} filter`}
                color='primary'
                aria-label='Filter specific status'
              >
                {status}
              </button>
            )
          })}
        </div>

        <div className='team-members'>
          {alumniList.length > 0 ? (
            alumniList
              .sort((a, b) => a.name.localeCompare(b.name))
              .map(member => <ItemCard item={member} key={member.id} />)
          ) : (
            <div className='no-results'>
              <h3>No students found</h3>
              <p>Try change your search filter</p>
            </div>
          )}
        </div>
      </section>
    )
  }
}

export default Hire
