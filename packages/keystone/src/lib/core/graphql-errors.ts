import { ApolloError } from 'apollo-server-errors';

export type KeystoneErrors = {
  accessDeniedError: any;
  validationFailureError: any;
  extensionError: any;
  limitsExceededError: any;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const graphQlErrors = (debug: boolean | undefined): KeystoneErrors => ({
  accessDeniedError: () => new ApolloError('You do not have access to this resource'),
  validationFailureError: (messages: string[]) => {
    const s = messages.map(m => `  - ${m}`).join('\n');
    return new ApolloError(`You provided invalid data for this operation.\n${s}`);
  },
  extensionError: (extension: string, things: { error: Error; tag: string }[]) => {
    const s = things.map(t => `  - ${t.tag}: ${t.error.message}`).join('\n');
    return new ApolloError(
      `An error occured while running "${extension}".\n${s}`,
      'INTERNAL_SERVER_ERROR',
      // Make the original stack traces available in non-production modes.
      (debug === undefined ? process.env.NODE_ENV !== 'production' : debug)
        ? { debug: things.map(t => ({ stacktrace: t.error.stack, message: t.error.message })) }
        : undefined
    );
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  limitsExceededError: (args: { type: string; limit: number; list: string }) =>
    new ApolloError('Your request exceeded server limits'),
});
