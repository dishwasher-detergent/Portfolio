import '../styles/globals.css'
import Blobs from "../components/layout/helpers/blobs"
import Noise from "../components/layout/helpers/noise"

function MyApp({ Component, pageProps }) {
  return (
		<div className="maroon min-h-screen h-full w-full mx-auto overflow-x-hidden text-white relative">
			<Noise />
      <div className='relative z-20 px-4'>
        <Component {...pageProps} />
      </div>
			<Blobs />
		</div>
  )
}

export default MyApp
