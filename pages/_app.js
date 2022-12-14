import '../styles/globals.css'
import '../styles/images/icons/favicon.ico'
import '../styles/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import '../styles/fonts/iconic/css/material-design-iconic-font.min.css'
import '../styles/vendor/animate/animate.css'
import '../styles/vendor/css-hamburgers/hamburgers.min.css'
import '../styles/vendor/animsition/css/animsition.min.css'
import '../styles/vendor/select2/select2.min.css'
import '../styles/vendor/daterangepicker/daterangepicker.css'
import '../styles/css/util.css'
import '../styles/css/main.css'
import '../styles/theme.css'
import "../styles/bootstrap/css/bootstrap.min.css"
import '../styles/userNavbar.css'
import '../styles/userFooter.css'
import "../styles/fonts/fontawesome-all.min.css"
import "../styles/fonts/font-awesome.min.css"
import "../styles/pagination.css"
import "../styles/userTestimonial.css"
import "../styles/user.css"
import { useRouter } from 'next/router'
import LayoutDev from '../layout/dev/LayoutDev'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  if (router.pathname.startsWith('/')) {
    return (
      <LayoutDev>
        <Component {...pageProps} />
      </LayoutDev>
    )
  }
  else {
    return <RecoilRoot> <Component {...pageProps} /> </RecoilRoot>

  }
}

export default MyApp
