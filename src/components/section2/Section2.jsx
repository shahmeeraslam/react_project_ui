import React from 'react'
import Navbar from '../section1 /nav/Navbar'
import Herocard from '../section1 /herosection/Herocard'
import Herosection from '../section1 /herosection/Herosection'
import Aboutus from './Aboutus'

const Section2 = (props) => {
  console.log(props.user)
  return ( 
    <div id='About' className='h-screen  bg-black flex flex-col justify-between relative '>
      <div className='md:flex  hidden md:flex-wrap gap-2.5 w-full justify-center absolute bottom-180  '>
        {props.user1.map(( data , index ) => (
          <Herocard 
             key ={index}
             icon={data.icon}
             title={data.title}
             color={data.color}
             bg={data.bg}
             description ={data.description}
          />
        ))}
      </div>
            <div className='flex  md:hidden flex-wrap gap-2.5 w-full justify-center absolute bottom-160  '>
        {props.user2.map(( data , index ) => (
          <Herocard 
             key ={index}
             icon={data.icon}
             title={data.title}
             color={data.color}
             bg={data.bg}
             description ={data.description}
          />
        ))}
      </div>
        <div>
          <Aboutus />
        </div>
    </div>
  )
}

export default Section2
