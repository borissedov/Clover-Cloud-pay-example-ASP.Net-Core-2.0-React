export default class ImageHelper {

    getCardTypeImage(cardType){
        let image = 'images/clover/tender_default.png';
        if(cardType === 'VISA'){
            image = 'images/clover/tender_visa.png';
        }
        else if(cardType === 'AMEX'){
            image = 'images/clover/tender_amex.png';
        }
        else if(cardType === 'MC'){
            image = 'images/clover/tender_mc.png';
        }
        else if(cardType === 'DISCOVER'){
            image = 'images/clover/tender_disc.png';
        }
        else if(cardType === 'EBT') {
            image = 'images/clover/tender_ebt.png';
        }
        return image;
    }

    getPrinterTypeImage(printerType){
        let image = 'images/clover/star.png';
        if(printerType === 'Mini'){
            image = 'images/clover/mini_printer.png';
        }
        return image;
    }

    getDeviceImage(deviceTypeName){
        let image = '';
        if(deviceTypeName === 'BAYLEAF'){
            image = 'images/clover/flex.png';
        }
        else if(deviceTypeName === 'MAPLECUTTER'){
            image = 'images/clover/mini.png';
        }
        else if(deviceTypeName === 'LEAFCUTTER'){
            image = 'images/clover/mobile.png';
        }
        return image;
    }

}