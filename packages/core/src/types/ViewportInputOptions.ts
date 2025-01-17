import { OrientationAxis } from '../enums';
import OrientationVectors from './OrientationVectors';
import DisplayArea from './displayArea';
/**
 * This type defines the shape of viewport input options, so we can throw when it is incorrect.
 */
type ViewportInputOptions = {
  /** background color */
  background?: [number, number, number];
  /** orientation of the viewport which can be either an Enum for axis Enums.OrientationAxis.[AXIAL|SAGITTAL|CORONAL|DEFAULT] or an object with viewPlaneNormal and viewUp */
  orientation?: OrientationAxis | OrientationVectors;
  /** displayArea of interest */
  displayArea?: DisplayArea;
  /** whether the events should be suppressed and not fired*/
  suppressEvents?: boolean;
};

export default ViewportInputOptions;
