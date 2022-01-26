import '../styles/global.css'
import {withPasswordProtect} from '@storyofams/next-password-protect'
import { LoginComponent } from '../components/LoginPage'

function App({Component, pageProps}) {
    return <Component {...pageProps} />
}

export default withPasswordProtect(App, {
    loginComponent: LoginComponent,
    // Options go here (optional)
    loginApiUrl: '/api/login'
})
