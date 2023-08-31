import EthereumIcon from '../public/images/chains/ethereum-icon.png';
import PolygonIcon from '../public/images/chains/polygon-icon.png';
import GoerliIcon from '../public/images/chains/goerli-icon.png';

export const NETWORKS_ICON = {
    'homestead': EthereumIcon,
    'matic': PolygonIcon,
    'goerli': GoerliIcon,
    'maticmum': PolygonIcon,
};

export const readFileAsJSON = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = function () {
            try {
                const jsonData = JSON.parse(reader.result);
                resolve(jsonData);
            } catch (error) {
                reject(error);
            }
        };

        reader.onerror = function (event) {
            reject(reader.error);
        };

        reader.readAsText(file);
    });
}

export const readFileAsImage = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = function () {
            const image = new Image();
            image.onload = function () {
                resolve(image);
            };
            image.onerror = function (event) {
                reject(event.error || new Error('Image loading error'));
            };
            image.src = reader.result;
        };

        reader.onerror = function (event) {
            reject(event.target.error);
        };

        reader.readAsDataURL(file);
    });
}