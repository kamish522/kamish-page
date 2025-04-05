import fs from 'fs/promises';
import path from 'path';

const filePath = path.join(process.cwd(), 'dist', '404.html');

async function getHashedFileName() {
  const assetsDir = path.join(process.cwd(), 'dist', 'assets');
  const files = await fs.readdir(assetsDir);

  const jsFile = files.find(file => file.startsWith('index-') && file.endsWith('.js'));
  const cssFile = files.find(file => file.startsWith('index-') && file.endsWith('.css'));

  return { jsFile, cssFile };
}

async function update404() {
  try {
    const { jsFile, cssFile } = await getHashedFileName();

    if (!jsFile || !cssFile) {
      throw new Error('Не удалось найти файлы index.js или index.css');
    }

    let data = await fs.readFile(filePath, 'utf8');

    const updatedData = data
      .replace(/src="\/assets\/index\.js"/, `src="/assets/${jsFile}"`)
      .replace(/href="\/assets\/index\.css"/, `href="/assets/${cssFile}"`);

    await fs.writeFile(filePath, updatedData, 'utf8');
    console.log('404.html успешно обновлен!');
  } catch (err) {
    console.error(err);
  }
}

update404();