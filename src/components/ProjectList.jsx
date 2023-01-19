import ProjectCard from "./ProjectCard";
import projects from "../data/projectList";

export const ProjectList = (props, i) => {
    const listCards = projects.map((proj) => {
        return <ProjectCard key={i} project={proj}></ProjectCard>
    })

    return <ol>
        {listCards}
    </ol>
};

export default ProjectList;