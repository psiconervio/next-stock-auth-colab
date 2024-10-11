// import fs from 'fs';
// import path from 'path';

// export async function processImage(image, fileName) {
//   try {
//     // Convertir la imagen a ArrayBuffer
//     const bytes = await image.arrayBuffer();

//     // Crear un Buffer a partir del ArrayBuffer
//     const buffer = Buffer.from(bytes);

//     // Definir la ruta donde se guardará la imagen
//     const folderPath = path.join(__dirname, 'ruta/a/tu/carpeta'); // Cambia 'ruta/a/tu/carpeta' por la ruta de la carpeta deseada
//     const filePath = path.join(folderPath, fileName);

//     // Crear la carpeta si no existe
//     if (!fs.existsSync(folderPath)) {
//       fs.mkdirSync(folderPath, { recursive: true });
//     }

//     // Guardar el buffer en un archivo
//     fs.writeFileSync(filePath, buffer);

//     console.log(`Imagen guardada en: ${filePath}`);
//     return filePath;
//   } catch (error) {
//     console.error('Error al procesar y guardar la imagen:', error);
//     throw error;
//   }
// }

//codigo funcional
export async function processImage(image) {
  const bytes = await image.arrayBuffer();
  const buffer = Buffer.from(bytes);
  return buffer;
}
