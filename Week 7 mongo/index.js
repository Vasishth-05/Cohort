const app = express();
const { userModel , todoModel } = require('./db');
const { auth , JWT_SECRET } = require('./auth');
const jwt = require('jsonwebtoken');
const { default: mongoose } = require('mongoose');
const bcrypt = require('bcrypt');

app.use(express.json());

mongoose.connect('mongodb+srv://Vasishth:mongo%4029@cluster0.sl1ojdh.mongodb.net/todo-app-database');

app.post('/signup', async function(req,res){

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    const hashedPassword = await bcrypt.hash(password, 10);

    await userModel.create({
        email : email,
        password : hashedPassword,
        name : name
    });

    res.json({
        message : 'You are signed up'
    })

});

app.post('/signin', async function(req,res){
    const email = req.body.email;
    const password = req.body.password;

    const user = await userModel.findOne({
        email : email
    });

    const passwordMatch = bcrypt.compare(password, user.password);

    if(user && passwordMatch){

        const token = jwt.sign({
            id : user._id.toString()
        }, JWT_SECRET);

        res.json({
            token : token
        })
    } else {

        res.status(403).json({
            message : 'Credentials Incorrect'
        })

    }
});

app.post('/todo', auth , async function(req,res){

   const userId = req.body.userId;
   const title = req.body.title;
   const done = req.body.done;

   await todoModel.create({
    userId : userId,
    title : title,
    done : done
   })

   res.json({
    message : 'Todo created'
   })

})

app.get('/todos', auth , async function(req,res){
    const userId = req.userId;

    const todos = await todoModel.find({
        userId : userId
    })

    res.json({
        todos : todos
    })
});

app.listen(3000);r