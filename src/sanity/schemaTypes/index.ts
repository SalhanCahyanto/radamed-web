import { type SchemaTypeDefinition } from 'sanity';
import { companyProfile } from './companyProfile';
import { service } from './service';
import { portfolioProject } from './portfolioProject';
import { siteSettings } from './siteSettings';

export const schemaTypes: SchemaTypeDefinition[] = [
  companyProfile,
  service,
  portfolioProject,
  siteSettings,
];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes,
};

