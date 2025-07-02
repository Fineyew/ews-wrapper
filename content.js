window.addEventListener('load', () => {
  const userInput = document.getElementById("Login_UserName");
  if (userInput) {
    userInput.focus();
  }

  const star1 = document.getElementById("Login_UserNameRequired");
  const star2 = document.getElementById("Login_PasswordRequired");
  if (star1) star1.style.visibility = "hidden";
  if (star2) star2.style.visibility = "hidden";

  const overlay = document.createElement("div");
  overlay.innerText = "🌓 Dark Theme Active";
  overlay.style.position = "fixed";
  overlay.style.top = "10px";
  overlay.style.right = "10px";
  overlay.style.padding = "8px 12px";
  overlay.style.background = "#0097A9";
  overlay.style.color = "#fff";
  overlay.style.fontSize = "12px";
  overlay.style.borderRadius = "5px";
  overlay.style.zIndex = 9999;
  document.body.appendChild(overlay);
});