const tabFocusedIcons = (focused: boolean): string => (focused ? 'fill' : 'line');

export const tabIcons = (routeName: string, focused: boolean): string => {
  if (routeName === 'Trainers') {
    return `trainer ${tabFocusedIcons(focused)}`;
  } else if (routeName === 'Add Word') {
    return `plus ${tabFocusedIcons(focused)}`;
  } else if (routeName === 'Vocabulary') {
    return `dictionary ${tabFocusedIcons(focused)}`;
  }
  return 'default';
};
