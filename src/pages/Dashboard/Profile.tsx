import React from 'react'
import Info from '../../components/dashboard/Profile/Info'

type Props = {}

const Profile = (props: Props) => {
  return (
    <div className='grid grid-cols-1'>
      <Info cellphone='313 37423 23' email='cristian@gmail.com' name='Cristian' role='ADMIN' id={2} />
    </div>
  )
}

export default Profile