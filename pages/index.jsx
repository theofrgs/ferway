import Header from '../components/Header';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, { useRef, useEffect, useState } from 'react';
import SlidingHorizontalScroll from '../components/SlidingHorizontalScroll';

export default function Home() {

    const [items, setItems] = useState([{
        title: 'My first list',
        cards:
            [
                {
                    title: 'My first card',
                    description: "",
                    folow: false
                },
                {
                    title: 'My second card',
                    description: "",
                    folow: false
                },
                {
                    title: 'Folowed card',
                    description: "",
                    folow: true
                }]
    }, {
        title: 'My second list',
        cards:
            [
                {
                    title: 'Followed card with description',
                    description: 'My first description',
                    folow: true
                }]
    }]);

    function init() {
        console.log('init');
        setItems([{
            title: 'My first list',
            cards:
                [
                    {
                        title: 'My first card',
                        description: "",
                        folow: false
                    },
                    {
                        title: 'My second card',
                        description: "",
                        folow: false
                    },
                    {
                        title: 'Folowed card',
                        description: "",
                        folow: true
                    }]
        }, {
            title: 'My second list',
            cards:
                [
                    {
                        title: 'Followed card with description',
                        description: 'My first description',
                        folow: true
                    }]
        }])
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />

            <main>
                <div className={styles.titleContainer}> {/* Added container */}
                    <h8 className={styles.title} style={{fontSize: '1.3rem'}}>
                        Tableau principal
                    </h8>
                    <h2 className={styles.title}>
                        <button className={styles.button} onClick={() => init()}>Initialiser le jeux de données</button> {/* Added button */}
                    </h2>
                </div>
                <SlidingHorizontalScroll itemList={items} setItems={setItems} />
            </main>

            <style jsx>{`
        main {
          padding: 0.5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          margin-left: 0px;
          align-items: left;
        }
      `}</style>

            <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
        </div>
    )
}
