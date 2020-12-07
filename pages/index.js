import Head from 'next/head'
import BookList from '../components/Books/BookList/BookList'
import Footer from '../components/Footer/Footer'
import Jumbotron from '../components/Jumbotron/Jumbotron'
import Navbar from '../components/Navbar/Navbar'
import SearchHome from '../components/Search/SearchHome'

export default function Home() {
  // if (process.browser) document.querySelector('html').classList.add('dark')
  return (
    <div>
      <Head>
        <title>Inicio | Nevook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Jumbotron />
      <SearchHome />
      <BookList />
      <Footer />
    </div>
  )
}
