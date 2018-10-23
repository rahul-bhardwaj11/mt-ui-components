import { namespaceConnect } from './utils/enhancer';
import VideoPlayerContainer from './containers/VideoPlayer';
import ProviderHelper from './utils/providerHelper';
import { actions } from './actions';

const ConnectedRaPlayer = namespaceConnect(undefined, actions)(
  VideoPlayerContainer
);

export default ProviderHelper(ConnectedRaPlayer);
