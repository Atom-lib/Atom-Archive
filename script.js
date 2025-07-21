    function openTab(evt, tabId, colorClass) {
      const tabContents = document.querySelectorAll('.tab-content');
      const tabButtons = document.querySelectorAll('.tab-button');

      tabContents.forEach(c => c.classList.remove('active'));
      tabButtons.forEach(b => b.classList.remove('active', 'blue', 'green'));

      document.getElementById(tabId).classList.add('active');
      evt.currentTarget.classList.add('active', colorClass);
    }

    // Toggle subtopic content
    document.addEventListener("DOMContentLoaded", () => {
      const headers = document.querySelectorAll(".toggle-header");

      headers.forEach(header => {
        header.addEventListener("click", () => {
          const content = header.nextElementSibling;
          const isVisible = content.style.display === "block";

          content.style.display = isVisible ? "none" : "block";
          header.classList.toggle("active", !isVisible);
        });
      });
    });
