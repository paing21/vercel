import express, { Request, Response } from "express";
import dotenv from "dotenv";
const app = express();
app.use(express.static("public"));
dotenv.config();
const port = 4000;
const apiurl = process.env.Url;
console.log(apiurl);

const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script type ="text/javascript">
    localStorage.setItem('Url','${apiurl}')
    window.location.href = "/"
    </script>
  </body>
</html>

`;

app.get("/api", (req: Request, res: Response) => {
  res.send(html);
});

app.get("/api/users", (req: Request, res: Response) => {
  res.send(JSON.stringify({ name: "mo mo", email: "momo@gmail.com", age: 20 }));
});

app.listen(port, () => {
  console.log("I love ma ma");
});
