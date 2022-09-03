export function isMagneticDiInstalled() {
  try {
    require('react-magnetic-di');
    return true;
  } catch {
    return false;
  }
}
