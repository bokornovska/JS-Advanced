function solve(){
   

   let creatorElement = document.getElementById('creator');
   let titleElement = document.getElementById('title');
   let categoryElement = document.getElementById('category');
   let contentElement = document.getElementById('content');

   let sectionSiteContent = document.querySelector('.site-content section');

   let createBtnElement = document.querySelector('button');

   createBtnElement.addEventListener('click', onCreate);

   function onCreate(e){
      e.preventDefault();

      let creator = creatorElement.value;
      let title = titleElement.value;
      let category = categoryElement.value;
      let content = contentElement.value;

      const article = document.createElement("article");

      const h1Title = document.createElement("h1");
      h1Title.textContent = title;

      const pCategory = document.createElement("p");
      pCategory.textContent = `Category:`;

      const strongCategory = document.createElement("strong");
      strongCategory.textContent = category;

      const pCreator = document.createElement("p");
      pCreator.textContent = `Creator:`;

      const strongCreator = document.createElement("strong");
      strongCreator.textContent = creator;

      const pContent = document.createElement("p");
      pContent.textContent = content;

      const divButtons = document.createElement("div");
      divButtons.classList.add("buttons");

      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("btn");
      deleteBtn.classList.add("delete");
      deleteBtn.textContent = "Delete";

      const archiveBtn = document.createElement("button");
      archiveBtn.classList.add("btn");
      archiveBtn.classList.add("archive");
      archiveBtn.textContent = "Archive";

      article.appendChild(h1Title);
      article.appendChild(pCategory);
      pCategory.appendChild(strongCategory);
      article.appendChild(pCreator);
      pCreator.appendChild(strongCreator);
      article.appendChild(pContent);
      article.appendChild(divButtons);
      divButtons.appendChild(deleteBtn);
      divButtons.appendChild(archiveBtn);
      
      sectionSiteContent.appendChild(article);

      archiveBtn.addEventListener('click', () => {

         article.remove();

         const olArchive = document.querySelector("ol");

         const liArchive = document.createElement("li");
         liArchive.textContent = title;
         olArchive.appendChild(liArchive);

         //Сортиране на резултата:
         const titles = Array.from(document.querySelectorAll("li"));
         titles
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach((node) => olArchive.appendChild(node));
      });

      deleteBtn.addEventListener('click', () =>{
         article.remove();
      })
      
      }
   }
  
