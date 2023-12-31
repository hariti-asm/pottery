const artistsData = [
  {
    imageUrl: "images/serghuini.jpg",
    description:
      "He is a master potter whose work is displayed at the British Museum and celebrated around the world. His family heritage spans the Moroccan pottery divide between the two competitive pottery centers of Fez and Safi. He is the seventh generation pottery master from his family.",
  },
  {
    imageUrl: "images/pot1.jpg",
    description:
      "She is a master potter whose  work is displayed at the British Museum and celebrated around the world. His family heritage spans the Moroccan pottery divide between the two competitive pottery centers of Fez and Safi. He is the seventh generation pottery master from his family.",
  },
];

const artistContainers = document.querySelectorAll(".artist-container");
let currentArtistIndex = 0;

// show the first artist container
artistContainers[currentArtistIndex].style.display = "block";

function updateArtist() {
  const currentContainer = artistContainers[currentArtistIndex];
  const nextIndex = (currentArtistIndex + 1) % artistContainers.length;
  const nextContainer = artistContainers[nextIndex];

  // Apply the transform to slide out the current artist container
  currentContainer.style.transform = "translateX(-120%)";
  currentContainer.style.transition = "ease-out 200ms";

  // Waiting the completion of the transition before updating the artist
  setTimeout(() => {
    const nextArtist = artistsData[nextIndex];

    currentContainer.style.display = "none";
    nextContainer.style.display = "block"; // Show the next artist container

    nextContainer.querySelector("img").src = nextArtist.imageUrl;
    nextContainer.querySelector("p").textContent = nextArtist.description;

    // Reset the transform to slide in the next artist container
    currentContainer.style.transform = "translateX(0)";
  }, 200);

  currentArtistIndex = nextIndex;
}

setInterval(updateArtist, 4000);
