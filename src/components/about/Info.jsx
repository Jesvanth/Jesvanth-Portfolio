import React from 'react'

const info = () => {
  return (
      <div className='about__info grid'>
          <div className='about__box'>
            <i className='bx bx-award about__icon'></i>
            <h3 className='about__title'>4th Year Student</h3>
            <span className='about__subtitle'>Computer Science Engineering with Specilization in Business Analytics</span>
          </div>

          <div className='about__box'>
            <i className='bx bx-briefcase-alt about__icon'></i>
            <h3 className='about__title'>Completed</h3>
            <span className='about__subtitle'>10+ Projects</span>
          </div>

          <div className='about__box'>
            <i className='bx bx-support about__icon'></i>
            <h3 className='about__title'>Experience</h3>
            <span className='about__subtitle'>5+ Intern</span>
          </div>
      </div>
      
        
  )
}

export default info