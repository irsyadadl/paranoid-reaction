import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Paranoid React by @irsyadadl</title>
                <meta name='description' content='Generated by create next app' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Belajar <a href='https://parsinta.com/s/en0KN?ref=paranoid-reaction.vercel.app'>React</a> Dari Awal
                </h1>

                <div className={styles.description}>
                    <p>
                        Created by{' '}
                        <a target='_blank' rel='noreferrer' href='https://twitter.com/irsyadadl'>
                            @irsyadadl
                        </a>{' '}
                        for{' '}
                        <a target='_blank' rel='noreferrer' href='https://parsinta.com'>
                            Parsinta
                        </a>{' '}
                        react course.
                    </p>
                    <code className={styles.code}>
                        <a href='https://paranoid-reaction.vercel.app/api/users' target='_blank' rel='noopener noreferrer'>
                            users
                        </a>
                        <span style={{ margin: '0 10px' }}>||</span>
                        <a href='https://paranoid-reaction.vercel.app/api/users/10' target='_blank' rel='noopener noreferrer'>
                            users/10
                        </a>
                    </code>
                </div>
            </main>
        </div>
    );
}
