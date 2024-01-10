/*https://www.urlbox.io/puppeteer-wait-for-page-load*/
import puppeteer from "puppeteer";

const raes = {

    /* RAE INTERNO(oficina todos los clientes) */
    //RAE 1 Maritimo
    RAE_1_Maritimo_MZO : 'https://webdev.galvan.com/ion/rae/RAE-M.cfm?A%3E%29%25%3BMX%3A%22%3DM%260N%3BN%2E%3D%3F%3EAAEY%29VHLAFET%23%28YF65%5F%2B%2BQCQ%2D%0A',
    RAE_1_Maritimo_VER : 'https://webdev.galvan.com/ion/rae/RAE-M.cfm?A%3E%29%25%3BMX%3A%22%3DM%220N%3BN%2E%3D%3F%3EAAEY%29VHLAFET%23%28YF65%5F%2B%2BQCQ%2D%0A',
    RAE_1_Maritimo_LZC : 'https://webdev.galvan.com/ion/rae/RAE-M.cfm?A%3E%29%25%3BMX%3A%22%3DM%5E0N%3BN%2E%3D%3F%3EAAEY%29VHLAFET%23%28YF65%5F%2B%2BQCQ%2D%0A',
    RAE_1_Maritimo_ALT: 'https://webdev.galvan.com/ion/rae/RAE-M.cfm?B%3E%29%25%3BMX%3A%22%3DM%3A%26%5EK%2E%22%3F%3F%2BPXF%29%3FC%5FT%23%405H9%24K%26%3A7%5F%3E%3AH%40%21%3B%5BP%20%20%0A',
    //RAE 2 Aereo *NUEVO*
    RAE_2_Aereo_NUEVO_MEX : 'https://webdev.galvan.com/ion/rae/RAE-M-A.cfm?A%3E%29%25%3BMX%3A%22%3DM20N%3BN%2E%3D%3F%3EAAEY%29VHLAFET%23%28YF65%5F%2B%2BQCQ%2D%0A',
    RAE_2_Aereo_NUEVO_GDL : 'https://webdev.galvan.com/ion/rae/RAE-M-A.cfm?A%3E%29%25%3BMX%3A%22%3DM%2E0N%3BN%2E%3D%3F%3EAAEY%29VHLAFET%23%28YF65%5F%2B%2BQCQ%2D%0A',
    RAE_2_Aereo_NUEVO_QRO : 'https://webdev.galvan.com/ion/rae/RAE-M-A.cfm?B%3E%29%25%3BMX%3A%22%3DM6%27%5EK%2E%22%3F%3F%2BPXF%29%3FC%5FT%23%405H9%24K%26%3A7%5F%3E%3AH%40%21%3B%5BP%20%20%0A',

    //RAE Maritimo/Aereo (HP)
    RAE_Maritimo_Aereo_HP_TODOS:'https://webdev.galvan.com/ion/rae/RAE-HP-A_M.cfm?office=%22%2EL8%20%0A&email=%233I%29%2E%0A&PrintEmail=%233I%29%2E%0A',
    //RAE 5 Op. Especiales
    RAE_5_Op_Especiales : 'https://webdev.galvan.com/ion/rae/RAE-OpeEsp.cfm?B%3E%29%25%3BMX%3A%22%3DLJ%27%5EK%2E%22%3F%3F%2BPXF%29%3FC%5FT%23%405H9%24K%26%3A7%5F%3E%3AH%40%21%3B%5BP%20%20%0A',

    /* RAE PERSONALIZADOS */
    // RAE Laredo (HP)
    RAE_Laredo_HP : 'https://webdev.galvan.com/ion/rae/RAE-HP.cfm?A%3E%29%25%3BMX%3A%22%3DM%3A0N%3BN%2E%3D%3F%3EAAEY%29VHLAFET%23%28YF65%5F%2B%2BQCQ%2D%0A' ,
    // RAE Laredo (GGI - RAMSA)
    RAE_Laredo_GGI_RAMSA_GGI : 'https://webdev.galvan.com/ion/rae/RAE_3_3.cfm?M%3E%29%25%3BMX%3A%22%3DM%3A0N%3BN%2E%3D%3F%3EAAEY%29VHLAFET%23%28YF65%5F%2B%2BQCQ%2DNO%21%22A%5CJRBI%2FB%28%20%3F%5E%0A%21C0%20%20%0A' ,
    RAE_Laredo_GGI_RAMSA_MEX : 'https://webdev.galvan.com/ion/rae/RAE_2_2.cfm?M%3E%29%25%3BMX%3A%22%3DM20N%3BN%2E%3D%3F%3EAAEY%29VHLAFET%23%28YF65%5F%2B%2BQCQ%2DNO%21%22A%5CJRBI%2FB%28%20%3F%5E%0A%21C0%20%20%0A' ,
    // RAE Laredo/NLaredo (INVISTA)
    RAE_Laredo_NLaredo_INVISTA_1 : 'https://webdev.galvan.com/ion/rae/RAE_3_2.cfm?A%3E%29%25%3BMX%3A%22%3DM%3A0N%3BN%2E%3D%3F%3EAAEY%29VHLAFET%23%28YF65%5F%2B%2BQCQ%2D%0A' ,
    RAE_Laredo_NLaredo_INVISTA_2: 'https://webdev.galvan.com/ion/rae/RAE_4_2.cfm?A%3E%29%25%3BMX%3A%22%3DM60N%3BN%2E%3D%3F%3EAAEY%29VHLAFET%23%28YF65%5F%2B%2BQCQ%2D%0A' ,

    //RAE 3.4 Kuehne Nagel LTX
    RAE_3_4_Kuehne_Nagel_LTX : 'https://webdev.galvan.com/ion/rae/RAE_3_4.cfm?A%3E%29%25%3BMX%3A%22%3DM%3A0N%3BN%2E%3D%3F%3EAAEY%29VHLAFET%23%28YF65%5F%2B%2BQCQ%2D%0A' ,
    //RAE 5.1 Ope Esp (HP)
    RAE_5_1_Ope_Esp_HP : 'https://webdev.galvan.com/ion/rae/RAE_5_1.cfm?A%3E%29%25%3BMX%3A%22%3DM%2A0N%3BN%2E%3D%3F%3EAAEY%29VHLAFET%23%28YF65%5F%2B%2BQCQ%2D%0A' ,

    /* RAE EXTERNO */
    /*RAE 6.1 clientes*/
    RAE_6_1_clientes_MEX:'https://webdev.galvan.com/ion/rae/RAE_6_1.cfm?A%3E%29%25%3BMX%3A%22%3DM20N%3BN%2E%3D%3F%3EAAEY%29VHLAFET%23%28YF65%5F%2B%2BQCQ%2D%0A',
    RAE_6_1_clientes_GDL:'https://webdev.galvan.com/ion/rae/RAE_6_1.cfm?A%3E%29%25%3BMX%3A%22%3DM%2E0N%3BN%2E%3D%3F%3EAAEY%29VHLAFET%23%28YF65%5F%2B%2BQCQ%2D%0A',
    RAE_6_1_clientes_MZO:'https://webdev.galvan.com/ion/rae/RAE_6_1.cfm?A%3E%29%25%3BMX%3A%22%3DM%260N%3BN%2E%3D%3F%3EAAEY%29VHLAFET%23%28YF65%5F%2B%2BQCQ%2D%0A',
    RAE_6_1_clientes_VER: 'https://webdev.galvan.com/ion/rae/RAE_6_1.cfm?A%3E%29%25%3BMX%3A%22%3DM%220N%3BN%2E%3D%3F%3EAAEY%29VHLAFET%23%28YF65%5F%2B%2BQCQ%2D%0A',
    RAE_6_1_clientes_LZC:'https://webdev.galvan.com/ion/rae/RAE_6_1.cfm?A%3E%29%25%3BMX%3A%22%3DM%5E0N%3BN%2E%3D%3F%3EAAEY%29VHLAFET%23%28YF65%5F%2B%2BQCQ%2D%0A',
    RAE_6_1_clientes_ALT : 'https://webdev.galvan.com/ion/rae/RAE_6_1.cfm?B%3E%29%25%3BMX%3A%22%3DM%3A%26%5EK%2E%22%3F%3F%2BPXF%29%3FC%5FT%23%405H9%24K%26%3A7%5F%3E%3AH%40%21%3B%5BP%20%20%0A',
    RAE_6_1_clientes_QRO:'https://webdev.galvan.com/ion/rae/RAE_6_1.cfm?B%3E%29%25%3BMX%3A%22%3DM6%27%5EK%2E%22%3F%3F%2BPXF%29%3FC%5FT%23%405H9%24K%26%3A7%5F%3E%3AH%40%21%3B%5BP%20%20%0A',
    /* RAE 6.3 Clientes - Todos */
    RAE_6_3_Clientes_TODOS:'https://webdev.galvan.com/ion/rae/RAE_6_3.cfm?A%3E%29%25%3BMX%3A%22%3DM%3A0N%3BN%2E%3D%3F%3EAAEY%29VHLAFET%23%28YF65%5F%2B%2BQCQ%2D%0A',
};
/*
const raesLargos = {

    //RAE 3 Terrestre GGI(imp) Laredo - Todos
    RAE_3_Terrestre_GGI_imp_Laredo : 'a[href="https://webdev.galvan.com/ion/rae/RAE-Laredo.cfm?A%3E%29%25%3BMX%3A%22%3DM%3A0N%3BN%2E%3D%3F%3EAIEY%29VHLAFET%23%28YF65%5F%2B%2BQCQ%2D%0A"]',
    //RAE 4 Terrestre NLaredo - Todos
    RAE_4_Terrestre_NLaredo : 'a[href="https://webdev.galvan.com/ion/rae/RAE-NLD.cfm?A%3E%29%25%3BMX%3A%22%3DM60N%3BN%2E%3D%3F%3EAAEY%29VHLAFET%23%28YF65%5F%2B%2BQCQ%2D%0A"]',
    //RAE 6.4 NLaredo - Todos
    RAE_6_4_NLaredo : 'a[href="https://webdev.galvan.com/ion/rae/RAE_6_4.cfm?A%3E%29%25%3BMX%3A%22%3DM60N%3BN%2E%3D%3F%3EAAEY%29VHLAFET%23%28YF65%5F%2B%2BQCQ%2D%0A"]',
};
*/

async function test() {
    const browser = await puppeteer.launch({
        headless : 'true',
        //slowMo: 200
    });

    const page = await browser.newPage();
    //await page.goto('https://webdev.galvan.com/ion/rae/menu_rae.cfm');

    for(const rae in raes){
        //console.log(`${rae}: ${raes[rae]}`);
        let reporte = `${rae}`;
        await page.goto(raes[rae],{
            waitUntil: "load",
        })

        const words = ['error'];
        const pageContent = await page.$eval('body',el => el.textContent )
        const result = pageContent.split(/\s+/).filter(text => words.includes(text.toLowerCase()));

        if(result.length > 0){
            console.log('Error al enviar: ' + reporte );
            console.log('*******\n');
            await page.screenshot({path: 'Error-'+reporte+'.png'});
        }else{
            console.log(reporte + ' ha sido enviado.');
            console.log('-------\n');
            await page.screenshot({path: reporte+'.png'});
        }

    };

    await browser.close();


};

test()