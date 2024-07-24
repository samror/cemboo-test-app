import React from 'react'
import Hero from './Hero'
import Top20 from './Top20'
import Top10InIndiaDaily from './Top10InIndiaDaily'

const WorkSpace: React.FC<{setNavOpened: any}> = ({setNavOpened}) => {
  return (
    <div className='w-screen h-fit flex justify-end'>
      <div className="lg:w-11/12 w-full">
        <Hero setNavOpened={setNavOpened} />
        <Top20 />
        <Top10InIndiaDaily />
      </div>
    </div>
  )
}

export default WorkSpace
