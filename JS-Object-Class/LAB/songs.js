function songs(input) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    const songs =[] ;
    const numberOfSongs = input.shift();
    const typeSong = input.pop();


    for(let index =0;index < numberOfSongs;index++){
        let [type,name,time] = input[index].split('_');
        let song = new Song(type,name,time);
        songs.push(song);
    }

    if(typeSong === 'all'){
        songs.forEach((i)=> console.log(i.name));
    }
    else{
        let filtred = songs.filter((i)=> i.typeList === typeSong);
        filtred.forEach((i)=> console.log(i.name));
    }

    
}





function songs(data) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    const songs = data.slice(1, data.length - 1); //['like_Replay_3:15', 'ban_Photoshop_3:48']
    const typeListSearch = data.pop();

    for (const song of songs) {
        const [typeList, songName, time] = song.split('_');

        if (typeListSearch === 'all' || typeListSearch === typeList) {
            console.log(songName);
        }
    }
}

songs([2,
'like_Replay_3:15',
'ban_Photoshop_3:48',
'all']);