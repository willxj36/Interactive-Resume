import * as React from 'react';

import { Project } from '../../utils/models';

interface IProjectSummaryProps {
    project: Project
}

const ProjectSummary: React.FC<IProjectSummaryProps> = ({ project }) => {

    return(
        <div>Project Summary</div>
    )

}

export default ProjectSummary;