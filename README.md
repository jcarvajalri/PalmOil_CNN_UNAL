# PalmOil_CNN_UNAL
En el siguiente repositorio se eencuentran los productos generados para la Tesis titulada, Detección de monocultivos de palma de aceite en Colombia implementando un modelo de redes neuronales convolucionales a partir de imágenes satelitales de la Universidad Nacional de colombia.

A contuación se enuentra la estructura de carpetas y productos: 

## 1. Colab

Contienene el script [DataSetPalmOil.ipynb](https://pages.github.com/) para ejecución en el ambiente de **COLAB de Google** . Este se encarga de fracccionar las imágenes satelitales que se descargaron por medio de **Google Earth Engine** . Adicionalmente realizar la limpieza de manera masiva, y estadanrizar un tamaño del tataset. Por ultimo en este script con la información definitiva se realiza un enrequecimiento de datos. 

## 2. Google Earth

En la carpeta de [Google Earth] (https://www.google.com/intl/es/earth/) se encuentran los siguientes archivos: 

- DataSet Zonas de Cultivos de Palma de Aceite Colombia 
- DataSet Zonas adyacentes Cultivos de Palma de aceite en Colombia
- Cultivos Palma de Aceite externas al Modelo

Para abrir los archivos proceda a descargarlos y abrirlos por medio de Googe Earth. 

## 3. Google Earth Engine

En la carpeta se encuentran los siguientes archivos, para ejecutarlos debe crear una cuenta en [Google Earth Engine] (https://earthengine.google.com/) crear un script y copiar el contenido. 

- Donwload_S1_S2_Transormation.js
- ExternalImages.js

## 4. Local

En esta carpeta se encuentran los siguientes notebook de python. Para ejecutarlos proceda a instalar en su ordenador local un ambiente de python version 3.7 , y configurar JupyterNoteBook.

- CNN_RestNet50_PalmOil.ipynb
- Image Resizing and Classification.ipynb

Adicionalmente se encuentra el modelo de CNN Resnet50 entrenado: 

-4model_ResNet50_PalmOilDef.h5

