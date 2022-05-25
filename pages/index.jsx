import Projects from "../components/Projects"

const Home = () => {
	return (
		<>
			<div className="w-full h-[36rem] flex items-center justify-center">
				<h1 className="text-7xl md:text-9xl font-bold">Kenneth Bass</h1>
			</div>
			<Projects />
		</>
	)
}

export default Home