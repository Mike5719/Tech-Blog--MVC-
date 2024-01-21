const commentHandler = async (event) => {
    event.preventDefault();
  
    const feedback = document.querySelector('#comment-add').value.trim();
    console.log(feedback);
  
    if (feedback) {
      const response = await fetch(`/api/blogs/comment`, {
        method: 'POST',
        body: JSON.stringify({ feedback }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to create comment');
      }
    }
  };


  document
    .querySelector('.add-comment')
    .addEventListener('submit', commentHandler);