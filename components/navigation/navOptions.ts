export const tabBarOnlyFirstInStack = (navigation: any) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible
  };
};

export const stackOptions = {
  mode: 'card',
  headerMode: 'none'
};
