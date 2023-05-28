/-------------- setear el año
// ------------- para la imagen completa de la zona de estudio

var anyo = 2022;
var anyo_sig = anyo + 1;

//-------------- punto como centro de la zona de estudio
var centro = ee.Geometry.Point([-76.70922734077953, 7.669087029922858]);

//-------------- tamaño del búfer en metros
var bufferSize = 100;

//-------------- crear el polígono a partir del punto y el tamaño del búfer
var exportArea = centro.buffer(bufferSize).bounds();

//-------------- seleccionar los proyectos satelitales
var proyectos = [
  'COPERNICUS/S2_SR', // Sentinel-2
  'LANDSAT/LC08/C01/T1_SR' // Landsat 8
  // Agrega más proyectos satelitales aquí
];

//-------------- función para filtrar y seleccionar la imagen menos nublada
function seleccionarImagen(mision) {
  var imagen = ee.Image(
    ee.ImageCollection(mision)
      .filterDate(anyo + '-01-01', anyo_sig + '-01-01')
      .filterBounds(exportArea)
      .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 50))
      .sort('CLOUDY_PIXEL_PERCENTAGE')
      .first()
  );
  return imagen;
}

//-------------- seleccionar y recortar imágenes de los proyectos satelitales
var imagenes = proyectos.map(function (proyecto) {
  var imagen = seleccionarImagen(proyecto);
  var imagenRecortada = imagen.clip(exportArea).select('B4', 'B3', 'B2');
  return imagenRecortada;
});

//-------------- muestra los resultados
imagenes.forEach(function (imagen, index) {
  var nombreSatelite = proyectos[index].split('/')[0];
  print(nombreSatelite + ' - Imagen:');
  print(imagen);
  Map.centerObject(exportArea, 12);
  var vizParams = { min: 0, max: 3500 };
  Map.addLayer(imagen, vizParams, nombreSatelite + ' - RGB');
});

// Exporta las imágenes como GeoTIFF optimizados para la nube.
imagenes.forEach(function (imagen, index) {
  var nombreSatelite = proyectos[index].split('/')[0];
  Export.image.toDrive({
    image: imagen,
    description: nombreSatelite + '_Chiia_menor_nubosidad_' + anyo,
    folder: 'Datos',
    dimensions: '1248x1072',
    region: exportArea,
    crs: 'EPSG:4326',
    fileFormat: 'GeoTIFF',
    formatOptions: {
      cloudOptimized: true
    }
  });
});//-------------- setear el año
// ------------- para la imagen completa de la zona de estudio

var anyo = 2021;
var anyo_sig = anyo + 1;

//-------------- punto como centro de la zona de estudio
var centro = ee.Geometry.Point([-78.7478107071147,1.450607935715355]);

//-------------- tamaño del búfer en metros
var bufferSize = 630;

//-------------- crear el polígono a partir del punto y el tamaño del búfer
var exportArea = centro.buffer(bufferSize).bounds();

//-------------- seleccionar los proyectos satelitales
var proyectos = [
  'COPERNICUS/S2_SR', // Sentinel-2
  'LANDSAT/LC08/C01/T1_SR', // Landsat 8
 // 'LANDSAT/LE07/C01/T1_SR', // Landsat 7
  //'LANDSAT/LT05/C01/T1_SR' // Landsat 5
  // Agrega más proyectos satelitales aquí
];

//-------------- función para filtrar y seleccionar la imagen menos nublada
function seleccionarImagen(mision) {
  var imagen = ee.ImageCollection(mision)
    .filterDate(anyo + '-01-01', anyo_sig + '-01-01')
    .filterBounds(exportArea)
    .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 50))
    .sort('CLOUDY_PIXEL_PERCENTAGE')
    .first();
  
  // Verifica si la imagen existe y selecciona las bandas
  if (imagen) {
    imagen = imagen.select('B4', 'B3', 'B2');
  }
  return imagen;
}

function seleccionarImagen(mision) {
  var imagen = ee.Image(
    ee.ImageCollection(mision)
      .filterDate(anyo + '-01-01', anyo_sig + '-01-01')
      .filterBounds(exportArea)
      .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 50))
      .sort('CLOUDY_PIXEL_PERCENTAGE')
      .first()
  );
  return imagen;
}

//-------------- seleccionar y recortar imágenes de los proyectos satelitales
var imagenes = proyectos.map(function (proyecto) {
  var imagen = seleccionarImagen(proyecto);
  var imagenRecortada = imagen.clip(exportArea).select('B4', 'B3', 'B2');
  return imagenRecortada;
});

//-------------- muestra los resultados
imagenes.forEach(function (imagen, index) {
  var nombreSatelite = proyectos[index].split('/')[0];
  print(nombreSatelite + ' - Imagen:');
  print(imagen);
  Map.centerObject(exportArea, 12);
  var vizParams = { min: 0, max: 3500 };
  Map.addLayer(imagen, vizParams, nombreSatelite + ' - RGB');
});

// Exporta las imágenes como GeoTIFF optimizados para la nube.
imagenes.forEach(function (imagen, index) {
  var nombreSatelite = proyectos[index].split('/')[0];
  Export.image.toDrive({
    image: imagen,
    description: nombreSatelite + '_Chiia_menor_nubosidad_' + anyo,
    folder: 'Datos',
    dimensions: '1248x1072',
    region: exportArea,
    crs: 'EPSG:4326',
    fileFormat: 'GeoTIFF',
    formatOptions: {
      cloudOptimized: true
    }
  });
});