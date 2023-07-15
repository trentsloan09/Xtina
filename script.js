// Read the JSON data from the file
fetch('setlistcsv.json')
  .then(response => response.json())
  .then(data => {
    const tableBody = document.querySelector('#song-table tbody');

    // Iterate over the data and create table rows
    data.forEach(song => {
      const row = document.createElement('tr');
      const songName = document.createElement('td');
      songName.textContent = song.A;
      const artist = document.createElement('td');
      artist.textContent = song.B;
      const link = document.createElement('td');
      const linkAnchor = document.createElement('a');
      linkAnchor.href = song.D;
      linkAnchor.textContent = 'Watch';
      linkAnchor.target = '_blank';
      link.appendChild(linkAnchor);

      row.appendChild(songName);
      row.appendChild(artist);
      row.appendChild(link);
      tableBody.appendChild(row);
    });
  })
  .catch(error => console.error('Error:', error));
