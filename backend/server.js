import express from 'express';
import request from 'request';
import cheerio from 'cheerio';
const app = express();
import cors from 'cors';

const PORT = 5000;
app.use(cors({
    origin: '*'
}))

app.get('/scrap', (req,res) => {
    let url= req.query.url;
    // let url= 'https://www.flipkart.com/mobiles/pr?sid=tyy%2C4io&p%5B%5D=facets.brand%255B%255D%3DRealme&otracker=nmenu_sub_Electronics_0_Realme';
    let $;
    let item = [];
    request(url, function(error,response,html){
        if (!error) {
            $ = cheerio.load(html);
            if ($('._30jeq3 ')) {
                let uuu = $('._30jeq3 ');
                $('._30jeq3 ').each((i,el) => {
                    item.push($(el).text())
                })
            }
            
        }
        res.status(200).send(item);
    });
});
app.get('/', (req,res) => {
    let url= req.query.url;
    let url= 'https://www.flipkart.com/';
    let $;
    let item = [];
    request(url, function(error,response,html){
        if (!error) {
            $ = cheerio.load(html);
            if ($('._30jeq3 ')) {
                let uuu = $('._30jeq3 ');
                $('._30jeq3 ').each((i,el) => {
                    item.push($(el).text())
                })
            }
            
        }
        res.status(200).send(item);
    });
});

app.listen(PORT,() => console.log(`Server is strated at PORT ${PORT}`));