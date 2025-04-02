import React from 'react';
import AboutIntro from '../components/hero2';
import OurMission from '../components/mission';
import OurVision from '../components/vision';
import OurTeam from '../components/team';

function page() {
  return (
    <div className='mt-20 w-full'>
        <AboutIntro/>
        <OurMission/>
        <OurVision/>
        <OurTeam/>
    </div>
  )
}

export default page