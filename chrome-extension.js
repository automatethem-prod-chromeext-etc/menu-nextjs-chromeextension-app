const fs = require('fs');
const glob = require('glob');

// _next 폴더를 next로 변경
const sourcePath = 'out/_next';
const destinationPath = 'out/next';

fs.rename(sourcePath, destinationPath, (err) => {
  if (err) {
    console.error('Failed to rename "_next" directory to "next".', err);
  } 
  else {
    console.log('Renamed "_next" directory to "next" successfully.');
  }
});

const htmlFiles = glob.sync('out/**/*.html');
const jsFiles = glob.sync('out/**/*.js');
const cssFiles = glob.sync('out/**/*.css');
const files = [].concat(htmlFiles, jsFiles, cssFiles);
//console.log(files);

// 각 파일 처리
files.forEach((file) => {
  try {
    // 파일 읽기
    const content = fs.readFileSync(file, 'utf-8');
    // 내용 수정
    //const modifiedContent = content.replace(/\/_next/g, './next');
    const modifiedContent = content.replace(/\/_next/g, '/next');
    // 수정된 내용으로 파일 쓰기
    fs.writeFileSync(file, modifiedContent, 'utf-8');
    console.log(`Modified file: ${file}`);
  } 
  catch (err) {
    console.error(`Error processing file ${file}:`, err);
  }
});
