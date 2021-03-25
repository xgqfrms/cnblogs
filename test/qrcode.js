var barcodeDetector = new BarcodeDetector({formats: ['code_39', 'codabar', 'ean_13']});
undefined
barcodeDetector;
BarcodeDetector {}
// check supported types
BarcodeDetector.getSupportedFormats()
  .then(supportedFormats => {
    supportedFormats.forEach(format => console.log(format));
  });
Promise {<pending>}
VM122:4 aztec
VM122:4 code_128
VM122:4 code_39
VM122:4 code_93
VM122:4 data_matrix
VM122:4 ean_13
VM122:4 ean_8
VM122:4 itf
VM122:4 pdf417
VM122:4 qr_code
VM122:4 upc_e
 barcodeDetector.detect(imageEl)
    .then(barcodes => {
      barcodes.forEach(barcode => console.log(barcode.rawData));
    })
    .catch(err => {
      console.log(err);
    })
VM127:1 Uncaught ReferenceError: imageEl is not defined
    at <anonymous>:1:25
(anonymous) @ VM127:1
 barcodeDetector.detect(document.body)
    .then(barcodes => {
      barcodes.forEach(barcode => console.log(barcode.rawData));
    })
    .catch(err => {
      console.log(err);
    })





