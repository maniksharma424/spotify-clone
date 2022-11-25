let q1 = document.getElementById("q1")
let q2 = document.getElementById("q2")
let q3 = document.getElementById("q3")
let q4 = document.getElementById("q4")




let q1Ans = document.getElementById("q1-ans")
let q2Ans = document.getElementById("q2-ans")
let q3Ans = document.getElementById("q3-ans")
let q4Ans = document.getElementById("q4-ans")


let d1 = document.getElementById("d1")
let d2 = document.getElementById("d2")
let d3 = document.getElementById("d3")
let d4 = document.getElementById("d4")
var check1 = true;
var check2= true;
var check3 = true;
var check4 = true;

q1.addEventListener("click",()=>{
    if(check1){down()}
    function down(){
    d1.innerHTML = `<i class="fa-sharp fa-solid fa-chevron-up fa-2xl"></i>`
    q1Ans.innerHTML = `<p>Playlists are a great way to save collections of music, either for your own listening or to share.
    </p>
    <p>To <a href="">create</a>  one:
    </p>
    <ul>
        <li>1. Tap Your Library.
        </li>
        <li>2. Tap CREATE.
        </li>
        <li>3. Give your playlist a name.
        </li>
        <li>4. Start adding songs (and we'll help you along).
        </li>
    </ul>`
    check1 = false
    }

if(check1){up()}
function up(){
    q1Ans.style.display = 'none'
}
    
})
q2.addEventListener("click",()=>{
    if(check2){down()}
    function down(){ d1.innerHTML = `<i class="fa-sharp fa-solid fa-chevron-up fa-2xl"></i>`
    q2Ans.innerHTML = `<ul>
    <li>1. Tap <a href="">Home.</a> 
    </li>
    <li>2. Tap <a href="">Settings.</a> 
    </li>
    <li>3. Tap <a href="">Data Saver.</a>
    </li>
    <li>4. Switch on Data Saver.
    </li>
    </ul>`
    check2 = false}
    
    
    if(check2){up()}
    function up(){
        q2Ans.innerHTML = ''
    }
    
})
q3.addEventListener("click",()=>{
    q3Ans.innerHTML = `<p>Any playlist with the shuffle icon will play on shuffle.
    </p>
    <p>Some playlists won't have the shuffle icon, so you can tap any song to play it.
    </p>`
})
q4.addEventListener("click",()=>{
    q4Ans.innerHTML = `<p>Tap <a href="">Search.</a> Under <a href="">Browse All</a>, tap Podcasts.
    </p>`
})