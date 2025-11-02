function playlist(){
    const box = document.getElementById('playlistcontent');
    box.style.display = (box.style.display === 'none' || box.style.display === '') 
        ? 'block' 
        : 'none';
}