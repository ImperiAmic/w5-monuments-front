import { Monument } from "../../types";

const getMonumentImage = (monument: Monument): HTMLElement => {
  const monumentImage = document.createElement("img");
  monumentImage.className = "monument-image";

  monumentImage.src = monument.imageUrl;
  monumentImage.alt = `General view of ${monument.name}`;
  monumentImage.loading = "lazy";

  return monumentImage;
};

export default getMonumentImage;
