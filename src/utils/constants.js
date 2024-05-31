const GOOGLE_API_KEY = "AIzaSyBzHumz2sWpNRK5pS7RPITgZMNwdn2IurA";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;
