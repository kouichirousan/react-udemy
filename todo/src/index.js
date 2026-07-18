const onClickAdd = () =>{
  const inputText = document.getElementById("add-text").value;
  alert(inputText);
  document.getElementById("add-text").value = "";

  const li = document.createElement("li");
  // console.log(li);

  const div = document.createElement("div");
  div.classList.add('flex', 'list-row');

  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = inputText;

  div.appendChild(p);
  li.appendChild(div);
  // console.log(li);

  document.getElementById("imcomplete-list").appendChild(li);
}

document.getElementById("add-button").addEventListener("click", onClickAdd);

