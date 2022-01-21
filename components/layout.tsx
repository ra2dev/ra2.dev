import Head from 'next/head'
import cn from 'classnames'
import {useEffect, useState} from 'react'
import NextLink from 'next/link'
import {useRouter} from 'next/router'
import MobileMenu from './MobileMenu'
import Footer from './Footer'

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

const GoogleTags = () => {
    return (
        <>
            <script async src='https://www.googletagmanager.com/gtag/js?id=G-BFQYJV20GB' />
            <script
                dangerouslySetInnerHTML={{
                    __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-BFQYJV20GB');`
                }}
            />
        </>
    )
}
const useTheme = (mounted?: boolean) => {
    const isDarkThem = mounted && document?.documentElement?.className?.includes('dark')
    const toggleTheme = () => {
        document.documentElement.classList.toggle('dark')
        document.documentElement.classList.toggle('light')
    }
    return {isDarkThem, toggleTheme}
}

function NavItem({href, text}) {
    const router = useRouter()
    const isActive = router.asPath === href

    return (
        <NextLink href={href}>
            <a
                className={cn(
                    isActive
                        ? 'font-semibold text-gray-800 dark:text-gray-200'
                        : 'font-normal text-gray-600 dark:text-gray-400',
                    'hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'
                )}
            >
                <span className='capsize'>{text}</span>
            </a>
        </NextLink>
    )
}

const ThemeBtn = () => {
    const [mounted, setMounted] = useState(false)
    const {isDarkThem, toggleTheme} = useTheme()

    useEffect(() => setMounted(true), [])
    return (
        <button
            aria-label='Toggle Dark Mode'
            type='button'
            className='w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all'
            onClick={toggleTheme}
        >
            {mounted && (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    className='w-5 h-5 text-gray-800 dark:text-gray-200'
                >
                    {isDarkThem ? (
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                        />
                    ) : (
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                        />
                    )}
                </svg>
            )}
        </button>
    )
}

const Logo = ({className}) => {
    return (
        <div
            className={cn('text-white p-1 pr-8 bg-gray-900 dark:text-gray-800 dark:bg-gray-300 rounded-sm', className)}
        >
            <svg viewBox='173.747 85.849 60.823 67.68' className='h-10'>
                <path
                    stroke='null'
                    d='M 214.015 97.13 L 227.843 97.13 L 227.843 305.135 L 201.162 305.135 L 201.162 97.13 L 214.015 97.13 Z'
                    fill='currentColor'
                    id='svg_5'
                    transform='matrix(0.332723, 0, 0, 0.324777, 158.760773, 54.381058)'
                />
                <rect
                    stroke='null'
                    id='svg_1'
                    height='19.864'
                    width='48.635'
                    y='249.364'
                    x='110.949'
                    fill='currentColor'
                    transform='matrix(0.332723, 0, 0, 0.324777, 158.760773, 54.381058)'
                />
                <path
                    stroke='null'
                    d='m103.28829,304.93573l-26.73065,0l0,-82.31063l-4.7873,0l0,82.31063l-26.73065,0l0,-208.00519l45.0826,0q5.58456,0 9.37528,2.82293t3.79073,6.98864l0,82.30502a13.39541,9.98537 0 0 1 -3.79073,7.12039a12.41012,9.2509 0 0 1 -9.37528,2.9715l-18.35194,0l0,3.5658l18.35194,0a12.41012,9.2509 0 0 1 9.37528,2.99393a13.39541,9.98537 0 0 1 3.79073,7.13161l0,92.10537l-0.00001,0zm-31.51795,-125.69457l4.7873,0l0,-62.40716l-4.7873,0l0,62.40716z'
                    fill='currentColor'
                    id='svg_6'
                    transform='matrix(0.332723, 0, 0, 0.324777, 158.760773, 54.381058)'
                />
                <path
                    stroke='null'
                    d='m120.68368,304.89661q-5.58456,0 -9.37528,-2.82293t-3.79073,-6.98864l0,-198.19363l26.73065,0l0,188.10173l4.77226,0l0,-188.10173l26.73065,0l0,198.19363q0,4.1601 -3.79073,6.98303t-9.36024,2.82853l-31.91658,0l0,0.00001z'
                    fill='currentColor'
                    id='svg_8'
                    transform='matrix(-0.332723, 0, 0, -0.324777, 249.683329, 184.871928)'
                />
                <path
                    stroke='null'
                    d='M 182.775 97.274 L 196.603 97.274 L 196.603 305.279 L 169.922 305.279 L 169.922 97.274 L 182.775 97.274 Z'
                    fill='currentColor'
                    id='path-1'
                    transform='matrix(0.332723, 0, 0, 0.324777, 158.760773, 54.381058)'
                />
            </svg>
        </div>
    )
}

export default function Layout({children}) {
    return (
        <div className='dark:bg-gray-900 bg-white transition duration-500'>
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
                <GoogleTags />
            </Head>
            <div className='flex flex-col justify-center px-8'>
                <nav className='flex items-center justify-between w-full relative max-w-4xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16  text-gray-900  bg-opacity-60 dark:text-gray-100'>
                    <div className='ml-[-0.60rem] visible md:hidden'>
                        <MobileMenu />
                    </div>
                    <Logo className='hidden md:inline-block' />
                    <div className='ml-[-0.60rem]'>
                        <NavItem href='/' text='Home' />
                        <NavItem href='/blog' text='Blog' />
                        <NavItem href='/snippets' text='Snippets' />
                        <NavItem href='/about' text='About' />
                    </div>
                    <ThemeBtn />
                </nav>
            </div>
            <main className='flex flex-col justify-center px-8'>
                <div className='max-w-2xl mx-auto pb-16'>
                    {children}
                    <Footer />
                </div>
            </main>
        </div>
    )
}
//
// export default function Layout({children, home}) {
//     return (
//         <div className={styles.container}>
//             <Head>
//                 <link rel='icon' href='/favicon.ico' />
//                 <meta name='description' content='Placeholder site' />
//                 <meta
//                     property='og:image'
//                     content={`https://og-image.vercel.app/${encodeURI(
//                         siteTitle
//                     )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
//                 />
//                 <meta name='og:title' content={siteTitle} />
//                 <meta name='twitter:card' content='summary_large_image' />
//                 <GoogleTags />
//             </Head>
//             <header className={styles.header}>
//                 {home ? (
//                     <>
//                         <ProtoLogo />
//                         <h1 className={utilStyles.heading2Xl}>{name}</h1>
//                     </>
//                 ) : (
//                     <>
//                         <Link href='/'>
//                             <a>
//                                 <Image
//                                     priority
//                                     src='/images/profile.jpg'
//                                     className={utilStyles.borderCircle}
//                                     height={108}
//                                     width={108}
//                                     alt={name}
//                                 />
//                             </a>
//                         </Link>
//                         <h2 className={utilStyles.headingLg}>
//                             <Link href='/'>
//                                 <a className={utilStyles.colorInherit}>{name}</a>
//                             </Link>
//                         </h2>
//                     </>
//                 )}
//             </header>
//             <menu>
//                 <div className=''></div>
//             </menu>
//             <main>{children}</main>
//             {!home && (
//                 <div className={styles.backToHome}>
//                     <Link href='/'>
//                         <a>← Back to home</a>
//                     </Link>
//                 </div>
//             )}
//         </div>
//     )
// }
