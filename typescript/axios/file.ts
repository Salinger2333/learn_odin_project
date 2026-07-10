import axios from "axios";

let data = document.querySelector("#upload-file");
axios.postForm("/api", data, {
  onUploadProgress(progressEvent) {
    const percent = Math.round(progressEvent.loaded / progressEvent.total!);
    console.log(`progress: ${percent}%`);
  },
});
