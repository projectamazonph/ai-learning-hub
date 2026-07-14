import { z } from 'zod';
import { audienceValues, difficultyValues } from './types';

export const labScenarioSchema = z.object({
  id: z.string().min(3),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  version: z.number().int().positive(),
  labSlug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  title: z.string().min(5).max(120),
  summary: z.string().min(20).max(400),
  audiences: z.array(z.enum(audienceValues)).min(1),
  difficulty: z.enum(difficultyValues),
  estimatedMinutes: z.number().int().min(5).max(180),
  syntheticDataOnly: z.literal(true),
  brief: z.object({
    role: z.string().min(3),
    goal: z.string().min(10),
    constraints: z.array(z.string().min(3)).min(1),
    successCriteria: z.array(z.string().min(3)).min(1),
  }),
  tasks: z
    .array(
      z.object({
        id: z.string().min(1),
        instruction: z.string().min(10),
        required: z.boolean(),
      }),
    )
    .min(1),
  rubricVersion: z.string().min(3),
  status: z.enum(['DRAFT', 'PUBLISHED', 'RETIRED']),
});

export type ValidatedLabScenario = z.infer<typeof labScenarioSchema>;

