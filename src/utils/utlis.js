export const loadImages = (folderPath, fileExtension) => {
  const images = {};
  const imageContext = require.context(folderPath, false, new RegExp(`\\.${fileExtension}$`));
  imageContext.keys().forEach((imageName) => {
    const imageUrl = imageContext(imageName).default;
    images[imageName] = imageUrl;
  });

  return images;
};

export const toAbsoluteUrl = pathname => window.location.origin + pathname;
export const styleInput = 'flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:ring-offset-gray-950 dark:placeholder:text-white-400 dark:focus-visible:ring-gray-300'