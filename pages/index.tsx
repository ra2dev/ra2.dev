import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import {getSortedPostsData} from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import {Sandpack} from '@codesandbox/sandpack-react'
import Image from 'next/image'
import '@codesandbox/sandpack-react/dist/index.css'

const code = `import {useState} from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  const onAdd = () => setCount(c => c + 1)
  return <h1>
    Hello Sandpack {count} 
    <button onClick={onAdd}>Add</button>
  </h1>
}`

const About = () => {
    return (
        <>
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
                    <div className='rounded-full block overflow-hidden flex' style={{filter: 'grayscale(100%)'}}>
                        <Image src='/me.jpg' width='170px' height='170px' />
                    </div>
                </div>
            </div>
            <div>
                <Sandpack
                    template='react'
                    files={{
                        '/App.js': code
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
