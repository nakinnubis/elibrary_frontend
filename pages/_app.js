import { useRouter } from "next/router"
import Layout from '../components/Layout';
import { AuthProvider } from '../context/AuthContext';
import '../styles/globals.css'
import GlobalStyles from '../styles/GlobalStyles'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  if (router.pathname === "/") {
    return (
      <>
        <AuthProvider>
          <GlobalStyles />
          <Component {...pageProps}>
            <head>
              <link rel="preconnect" href="https://fonts.gstatic.com" />
              <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,700;1,400&display=swap" rel="stylesheet" />
            </head>
          </Component>
        </AuthProvider>
      </>
    )
  } else {
    return (
      <>
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


