export const authEndpoint = "https://accounts.spotify.com/authorize";
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "654eef149e394fddbbf70ee49de444f8";
const redirectUri = "http://localhost:3000/";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];


export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;