const express = require("express");
const cors = require("cors");
const { userRouter } = require("./routers/routes/userRouter");
const app = express();


app.use(express.json());


app.use(cors());
app.use('/users', userRouter);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});

