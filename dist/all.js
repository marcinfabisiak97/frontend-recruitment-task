const refreshPage=()=>{window.location.reload(),localStorage.clear()},clickCounter=(document.querySelector(".reset").addEventListener("click",refreshPage),()=>{1<=parseInt(localStorage.getItem("clickcount"))&&localStorage.getItem("clickcount")<5?localStorage.clickcount=Number(localStorage.clickcount)+1:5<=parseInt(localStorage.getItem("clickcount"))?(localStorage.clickcount=Number(localStorage.clickcount)+1,document.querySelector(".reset").classList.add("reset__acive")):localStorage.clickcount=1,document.querySelector(".display").innerHTML=localStorage.clickcount}),closeModalButtons=(document.querySelector(".clicker").addEventListener("click",clickCounter),document.querySelectorAll("[data-close-button]")),overlay=document.getElementById("overlay"),closeModal=e=>{null!=e&&(e.classList.remove("active"),overlay.classList.remove("active"))},openModal=(overlay.addEventListener("click",()=>{const e=document.querySelectorAll(".modal.active");e.forEach(e=>{closeModal(e)})}),closeModalButtons.forEach(c=>{c.addEventListener("click",()=>{var e=c.closest(".modal");closeModal(e)})}),e=>{null!=e&&(e.classList.add("active"),overlay.classList.add("active"))}),openModalButtons=document.querySelectorAll("[data-modal-target]");openModalButtons.forEach(c=>{c.addEventListener("click",()=>{var e=document.querySelector(c.dataset.modalTarget);openModal(e)})});