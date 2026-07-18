const onClickAdd = () =>{
  const inputText = document.getElementById("add-text").value;
  // alert(inputText);
  document.getElementById("add-text").value = "";

  const li = document.createElement("li");
  // console.log(li);

  const div = document.createElement("div");
  div.classList.add('flex', 'list-row');

  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = inputText;

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.classList.add('rounded', 'border-none', 'px-[2vw]', 'mx-[1vw]', 'md-[1vh]', 'bg-gray-100', 'hover:bg-[#79a8a9]', 'hover:text-[#fff]', 'hover:cursor-pointer');
  completeButton.addEventListener("click", () => {
    alert("完了");
  })

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.classList.add('rounded', 'border-none', 'px-[2vw]', 'bg-gray-100', 'hover:bg-[#79a8a9]', 'hover:text-[#fff]', 'hover:cursor-pointer');
  deleteButton.addEventListener("click", () => {
    alert("削除");
  })

  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);
  // console.log(li);

  document.getElementById("imcomplete-list").appendChild(li);
}

document.getElementById("add-button").addEventListener("click", onClickAdd);

