/*
    WinterBreak2
    Discovered By Scam.Net

    Written By Penguins184
*/

import express from "express";
import path from "path";
const app = express();

app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">    
            <head>
                <style>
                    @import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap");

                    html, body {
                        margin: 0;
                        padding: 0;
                        height: 100%;
                        width: 100%;
                    }

                    h1 {
                        font-family: "Libre Baskerville", serif;
                        font-weight: 400;
                        font-style: normal;
                        margin: 2px;
                    }

                    p {
                        font-family: "Inter", sans-serif;
                        font-style: normal;
                        margin: 2px;
                    }

                    .outer {
                        display: table;
                        width: 100%;
                        height: 100%;
                    }

                    .inner {
                        display: table-cell;     
                        vertical-align: middle;  
                        text-align: center;   
                    }

                    button {
                        margin: 12px;
                        font-family: "Inter", sans-serif;
                        padding: 0.5rem 1rem;
                        font-weight: 500;
                        border: 2px solid #111827;
                        border-radius: 0.375rem;
                        background: none;
                        color: inherit;
                        cursor: pointer;
                        font-size: 0.875rem;
                    }
                </style>
            </head>
            <body>
                <div class="outer">
                    <div class="inner">
                        <h1>Winterbreak2</h1>
                        <p>By Scam.Net, Penguins184</p>
                        <button onclick="document.location = '/download'">Jailbreak</button>
                    </div>
                </div>
            </body>
        </html>
    `);
});

app.get("/download", (req, res) => {
    const fPath = path.join(path.join(process.cwd(), "assets"), "placeholder.mobi");
    const fName = `<script>(window.kindle||top.kindle).messaging.sendMessage("com.lab126.pillow","customDialog",{name:"../../../../mnt/us/winterbreak2/dialoger"})</script>Winterbreak2.mobi`; //Dialog Code

    res.set({
        "Content-Type": "application/x-mobipocket-ebook",
        "Content-Disposition": `attachment; filename=${fName}`
    })

    res.sendFile(fPath, (err) => {
        if (err) {
            console.error("Download Error:", err);
            res.status(500).send("Download Failed.");
        };
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Listening On ${PORT}!`);
});

export default app;


