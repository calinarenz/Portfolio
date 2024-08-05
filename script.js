document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.navbar a');
    const tabContents = document.querySelectorAll('.tabcontent');
  
    tabs.forEach(tab => {
      tab.addEventListener('click', function(e) {
        e.preventDefault();
  
        // Remove active class from all tabs
        tabs.forEach(tab => tab.classList.remove('active'));
  
        // Add active class to the clicked tab
        this.classList.add('active');
  
        // Hide all tab contents
        tabContents.forEach(content => content.classList.remove('active'));
  
        // Show the corresponding tab content
        const target = this.getAttribute('data-target');
        const targetContent = document.getElementById(target);
        targetContent.classList.add('active');
      });
    });
  });
  