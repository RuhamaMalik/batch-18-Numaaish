const user = JSON.parse(localStorage.getItem("user"))
if (user) {
  if (user["role"] !== "user") {
    window.location.replace("/")
  }
}

