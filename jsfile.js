async function saveMessage() {
    const message = document.getElementById("messageInput").value;

    await fetch("/save", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: message })
    });

    loadMessages();
}

async function loadMessages() {
    const res = await fetch("/messages");
    const data = await res.json();

    const list = document.getElementById("messageList");
    list.innerHTML = "";

    data.forEach(msg => {
        const li = document.createElement("li");
        li.textContent = msg;
        list.appendChild(li);
    });
}

loadMessages();
