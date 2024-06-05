document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Example of dynamic content loading
    const reviewsSection = document.getElementById('reviews');
    const reviews = [
      {
        text: "Crest has transformed our inventory management. We no longer worry about stockouts or overstocking!",
        author: "Alex P., Retail Manager"
      },
      {
        text: "The automation and real-time updates have saved us so much time and money.",
        author: "Jamie L., Warehouse Operator"
      },
      {
        text: "Highly recommend Crest for anyone looking to streamline their inventory processes.",
        author: "Taylor M., Supply Chain Director"
      }
    ];
  
    function loadReviews() {
      reviews.forEach(review => {
        const reviewDiv = document.createElement('div');
        reviewDiv.classList.add('review');
        reviewDiv.innerHTML = `<p>"${review.text}"</p><p>- ${review.author}</p>`;
        reviewsSection.appendChild(reviewDiv);
      });
    }
  
    loadReviews();
  });
  