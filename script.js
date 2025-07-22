    function openTab(evt, tabId, color) {
      const tabContents = document.querySelectorAll('.tab-content');
      const tabButtons = document.querySelectorAll('.tab-button');

      tabContents.forEach(c => c.classList.remove('active'));
      tabButtons.forEach(b => {
	      b.className = 'tab-button';
	      b.style.backgroundColor = "#2c2c2c";
      });
      document.getElementById(tabId).classList.add('active');
      evt.currentTarget.classList.add('active');
      evt.currentTarget.style.backgroundColor = color;
      evt.currentTarget.style.color = "#fff";  
    }

  
