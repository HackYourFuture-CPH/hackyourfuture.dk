import React from 'react'
import members from './team.json'
import ItemCard from './item-card/item-card'
import styles from './team.scss'
import alumniList from '../hire/alumni.json'

//styling

export const CoreTeam = () => {
  const coreTeam = members.filter(member => member.roles.includes('core'))
  return (
    <>
      <style jsx>{styles}</style>
      <h2 className='title'>Core team</h2>
      <div className='team-members core-team'>
        {coreTeam.map(member => (
          <ItemCard item={member} key={member.id} showHiredOverlay={false} />
        ))}
      </div>
    </>
  )
}

export const BoardMembers = () => {
  const boardMembers = members.filter(member =>
    member.roles.includes('boardmember')
  )
  return (
    <>
      <style jsx>{styles}</style>
      <h2 className='title'>Board members</h2>
      <div className='team-members core-team'>
        {boardMembers.map(boardMember => (
          <ItemCard
            item={boardMember}
            key={boardMember.id}
            showHiredOverlay={false}
          />
        ))}
      </div>
    </>
  )
}

export const MentorsTeam = () => {
  const mentors = members.filter(member => member.roles.includes('mentor'))
  return (
    <>
      <style jsx>{styles}</style>
      <h2 className='title'>Our Mentors</h2>
      <div className='team-members mentors'>
        {mentors
          .sort((a, b) => a.name.localeCompare(b.name)) // sort names alphabetically
          .map(member => (
            <ItemCard item={member} key={member.id} showHiredOverlay={false} />
          ))}
      </div>
    </>
  )
}

export const Graduates = () => {
  const highlightedAlumniInCompany = alumniList.filter(alumni => alumni.company)
  return (
    <>
      <style jsx>{styles}</style>
      <h2 className='title'>Meet our Graduates</h2>
      <div className='team-members employed-alumni'>
        {highlightedAlumniInCompany
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(member => (
            <ItemCard item={member} key={member.id} showHiredOverlay={false} />
          ))}
      </div>
    </>
  )
}

export default () => {
  return (
    <div>
      <BoardMembers />
      <CoreTeam />
      <MentorsTeam />
      <Graduates />
    </div>
  )
}
