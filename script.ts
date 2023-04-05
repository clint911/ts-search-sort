import fs from "fs";
import path from "path";

const sourceDir = "./type-challenges/playground/";
const searchString = "extreme";

// Get a list of all files in the source directory
fs.readdir(sourceDir, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  // Filter the files based on whether they include the search string
  const filteredFiles = files.filter((file) =>
    file.includes(searchString)
  );

  // Sort the filtered files alphabetically
  const sortedFiles = filteredFiles.sort();

  // Create a directory with the search string as the name
  const destDir = path.join(sourceDir, searchString);
  fs.mkdir(destDir, (err) => {
    if (err) {
      console.error(err);
      return;
    }

    // Copy each sorted file to the destination directory
    sortedFiles.forEach((file) => {
      const srcPath = path.join(sourceDir, file);
      const destPath = path.join(destDir, file);
      fs.copyFile(srcPath, destPath, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(`${file} copied to ${destDir}`);
      });
    });
  });
});

