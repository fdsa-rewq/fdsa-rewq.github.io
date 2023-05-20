fetch('./posts/posts.json')
      .then(response => response.json())
      .then(data => {
        // Sort entries by ID in reverse order
        data.sort((a, b) => b.id - a.id);

        // Render the blog entries
        const blogContainer = document.getElementById('blogContainer');
        data.forEach(entry => {
          const entryElement = document.createElement('div');
          entryElement.classList.add('blogEntry');
          if (entry.picture) {
            entryElement.innerHTML = `
            <h2>${entry.name}</h2>
            <img src="${entry.picture}" alt="${entry.picturealt}" class="blogPostImage">
            <p>Date: ${entry.date}</p>
            <p>${entry.contents}</p>
          `;
          } else {
            entryElement.innerHTML = `
            <h2>${entry.name}</h2>
            <p>Date: ${entry.date}</p>
            <p>${entry.contents}</p>
          `;
          }
          blogContainer.appendChild(entryElement);
        });
      })
      .catch(error => console.log(error));