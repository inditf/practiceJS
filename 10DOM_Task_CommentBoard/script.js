
//留言数据对象
const comments = [
  {
    name: 'Danny',
    comment: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    time: 'Thu Jan 12 2022'
  },
  {
    name: 'Jackson',
    comment: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit',
    time: 'Thu Jan 11 2022'
  }

];

/**
 * @description 基于comments数据，完成渲染留言板渲染
 * @param {object[]} comments
 */
const renderComments = (comments) => {
  const container = document.querySelector("#comments");
  let html = '';
  comments.forEach((com) => {
    html += `<span class = "comments-iteam">
    <hr/><h4><span>${com.name} </span><span class="date">${com.time}</span></h4>
    <p>${com.comment}</p> </span >`;
  });
  container.insertAdjacentHTML('beforeend', html);
}

// 调用
renderComments(comments);

/**
 * @description 基于comments数据，完成添加一条留言，注意安全问题
 * @param {object[]} comments
 */
const postComment = (comments) => {
  const nameInput = document.querySelector("#name").value;
  // console.log(nameInput);
  const commentInput = document.querySelector("#comment").value;
  // console.log(commentInput);
  const time = new Date().toDateString();
  const newComment = { name: nameInput, comment: commentInput, time: time };
  comments.unshift(newComment);
  console.log(comments);
  const newCommentSpan = document.createElement("span");

  newCommentSpan.classList.add("comments-iteam");
  newCommentSpan.innerHTML = `<hr/><h4><span class="newName" > </span> 
                            <span class="date">${newComment.time}</span></h4> 
                            <p class ="newComment"></p></span>`;
  const container = document.querySelector("#comments");
  container.insertBefore(newCommentSpan, container.firstChild);
  document.querySelector(".newName").textContent = newComment.name;
  document.querySelector(".newComment").textContent = newComment.comment;
}
document.querySelector("button[type=submit]").addEventListener('click', () => postComment(comments));
/**
 * @description 切换关闭留言和开启留言两种模式
 */
const toggleComment = () => {
  const nameInput = document.querySelector("#name");
  const commentInput = document.querySelector("#comment");
  const submitBtn = document.querySelector("button[type=submit]");
  // const closeBtn = document.getElementsByClassName("colse");
  const closeBtn = document.querySelector(".close");
  if (nameInput.disabled == true) {
    nameInput.disabled = false;
    commentInput.disabled = false;
    submitBtn.disabled = false;
    closeBtn.textContent = '关闭留言';
  }
  else {
    nameInput.disabled = true;
    commentInput.disabled = true;
    submitBtn.disabled = true;
    closeBtn.textContent = '开启留言';
  }
}
document.querySelector(".close").addEventListener('click', () => toggleComment());
