export const extractYouTubeVideoId = (url) => {
  if (!url) return null;

  const regex =
    /(?:youtube\.com\/.*v=|youtu\.be\/)([^&]+)/;

  const match = url.match(regex);
  return match ? match[1] : null;
};
