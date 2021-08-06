import type { KeystoneConfig, AdminMetaRootVal } from '@keystone-next/types';
import { getAdminMetaSchema } from '../admin-ui/system';
import { sessionSchema } from '../session';
import { InitialisedList } from './core/types-for-lists';
import { getGraphQLSchema } from './core/graphql-schema';
import { getDBProvider } from './createSystem';
import { KeystoneErrors } from './core/graphql-errors';

export function createGraphQLSchema(
  config: KeystoneConfig,
  lists: Record<string, InitialisedList>,
  errors: KeystoneErrors,
  adminMeta: AdminMetaRootVal
) {
  // Start with the core keystone graphQL schema
  let graphQLSchema = getGraphQLSchema(lists, errors, getDBProvider(config.db));

  // Merge in the user defined graphQL API
  if (config.extendGraphqlSchema) {
    graphQLSchema = config.extendGraphqlSchema(graphQLSchema);
  }

  // Merge in session graphQL API
  if (config.session) {
    graphQLSchema = sessionSchema(graphQLSchema);
  }

  // Merge in the admin-meta graphQL API
  graphQLSchema = getAdminMetaSchema({ adminMeta, config, graphQLSchema, lists });

  return graphQLSchema;
}
