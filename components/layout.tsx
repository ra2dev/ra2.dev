import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Placeholder Site v0.0.1-beta.1 🚧'
export const siteTitle = 'Next.js Sample Website'

const ProtoLogo = () => (
    <svg
        className='w-full fill-current'
        xmlns='http://www.w3.org/2000/svg'
        data-name='Rebelious'
        viewBox='0 0 1412 742'
    >
        <path
            fill='currentColor'
            d='M154.89,742H83.81V448.38H71.08V742H0V0H119.88q14.85,0,24.93,10.07T154.89,35V328.6A35.62,35.62,0,0,1,144.81,354a33,33,0,0,1-24.93,10.6H71.08v12.72h48.8A33,33,0,0,1,144.81,388a35.62,35.62,0,0,1,10.08,25.44ZM71.08,293.62H83.81V71H71.08Z'
            transform='translate(0 0)'
        />
        <path
            fill='currentColor'
            d='M322.77 742 167.88 742 167.88 0 322.77 0 322.77 322.24 251.69 322.24 251.69 71.02 238.96 71.02 238.96 334.96 322.77 334.96 322.77 405.98 238.96 405.98 238.96 670.98 251.69 670.98 251.69 419.76 322.77 419.76 322.77 742z'
        />
        <path
            fill='currentColor'
            d='M454.64,742H334.76V0H454.64a33,33,0,0,1,24.93,10.6A35.62,35.62,0,0,1,489.65,36V329.66q0,14.83-10.08,24.91t-24.93,10.07h-48.8v13.78h48.8q14.87,0,24.93,10.07t10.08,24.91V707q0,14.84-10.08,24.91T454.64,742Zm-48.8-71h12.73V449.44H405.84Zm0-377.36h12.73V71H405.84Z'
            transform='translate(0 0)'
        />
        <path
            fill='currentColor'
            d='M657.53 742 502.64 742 502.64 0 657.53 0 657.53 322.24 586.46 322.24 586.46 71.02 573.72 71.02 573.72 334.96 657.53 334.96 657.53 405.98 573.72 405.98 573.72 670.98 586.46 670.98 586.46 419.76 657.53 419.76 657.53 742z'
        />
        <path
            fill='currentColor'
            d='M825.41 742 670.52 742 670.52 0 741.61 0 741.61 670.98 754.34 670.98 754.34 377.36 825.41 377.36 825.41 742z'
        />
        <path fill='currentColor' d='M838.41 0 909.36 0 909.36 742 838.41 742 838.41 0z' />
        <path
            fill='currentColor'
            d='M956.36,742q-14.85,0-24.93-10.07T921.35,707V35q0-14.83,10.08-24.91T956.36,0h84.87q14.85,0,24.93,10.07T1076.24,35V707q0,14.84-10.08,24.91T1041.23,742Zm36.07-71h12.73V71H992.43Z'
            transform='translate(0 0)'
        />
        <path
            fill='currentColor'
            d='M1124.24,742q-14.85,0-24.93-10.07T1089.23,707V0h71.08V671H1173V0h71.08V707q0,14.84-10.08,24.91T1209.11,742Z'
            transform='translate(0 0)'
        />
        <path
            fill='currentColor'
            d='M1292.12,742q-14.85,0-24.93-10.07T1257.11,707V419.76h71.08V671h12.73V406h-48.8q-14.85,0-24.93-10.07T1257.11,371V35q0-14.83,10.08-24.91T1292.12,0H1377q14.85,0,24.93,10.07T1412,35V322.24h-71.08V71h-12.73V335H1377a33,33,0,0,1,24.93,10.6A35.62,35.62,0,0,1,1412,371V707q0,14.84-10.08,24.91T1377,742Z'
            transform='translate(0 0)'
        />
    </svg>
)

export default function Layout({children, home}) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel='icon' href='/favicon.ico' />
                <meta name='description' content='Placeholder site' />
                <meta
                    property='og:image'
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name='og:title' content={siteTitle} />
                <meta name='twitter:card' content='summary_large_image' />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <ProtoLogo />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href='/'>
                            <a>
                                <Image
                                    priority
                                    src='/images/profile.jpg'
                                    className={utilStyles.borderCircle}
                                    height={108}
                                    width={108}
                                    alt={name}
                                />
                            </a>
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href='/'>
                                <a className={utilStyles.colorInherit}>{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <menu></menu>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href='/'>
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    )
}
