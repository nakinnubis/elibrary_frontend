import { useRouter } from "next/router"
import Head from "next/head"
import Layout from '../components/Layout';
import { AuthProvider } from '../context/AuthContext';
import GlobalStyles from '../styles/GlobalStyles'
import '../styles/globals.css'
// import "../styles/HeaderStyles.module.css"
// import 'bootstrap/dist/css/bootstrap.min.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  if (router.pathname === "/") {
    return (
      <>
        <AuthProvider>
          <GlobalStyles />
          <Component {...pageProps}>
            <Head>
              <link rel="preconnect" href="https://fonts.gstatic.com" />
              <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,700;1,400&display=swap" rel="stylesheet" />
            </Head>

          </Component>
        </AuthProvider>
      </>
    )
  } else {
    return (
      <>
          {/* <html> */}
            <Head>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossOrigin="anonymous"></script>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossOrigin="anonymous"></link>
            </Head>
          {/* </html> */}
        <AuthProvider>
          <GlobalStyles />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </>
    )
  }
}

export default MyApp;


