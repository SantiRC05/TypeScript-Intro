interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Detail;
}

interface Detail {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: 'Mess',
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}

const song = 'New Song';

const {
    song:anotherSong, 
    songDuration:duration,
    details
} = audioPlayer;

const {author} = details;

//console.log('Song: - 05-basic-destructuring.ts:33', anotherSong);
//console.log("Duration: - 05-basic-destructuring.ts:34", duration);
//console.log('Author: - 05-basic-destructuring.ts:35', author);


const [p1, p2, trunks = 'Not Found']: string[] = ['Goku', 'Vegeta'];

console.log('Personaje 3: - 05-basic-destructuring.ts:40', trunks);


export {}
