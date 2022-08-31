import express, {Express, Request, Response} from 'express';
const app:Express = express();

app.use(express.json());
const PORT = 3000;

app.get('/',(req: Request, res: Response, next) => {
    res.status(200).json({
        'message': 'Running Node with Express and Typescript'
    });
});

app.listen(PORT, () => {
    console.log(
        `Server running on ${PORT}.`
    )
});