const Cards = document.getElementsByClassName("card")[0];
class Card{
	static colors = ["#3498db", "#27ae60", "#db8534", "#db3434"];
	static i = 0;
	static Icons = {
		"youtu":"fab fa-youtube",
		"book": "fas fa-book",
		"pdf": "fas fa-file-pdf",
		"https": "fas fa-globe"
	}
   	static Default = true;
	constructor(title){
		this.category = document.createElement("div");
		this.category.className = "tab-content";
		this.category.id = title.replace(/_/g," ");
		this.color = Card.colors[Card.i];
		Cards.appendChild(this.category);
		const button = document.createElement("button");
		button.onclick = ()=>openTab(event, title,this.color||"pink");// default color is pink if color is undefined.
		document.getElementsByClassName("tabs")[0].appendChild(button);
		button.textContent = title;
		button.className = "tab-button ";
		Card.i++;
		if(Card.Default){
			button.click();
			Card.Default = false;
		}
	}
	//Creates ul>li for each link
	Ul(title,href){
		const li = document.createElement("li");
		const a = document.createElement("a");
		const i = document.createElement("i");
		this.ul.appendChild(li);
		a.href = href;
		a.textContent = title.replace(/_/g, " ")+" ";//replaces _ with spaces
		a.target = "_blank";
		a.style.color = this.color;	
		for (const icon in Card.Icons){
			if(href.includes(icon)){
				i.className = Card.Icons[icon];
				break;
			}
		}
		li.appendChild(a);
		a.appendChild(i);
		
	}
	// Create Sub Category
	subCategory(title){
		this.ul= document.createElement("ul");
		const div= document.createElement("div");
		const section = document.createElement("div")
		section.className = "section";
		const h3 = document.createElement("h3");
		if(title != "General"){
			section.appendChild(h3);
			div.className = "toggle-content";
			h3.textContent=title.replace(/_/g, " ");// replaces _ with spaces
			h3.className = "toggle-header";
		}else
			this.ul.className = "general-links";
		div.appendChild(this.ul);
		section.appendChild(div);
		this.category.appendChild(section);
		h3.addEventListener("click", () => {
          		const content = h3.nextElementSibling;
          		const isVisible = content.style.display === "block";
          		content.style.display = isVisible ? "none" : "block";
         	 	h3.classList.toggle("active", !isVisible);
        	});

	}
}

// fetches data form data.json	
async function Handle_Data(){
	const response = await fetch('data.json');
      	const data = await response.json();

      	for (const category in data) {
		let Category = new Card(category)
		
		for (const subCategory in data[category]) {
			Category.subCategory(subCategory);
			for(const li in data[category][subCategory]){
				Category.Ul(li,data[category][subCategory][li]);
			}
		}
		
	}
}
Handle_Data();
