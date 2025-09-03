import Meta from './meta'
import Header from './header'
import Footer from './footer'

export default function Layout({ preview = false, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Header />
        <main className="pt-20 md:pt-24">
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}