import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import {getSortedPostsData} from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { Sandpack } from "@codesandbox/sandpack-react";
import "@codesandbox/sandpack-react/dist/index.css";

const code = `export default function App() {
  return <h1>Hello Sandpack</h1>
}`;

const About = () => {
    return (
        <>
            <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white'>
                🚧 Site WIP v0.0.0-beta 🚧
            </h1>
            <br />
            <br />
            <br />
            <div className='flex flex-col-reverse sm:flex-row items-start'>
                <div className='flex flex-col pr-8'>
                    <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white'>
                        Raman Ramanouski
                    </h1>
                    <h2 className='text-gray-700 dark:text-gray-200 mb-4'>
                        Solution Architects at <span className='font-semibold'>EIS</span>
                    </h2>
                    <p className='text-gray-600 dark:text-gray-400 mb-16'>
                        Passionate about new technologies and long talks about the approach to programming.
                    </p>
                </div>

                <div className='w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto'>
                    <span
                        style={{
                            boxSizing: 'border-box',
                            display: 'inline-block',
                            overflow: 'hidden',
                            width: 'initial',
                            height: 'initial',
                            background: 'none',
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: 'relative',
                            maxWidth: '100%'
                        }}
                    >
                        <span
                            style={{
                                boxSizing: 'border-box',
                                display: 'block',
                                width: 'initial',
                                height: 'initial',
                                background: 'none',
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                                maxWidth: '100%'
                            }}
                        >
                            <img
                                alt='Raman Ramanouski'
                                aria-hidden='true'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTc2IiBoZWlnaHQ9IjE3NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4='
                                style={{
                                    display: 'block',
                                    maxWidth: '100%',
                                    width: 'initial',
                                    height: 'initial',
                                    background: 'none',
                                    opacity: 1,
                                    border: 0,
                                    margin: 0,
                                    padding: 0
                                }}
                            />
                        </span>
                        <div
                            className='rounded-full filter grayscale'
                            data-nimg='intrinsic'
                            style={{
                                position: 'absolute',
                                inset: 0,
                                boxSizing: 'border-box',
                                padding: 0,
                                border: 'none',
                                margin: 'auto',
                                display: 'block',
                                width: 0,
                                height: 0,
                                minWidth: '100%',
                                maxWidth: '100%',
                                minHeight: '100%',
                                maxHeight: '100%',
                                background: 'black'
                            }}
                        />
                    </span>
                </div>
            </div>
            <div>
                <Sandpack
                    template="react"
                    files={{
                        "/App.js": code,
                    }}
                />
            </div>
        </>
    )
}

export default function Home({allPostsData}) {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section>
                <About />
                <ul>
                    {allPostsData.map(({id, date, title}) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}
