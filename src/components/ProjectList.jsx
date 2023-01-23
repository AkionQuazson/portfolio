import ProjectCard from "./ProjectCard";
import projects from "../data/projectList";
import "../css/projectList.css";

export const ProjectList = (props) => {
    const listCards = projects.map((proj, i) => {
        return <ProjectCard key={i} project={proj}></ProjectCard>
    })

    return <ol>
        {listCards}
    </ol>
};

export default ProjectList;