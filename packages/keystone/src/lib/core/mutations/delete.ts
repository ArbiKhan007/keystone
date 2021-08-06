import { KeystoneContext, DatabaseProvider } from '@keystone-next/types';
import pLimit, { Limit } from 'p-limit';
import { KeystoneErrors } from '../graphql-errors';
import { InitialisedList } from '../types-for-lists';
import { runWithPrisma } from '../utils';
import { resolveUniqueWhereInput, UniqueInputFilter } from '../where-inputs';
import { getAccessControlledItemForDelete } from './access-control';
import { runSideEffectOnlyHook } from './hooks';
import { validateDelete } from './validation';

async function deleteSingle(
  uniqueInput: UniqueInputFilter,
  list: InitialisedList,
  context: KeystoneContext,
  writeLimit: Limit,
  errors: KeystoneErrors
) {
  // Validate and resolve the input filter
  const uniqueWhere = await resolveUniqueWhereInput(uniqueInput, list.fields, context);

  // Access control
  const existingItem = await getAccessControlledItemForDelete(
    list,
    context,
    errors,
    uniqueInput,
    uniqueWhere
  );

  const hookArgs = { operation: 'delete' as const, listKey: list.listKey, context, existingItem };

  // Apply all validation checks
  await validateDelete({ list, errors, hookArgs });

  // Before delete
  await runSideEffectOnlyHook(list, 'beforeDelete', hookArgs, errors);

  const item = await writeLimit(() =>
    runWithPrisma(context, list, model => model.delete({ where: { id: existingItem.id } }))
  );

  await runSideEffectOnlyHook(list, 'afterDelete', hookArgs, errors);

  return item;
}

export function deleteMany(
  uniqueInputs: UniqueInputFilter[],
  list: InitialisedList,
  context: KeystoneContext,
  provider: DatabaseProvider,
  errors: KeystoneErrors
) {
  const writeLimit = pLimit(provider === 'sqlite' ? 1 : Infinity);
  return uniqueInputs.map(async uniqueInput =>
    deleteSingle(uniqueInput, list, context, writeLimit, errors)
  );
}

export async function deleteOne(
  uniqueInput: UniqueInputFilter,
  list: InitialisedList,
  context: KeystoneContext,
  errors: KeystoneErrors
) {
  return deleteSingle(uniqueInput, list, context, pLimit(1), errors);
}
