// DOM

//
// basic sample
//
let target = document.querySelector(".classAttr");
console.log(target);

target = document.querySelector("#idAttr");
console.log(target);

target = document.getElementsByTagName('p');
console.log(target);

//
// innerHTML & innerContent
//
const textCont = document.querySelector("#textContent");
textCont.innerHTML = "<strong>textContent & innerHTML</strong>";

const innerHtml = document.querySelector("#innerHTML");
innerHtml.textContent = "<strong>textContent & innerHTML</strong>";

//
// HTML edit
//
// "section" tag wraps the code block to make it a childElement be placed to handle HTML block
const htmlStr = `
<section id="article">                          
<h2 class="title">insert HTML string</h2>
<div class="tag-area">
<span>tag:</span><span>sport</span>
</div>
<p>insert end</p>
</section>
`;

function htmlToElement(htmlStr){                // to make dummy "div" tag and convert the "htmlStr" to the Element
    const dummyDiv = document.createElement("div");
    dummyDiv.innerHTML = htmlStr;
    return dummyDiv.firstElementChild;
}

const targetNewElement = htmlToElement(htmlStr);
console.log(targetNewElement);
document.body.prepend(targetNewElement);        // inserted to top of the body

// exercise 14.3 --- move the html block
function moveElement( callback ) {              // works as a Promise factory
    return () => new Promise( resolve => {
        setTimeout(() => {
            callback();
            resolve(); }, 3000);
        }); 
}

const src = document.querySelector("#source");

const move1 = moveElement( () => {
    const mov_to = document.querySelector(".title2");    
    mov_to.prepend(src);
});

const move2 = moveElement( () => {
    const mov_to = document.querySelector(".title2");    
    mov_to.after(src);
});

const move3 = moveElement( () => {
    const mov_to = document.querySelector(".wrap");    
    mov_to.append(src);
});

const move4 = moveElement( () => {
    const mov_to = document.querySelector("li");    
    mov_to.after(src);
});

move1()
.then( move2 )      // move2 ~ move4 returns Promise instance too
.then( move3 )
.then( move4 );

// equivalent script to the above
/*
async function exe(){
    await move1();
    await move2();
    await move3();
    await move4();
}

exe();
*/

// exercise 14.4 --- change the href link
const link = document.querySelectorAll("a");
for (let str of link){
    let link_ele = str.getAttribute("href");
    if(/google\.com/.test(link_ele)){                   // to check the url matching
        str.setAttribute("href", "http://yahoo.co.jp")
    };
}

// Element position information
let attr = document.querySelector("li");
let element_info = attr.getBoundingClientRect();
console.log(element_info.left);     // 48   ; in MacBook air

attr = document.querySelector("body");
element_info = attr.clientWidth;
console.log(element_info);          // 781  ; same as above


