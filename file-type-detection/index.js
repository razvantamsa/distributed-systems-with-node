const { promises, createReadStream, readFileSync } = require('fs');
const util = require('util');
const path = require('path');

const folder = './test-files';

async function initFileType() {
    return import('file-type');
}

async function readFolder(folderPath) {
    try {
      const files = await promises.readdir(folderPath);
  
      // Filter out directories and get the full paths
      const filePaths = await Promise.all(
        files.map(async (file) => {
          const fullPath = path.join(folderPath, file);
          const stats = await promises.stat(fullPath);
          return stats.isFile() ? fullPath : null;
        })
      );
  
      return filePaths.filter(Boolean);
    } catch (err) {
      console.error('Error reading folder:', err);
    }
}

(async () => {
    const filePaths = await readFolder(folder);
    const fileTypeLib = await initFileType();

    for(const filePath of filePaths) {
        const fileStream = createReadStream(filePath);
        const { fileType: streamType } = await fileTypeLib.fileTypeStream(fileStream);

        const fileBuffer = readFileSync(filePath);
        const bufferType = await fileTypeLib.fileTypeFromBuffer(fileBuffer);

        console.log(filePath, streamType, bufferType);
    }
})();