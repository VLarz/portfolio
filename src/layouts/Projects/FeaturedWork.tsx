import SectionContainer from '../../components/SectionContainer';
import SectionHeading from '../../components/SectionHeading';
import FeaturedCard from './FeaturedCard';
import { featuredProjects } from './data';

interface Props {
  handleOpenModal?: (imageSrc: string) => void;
}

export default function FeaturedWork({ handleOpenModal }: Props) {
  return (
    <SectionContainer id="work" className={`space-y-10`}>
      <SectionHeading index="01" label="Featured work" title="Flagship projects" />
      <div className={`grid grid-cols-1 gap-8 md:grid-cols-2`}>
        {featuredProjects.map((project) => (
          <FeaturedCard
            key={project.title}
            project={project}
            handleOpenModal={handleOpenModal}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
