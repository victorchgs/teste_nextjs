import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [user, setUser] = useState('');
  const [infoList, setInfoList] = useState([])

  const handleSearch = async () => {
    if(user !== ''){
      const result = await fetch(`https://api.github.com/users/${user}`);
      const data = await result.json();
      setInfoList(data)
    }
  }

  return (
    <div className={styles.container}>

      <Head>
        <title>GitIndex</title>
        <meta name="description" content="Generated by create next app"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Insira o nome de usuário <br/> a ser buscado
        </h1>

        <input className={styles.input} type="text" value={user} onChange={e=>setUser(e.target.value)}></input>

        <button className={styles.button} onClick={handleSearch}>Buscar</button>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>ID do usuário:</h2>
            <p>{infoList.id}</p>
          </div>

          <div className={styles.card}>
            <h2>Nome do usuário:</h2>
            <p>{infoList.name}</p>
          </div>

          <div className={styles.card}>
            <h2>Nacionalidade:</h2>
            <p>{infoList.location}</p>
          </div>

          <div className={styles.card}>
            <h2>E-mail para contato:</h2>
            <p>{infoList.email}</p>
          </div>

          <a href={`https://twitter.com/${infoList.twitter_username}`} target={'_blank'} className={styles.card}>
              <h2>Usuário no Twitter:</h2>
              <p>{infoList.twitter_username}</p>
          </a>

          <a href={`https://github.com/${user}`} target={'_blank'} className={styles.card}>
              <h2>Acesso ao GitHub:</h2>
              <p>{infoList.html_url}</p>
          </a>

          <div className={styles.card}>
            <h2>Bio do usuário:</h2>
            <p>{infoList.bio}</p>
          </div>
        </div>
      </main>
    </div>
  )
}
