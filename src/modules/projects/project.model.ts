import { model, Schema } from 'mongoose';
import { IProject } from './project.interface';
const authorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});
const projectSchema = new Schema<IProject>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    author: {
      type: authorSchema,
      required: true,
    },
    coreFeatures: {
      type: [String],
    },
    liveUrl: {
      type: String,
      required: true,
    },
    githubClient: {
      type: String,
    },
    githubServer: {
      type: String,
    },
    technologies: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true },
);

export const Project = model<IProject>('Project', projectSchema);
