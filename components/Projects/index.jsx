import Project from "./project"

const Container = () => {
	return (
		<div className="relative pt-8 max-w-7xl mx-auto">
			<h2 className="text-6xl font-bold absolute top-0 z-40">Projects</h2>
			<div className="relatvie z-10 flex flex-row flex-nowrap gap-4 px-8 pb-4 w-full overflow-x-auto rounded-xl">
				<Project />
				<Project />
				<Project />
				<Project />
				<Project />
				<Project />
			</div>
		</div>
	)
}

export default Container