import useProject from "@src/hooks/portfolio/project/useProject";

export default function Projects() {
	const { projects } = useProject();
	console.log(projects)
	return (
		<div></div>
	);
}

