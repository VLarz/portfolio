import SectionContainer from '../../components/SectionContainer';
import SectionHeading from '../../components/SectionHeading';
import Service from './Service';
import { servicesData, skills } from './data';

export default function Services() {
  return (
    <SectionContainer id="services" className={`space-y-10`}>
      <SectionHeading index="04" label="Services" title="Work with me" />
      <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3`}>
        {servicesData.map((service) => (
          <Service key={service.title} {...service} />
        ))}
      </div>
      <ul className={`flex flex-wrap gap-2`}>
        {skills.map((skill) => (
          <li
            key={skill}
            className={`rounded-full border border-line px-3 py-1 text-xs text-fg-muted`}
          >
            {skill}
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
}
