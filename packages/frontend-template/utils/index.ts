import EthereumIcon from '../public/images/chains/ethereum-icon.png';
import PolygonIcon from '../public/images/chains/polygon-icon.png';
import GoerliIcon from '../public/images/chains/goerli-icon.png';

export type NetworkType = 'homestead' | 'matic' | 'goerli' | 'maticmum';

export const NETWORKS_ICON = {
    'homestead': EthereumIcon,
    'matic': PolygonIcon,
    'goerli': GoerliIcon,
    'maticmum': PolygonIcon,
};

export const getNetworkIcon = (network: NetworkType) => {
    return NETWORKS_ICON[network] || '';
};