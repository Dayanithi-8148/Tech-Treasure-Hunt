function downloadImage() {
    const input = document.getElementById("userInput").value.trim().toLowerCase();

    const imageMap = {
        "chatgpt": "./img src/block-5.jpg",
        "cabin": "./img src/bull.jpg",
        "canteen": "./img src/canteen-5.jpg",
        "parking": "./img src/car parking.jpg",
        "cyber": "./img src/cipd.jpg",
        "dragon": "./img src/dam.jpg",
        "hacker": "./img src/display.jpg",
        "hello5": "./img src/library.jpg",
        "spy": "./img src/notice board.jpg",
        "timeflies": "./img src/placement auditorium.jpg",
        "soil mechanism lab": "./img src/soil mechanics lab.jpg",
        "code-quest": "./img src/temple.jpg",
        "vidaamuyarchi": "./img src/tower.jpg",
        "winner": "./img src/watchman room.jpg",
        "treasure": "./img src/yoga hall.jpg",
        

    };

    if (imageMap[input]) {
        const link = document.createElement("a");
        link.href = imageMap[input];
        link.download = input + ".jpg";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        alert("Image not found for: " + input);
    }
}