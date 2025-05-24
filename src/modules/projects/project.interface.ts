export interface IProject {
  name: string;
  image: string;
  liveUrl: string;
  author: {
    name: string;
    avatar: string;
    email: string;
  };
  description: string;
  technologies: string[];
  coreFeatures: string[];
  githubClient?: string;
  githubServer?: string;
}
