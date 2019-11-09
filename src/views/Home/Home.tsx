import React, { FC } from 'react'
import styles from './Home.module.css'

import { useFetch } from 'react-hooks-async'

type UserInfoProps = {
  id: string
}

const UserInfo: FC<UserInfoProps> = ({ id }) => {
  const url = `https://qiita.com/api/v2/users/${id}`
  const { pending, error, result, abort } = useFetch(url)
  if (pending) {
    return (
      <div>
        Loading...<button onClick={abort}>Abort</button>
      </div>
    )
  }
  if (error) {
    return (
      <div>
        Error: {error.name} {error.message}
      </div>
    )
  }

  console.log(result)

  return (
    <div>
      <div>Name: {result.name}</div>
      <img
        src={result.profile_image_url}
        alt={result.description}
        width="100"
      />
    </div>
  )
}

const Home: FC = () => {
  return (
    <div className={styles.module}>
      <h1 className={styles.title}>Home</h1>
      <UserInfo id={'SotaSuzuki'} />
    </div>
  )
}

export default Home
