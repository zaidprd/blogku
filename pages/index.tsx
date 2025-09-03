import Head from 'next/head'
import Layout from '../components/layout'
import Container from '../components/container'

export default function Home({ preview }) {
  return (
    <Layout preview={preview}>
      <Head>
        <title>Layanan Jasa Pembuatan Website | CuriousByte</title>
      </Head>

      {/* Bagian Hero */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-24 md:py-32">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-none mb-4">
              Buat Website Profesional Anda
            </h1>
            <p className="text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto">
              Kami menawarkan layanan pembuatan website yang cepat, modern, dan dirancang khusus untuk meningkatkan bisnis Anda.
            </p>
            <a href="#harga" className="bg-white text-blue-800 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105">
              Lihat Paket Harga
            </a>
          </div>
        </Container>
      </div>

      {/* Bagian Harga Layanan */}
      <div id="harga" className="bg-gray-50 py-16 md:py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pilih Paket yang Pas untuk Anda
            </h2>
            <p className="text-gray-600">
              Harga transparan, fitur lengkap, dan layanan terbaik.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Kartu Paket Basic */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800">Basic</h3>
              <p className="text-gray-500 mt-2">Cocok untuk pemula</p>
              <div className="text-4xl font-extrabold text-indigo-600 my-6">
                Rp 2.500.000
              </div>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                  Desain Satu Halaman
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                  Responsif (Mobile & Desktop)
                </li>
              </ul>
              <a href="#" className="mt-8 block text-center bg-indigo-600 text-white font-bold py-3 px-6 rounded-full hover:bg-indigo-700 transition duration-300">
                Pilih Paket
              </a>
            </div>

            {/* Kartu Paket Pro */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800">Pro</h3>
              <p className="text-gray-500 mt-2">Untuk bisnis berkembang</p>
              <div className="text-4xl font-extrabold text-indigo-600 my-6">
                Rp 5.000.000
              </div>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                  Desain Tiga Halaman
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                  Blog Terintegrasi
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                  SEO Dasar
                </li>
              </ul>
              <a href="#" className="mt-8 block text-center bg-indigo-600 text-white font-bold py-3 px-6 rounded-full hover:bg-indigo-700 transition duration-300">
                Pilih Paket
              </a>
            </div>

            {/* Kartu Paket Enterprise */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800">Enterprise</h3>
              <p className="text-gray-500 mt-2">Solusi kustom untuk bisnis besar</p>
              <div className="text-4xl font-extrabold text-indigo-600 my-6">
                Hubungi Kami
              </div>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                  Desain Halaman Kustom
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                  Dukungan Penuh 24/7
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                  Fitur Tambahan Sesuai Permintaan
                </li>
              </ul>
              <a href="#" className="mt-8 block text-center bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-full hover:bg-gray-300 transition duration-300">
                Hubungi Kami
              </a>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  )
}