async function getEmbed(description) {
  const resp = await fetch("/api/embedify", {
    method: "POST",
    body: JSON.stringify({
      body: description,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const msg = await resp.json();
  const j = JSON.parse(msg);
  console.log(j);
}

const insert = async (name, description) => {
  const resp = await fetch("/api/insert", {
    method: "POST",
    body: JSON.stringify({
      name: name,
      body: description,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const obj = await resp.json();
  return obj;
};

// const getPersona = async (name) => {
//     const msg = await fetch("/api/getPersona");
// }

const getPersonas = async () => {
  const msg = await fetch("/api/getPersonas");
  const obj = await msg.json();
  return obj;
};

const getPersona = async (id) => {
  const resp = await fetch("/api/getPersona", {
    method: "POST",
    body: JSON.stringify({
      id: id,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const obj = await resp.json();
  return obj;
};

export { getEmbed, insert, getPersona, getPersonas };
