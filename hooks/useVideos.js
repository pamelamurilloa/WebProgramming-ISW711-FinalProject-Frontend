const populateFeed = async() => {

    const res = await fetch (
        playlistUrl + "/user/" + userId, 
        {
            method: 'GET'
        }
    );

    const playlists = await res.json();
    
    const playlist = playlists.find(playlist=>playlist.name ==='General');

    page.innerHTML = "";

    playlist.videos.forEach(video => {
        const newVideo = document.createElement('div');
        newVideo.classList.add("video-card");
        newVideo.innerHTML =
        `
        <h3>${video.name}</h3>
        <iframe 
        src="${getEmbedUrl(video.url)}?rel=0&modestbranding=1&loop=1" title="${video.name}" frameborder="0" allow="accelerometer; encrypted-media; gyroscope" allowfullscreen>
            <style>
            .ytp-chrome-top, .ytp-title-channel, .ytp-title-text, .ytp-youtube-buttom {
                opacity: 0 !important;
                height: 0 !important;
            }</style>
        </iframe>

        `

        page.append(newVideo);
    })
};


const getPlaylists = () => {
    //
}

const useVideos = () => {
    return [populateFeed]
}

export default useVideos