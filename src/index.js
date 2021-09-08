const htmlparser2 = require("htmlparser2");
const { replaceElement, find } = require("domutils")
const { Project, StructureKind } = require("ts-morph");
const render = require("dom-serializer").default;


const fs = require("fs");

function generate(fileName) {
    const html = fs.readFileSync(fileName, 'utf8')
    // console.log(html)

    const dom = htmlparser2.parseDocument(html);
    // console.log(dom)

    const nodes =  find(el => {
        // console.log(el)
       return el.type == "text" && /translate/.test(el.data) 
    }, dom.children, true)

    for (const node of nodes) {
        replaceElement(node, {...node, data:"test"});
    }

    fs.writeFileSync("./test.tsx", render(dom))
}


generate("/Users/darrengrantham/Code/pricepoint/PPAB.Client.UI/templates/basket/switch-view.html")