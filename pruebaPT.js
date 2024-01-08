import puppeteer from "puppeteer";

const raes = {

    /* RAE INTERNO(oficina todos los clientes) */
    //RAE 1 Maritimo
    
    link1 : 'a[href="https://pacertime.azurewebsites.net/inscribirse/ultra-trail-huatusco-2024"]',
    link2 : 'a[href="https://pacertime.azurewebsites.net/events"]',

/*
link1 : 'https://pacertime.azurewebsites.net/inscribirse/ultra-trail-huatusco-2024',
link2 : 'https://pacertime.azurewebsites.net/events',
*/

}

async function prueba() {
    const browser = await puppeteer.launch({
        headless : 'true',
        //slowMo: 200
    });

    const page = await browser.newPage();
    await page.goto('https://pacertime.azurewebsites.net/show/ultra-trail-huatusco-2024');

    for(const rae in raes){
        console.log(`${rae}: ${raes[rae]}`);
        let reporte = `${rae}`;
        await page.click(raes[rae],{
            waitUntil: "load",
        })
        //.catch((err) => console.log("error loading url", err));
        //console.timeEnd("goto");
        const words = ['error'];
        const pageContent = await page.$eval('body',el => el.textContent )
        const result = pageContent.split(/\s+/).filter(text => words.includes(text.toLowerCase()));

        //console.log(result.length+ ' re.\n');

        if(result.length > 0){
            console.log('Error al enviar: ' + reporte );
            console.log('*******\n');
        }else{
            console.log(reporte + ' ha sido enviado.');
            console.log('-------\n');
            await page.screenshot({path: reporte+'.png'});
        }
        
        //await page.screenshot({path: reporte+'.png'});
        //await browser.close()
        //console.log(reporte + ' ha sido enviado.\n');

    };

    await browser.close();


};

prueba()