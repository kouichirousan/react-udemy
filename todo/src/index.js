const onClickAdd = () =>{
  const inputText = document.getElementById("add-text").value;
  // alert(inputText);
  document.getElementById("add-text").value = "";

  createIncompleteTodo(inputText);
}

// 渡された引数を元に未完了のTODOを作成する関数
const createIncompleteTodo = (todo) => {
    const li = document.createElement("li");
  // console.log(li);

  const div = document.createElement("div");
  div.classList.add('flex', 'list-row');

  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = todo;

  // 完了タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.classList.add('rounded', 'border-none', 'px-[2vw]', 'mx-[1vw]', 'md-[1vh]', 'bg-gray-100', 'hover:bg-[#79a8a9]', 'hover:text-[#fff]', 'hover:cursor-pointer');
  completeButton.addEventListener("click", () => {
    const moveTarget = completeButton.closest("li");
    // 削除ボタンを取得してremoveで消している
    completeButton.nextElementSibling.remove();
    completeButton.remove();
    // 戻すボタンを生成してdivタグは以下に設定
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    moveTarget.firstElementChild.appendChild(backButton);
    backButton.classList.add('rounded', 'border-none', 'px-[2vw]', 'mx-[1vw]', 'md-[1vh]', 'bg-gray-100', 'hover:bg-[#79a8a9]', 'hover:text-[#fff]', 'hover:cursor-pointer');
    // 完了リストに移動
    document.getElementById("complete-list").appendChild(moveTarget);
    backButton.addEventListener("click", () => {
      const todoText = backButton.previousElementSibling.innerText;
      createIncompleteTodo(todoText);
      backButton.closest("li").remove();
    });
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.classList.add('rounded', 'border-none', 'px-[2vw]', 'bg-gray-100', 'hover:bg-[#79a8a9]', 'hover:text-[#fff]', 'hover:cursor-pointer');
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.closest("li");
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  })

  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);
  // console.log(li);

  document.getElementById("incomplete-list").appendChild(li);

};

document.getElementById("add-button").addEventListener("click", onClickAdd);

