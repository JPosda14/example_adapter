
class MusicPlayer {
    playMusic() {
        console.log("Reproduciendo música...");
    }
}


class VideoPlayer {
    playVideo() {
        console.log("Reproduciendo video...");
    }
}


class VideoPlayerAdapter {
    constructor(videoPlayer) {
        this.videoPlayer = videoPlayer;
    }

    playMusic() {
        this.videoPlayer.playVideo();
    }
}


const videoPlayer = new VideoPlayer();


const adapter = new VideoPlayerAdapter(videoPlayer);


adapter.playMusic(); 

//En este ejemplo, creamos un Adapter llamado VideoPlayerAdapter,
//que toma un VideoPlayer como parámetro en su constructor.
//Luego, implementamos el método playMusic en el Adapter,
//que realmente llama al método playVideo del VideoPlayer.
//Esto nos permite usar el método playMusic del Adapter para reproducir
//música a través de VideoPlayer, aunque VideoPlayer originalmente no tenía un método playMusic.
