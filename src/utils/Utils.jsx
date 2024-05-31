export function getLinkStyle({
  isActive = false,
  linkColorProp = "color",
  linkColor = "var(--activate-button-blue)",
}) {
  return {
    [linkColorProp]: isActive ? linkColor : "",
  };
}