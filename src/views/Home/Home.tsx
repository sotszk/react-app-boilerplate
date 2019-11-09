import React, { FC, Suspense, useEffect, useState } from 'react'
import styles from './Home.module.css'

type Data = {
  hello: string
}

const Home: FC = () => {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    fetch('http://www.mocky.io/v2/5dc664e33800002f00cdeb61').then(response =>
      setData(response),
    )
  }, [data])

  return (
    <div className={styles.module}>
      <h1 className={styles.title}>Home</h1>
      <Suspense fallback={<div>loading...</div>}>
        <Comp data={data} />
      </Suspense>
    </div>
  )
}

type CompProps = {
  data: any
}

const Comp: FC<CompProps> = props => {
  return <>{props.data && <span>response: {props.data.hello}</span>}</>
}

export default Home
