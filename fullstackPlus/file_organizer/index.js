import asyncFs from "fs/promises";
import path from "path";

const organizeFiles = async () => {
  try {
    // get all the files
    const files = await asyncFs.readdir(directoryPath);
    
    for (let file of files) {
      // get file ext name
      const fileExtension = path.extname(file).slice(1);
      if (!fileExtension) continue; 

      const oldFilePath = path.join(directoryPath, file);
      // create folder according ext name
      const targetFolderPath = path.join(directoryPath, fileExtension);

      try {
        await asyncFs.mkdir(targetFolderPath, { recursive: true });
        await asyncFs.rename(oldFilePath, path.join(targetFolderPath, file));
        console.log(`Moved: ${file} -> ${fileExtension}/`);
      } catch (error) {
        console.error(`Error moving file: ${file}`, error);
      }
    }

    console.log("File organization completed successfully.");
  } catch (error) {
    console.error("Error reading directory:", error);
  }
};

const directoryPath = "/home/gurnav/Downloads";

organizeFiles(directoryPath);
