async function testConnection() {
  const resp = await fetch("/api/");
  const msg = await resp.json();
  console.log(msg);
}

async function registerUser(obj){
  const resp = await fetch("/api/registerUser", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj)
  });
  
  
  const reply = await resp.json()
  return reply;
}

export { testConnection, registerUser };
