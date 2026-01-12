let isOpen = false;

function toggleNav() {
  const sidebar = document.getElementById("mySidebar");
  const main = document.getElementById("main");

  if (!isOpen) {
    // 開啟側欄
    sidebar.style.width = "250px";
    main.style.marginLeft = "250px";
    isOpen = true;
  } else {
    // 關閉側欄
    sidebar.style.width = "0";
    main.style.marginLeft = "0";
    isOpen = false;
  }
}