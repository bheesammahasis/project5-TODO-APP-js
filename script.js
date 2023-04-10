//
   let data = [];
   let cardId;
// show Add card popup
   function showAddCardPop() {
    const popup1 = document.getElementById("popup1");
    popup1.style.display = "block";
    const heading = document.getElementById("h2");
    h2.style.display = "block";
    document.getElementById("opacity1").style.filter = "blur(10px)";
  }
 // close Add card popup
   function closeAddCardPopup() {
    const popup1 = document.getElementById("popup1");
    popup1.style.display = "none";
    const heading = document.getElementById("h2");
    h2.style.display = "none";
    document.getElementById("opacity1").style.filter = "blur(0px)";
   }

  function handleAddCard() {
  const cardText = document.getElementById("myInput").value;
  const card = {
    id: new Date().getTime().toString(),
    cardTitle: cardText,
  };
  if (cardText) {
    data.push(card);
    renderCards();
  } else {
    alert("Please add card Name");
  }
  console.log("data1",data);
  document.getElementById("myInput").value = "";
  closeAddCardPopup();
  }

    //

  function renderContent(){
    for(let i=0;i<data.length;i++){
          const ulElement=document.getElementById(`content_list_${data[i].id}`);
          let child="";
          for(let j = 0; j < data[i].content.length;j++){
          const content = data[i].content[j];
          child += `<li id="content_${content.id}"  onclick="doneTask(${content.id})">${content.contentText}</li>` 
          }
          ulElement.innerHTML= child;
        }
  }


  function renderCards() {
  const cardcontainer = document.getElementById("container");
  let child = "";
   for (let i = 0; i < data.length; i++) {
    console.log("data[i]:", data[i]);
    child += `<div id="card_${data[i].id}" class="card">
        <p class="p2">${data[i].cardTitle}</p>
        <hr>
        <div class="item1">
        <Button onclick="deleteCard(${data[i].id})" class="delete">-Del</Button>
        <Button onclick="showAddContentToCardPopup(${data[i].id})" 
         class="add">+add</Button>
        <ul id="content_list_${data[i].id}">
         </ul>
        </div>
        </div>`;
  }
   cardcontainer.innerHTML = child;
     closeAddCardPopup();
     removeAddContentToCardPopup();
    // renderContent();
   }

  function deleteCard(id) {
  const cardcontainer = document.getElementById("container");
  console.log("CardContainer:",cardcontainer);
  const cardId = `card_${id}` ;
  const card = document.getElementById(cardId);
  //remove child from parent node
  card.parentNode.removeChild(card);
  data = data.filter(item => item.id !== cardId);//why not work?
  console.log("id of card to be deleted", id);
  console.log("updated data", data);
  }

  function showAddContentToCardPopup(id) {
  const popup2 = document.getElementById("popup2");
  popup2.style.display = "block";
  cardId = id;
  const heading = document.getElementById("h2");
    h2.style.display = "block";
    document.getElementById("opacity1").style.filter = "blur(10px)";
  }

  function removeAddContentToCardPopup() {
  const popup2 = document.getElementById("popup2");
  popup2.style.display = "none";
  const heading = document.getElementById("h2");
    h2.style.display = "none";
    document.getElementById("opacity1").style.filter = "blur(0px)";
  }

  function addContentToCard() {
  const contentListId = `content_list_${cardId}`;
  const Ul = document.getElementById(contentListId);
  const contentText = document.getElementById("myInput1").value;
  if(!contentText) {
    alert("Please add task name");
     }
     else {
    document.getElementById("myInput1").value = "";
    const liNode = document.createElement("li");
    liNode.className="checked"
    liNode.innerHTML = contentText;
    Ul.appendChild(liNode);
    removeAddContentToCardPopup();
    /*liNode.addEventListener('click',()=>{
      liNode.style.textDecoration='line-through';
    })*/
    console.log("data",data);
    for(let i=0;i<data.length;i++){
      console.log("content...",data[i].id,cardId);
      if(data[i].id == cardId){
          const content={
          id:new Date().getTime().toString(),
          contentText: contentText,
          done:false,
        }
        data[i].content.push(content);
        console.log(data[i]);
      }
    }
  }
  }

  function doneTask(id){
         const contentId = `content_${id}`
         const liElement = document.getElementById(contentId);
         liElement.classList.toggle("checked");
  }




