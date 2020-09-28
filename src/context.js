import React from 'react';

const VimotusContext = React.createContext({
	data: {}
});
export const VimotusProvider = VimotusContext.Provider;
export const VimotusConsumer = VimotusContext.Consumer;

export default VimotusContext;