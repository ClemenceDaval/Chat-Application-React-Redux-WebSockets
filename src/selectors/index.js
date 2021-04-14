/* eslint-disable import/prefer-default-export */
export const getHighestId = (state) => {
  const { messages } = state;
  if (messages.length === 0) {
    return 0;
  }
  const ids = messages.map((message) => message.id);
  return Math.max(...ids);
};
