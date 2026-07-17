import { archiveProjects, featuredProjects, projectsData } from './data';

describe('projects data', () => {
  it('has exactly 4 featured projects, each with a metric', () => {
    expect(featuredProjects.map((p) => p.title)).toEqual([
      'toktok ecosystem',
      'TheQuestHub v2',
      'BitLink',
      'Miss Universe PH 2021',
    ]);
    featuredProjects.forEach((p) => expect(p.metric).toBeTruthy());
  });

  it('splits every project into exactly one bucket, no duplicates', () => {
    expect(featuredProjects.length + archiveProjects.length).toBe(
      projectsData.length,
    );
    const titles = projectsData.map((p) => p.title);
    expect(new Set(titles).size).toBe(titles.length);
  });

  it('gives every project tags and an image', () => {
    projectsData.forEach((p) => {
      expect(p.tags.length).toBeGreaterThan(0);
      expect(p.image).toMatch(/^\/images\/projects\//);
    });
  });
});
