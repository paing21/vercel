import express, { Request, Response } from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config();
const port = 4000;
const apiurl = process.env.Url;

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
app.use(express.static("public"));
app.get("/api", (req: Request, res: Response) => {
  res.send(html);
});

app.get("/api/users", (req: Request, res: Response) => {
  res.send({ name: "mo mo", age: 20 });
});

app.listen(port, () => {
  console.log("I love ma ma");
});
