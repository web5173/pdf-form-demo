// import { PDFDocument } from "pdf-lib";
import { PDFDocument } from 'https://cdn.bootcdn.net/ajax/libs/pdf-lib/1.17.1/pdf-lib.esm.min.js'

export async function fillForm() {
    // const formUrl = "https://pdf-lib.js.org/assets/dod_character.pdf";
    //   const formUrl = "http://localhost:3000/form.pdf"
    console.time('fillForm》》》》》')
    const formUrl = "form.pdf"
    const formPdfBytes = await fetch(formUrl,).then((res) => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(formPdfBytes);
    const form = pdfDoc.getForm();
    for (let i = 0; i < 9; i++) {
        form.getTextField(`a${i + 1}`).setText(`KeDa-a${i + 1}`);
        form.getTextField(`b${i + 1}`).setText(`KeDa-b${i + 1}`);
    }
    const pdfBytes = await pdfDoc.save();
    console.timeEnd('fillForm》》》》》')
    return pdfBytes;
}

// Deno.serve(async (_req) => {
//   const headers = { "content-type": "application/pdf; charset=utf-8" };
//   const body = await fillForm();
//   return new Response(body, { headers });
// });
// console.log("http://localhost:8000/");
