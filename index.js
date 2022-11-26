/*let q1 = document.getElementById("q1")
let q2 = document.getElementById("q2")
let q3 = document.getElementById("q3")
let q4 = document.getElementById("q4")*/




let q1Ans = document.getElementById("q1-ans")
let q2Ans = document.getElementById("q2-ans")
let q3Ans = document.getElementById("q3-ans")
let q4Ans = document.getElementById("q4-ans")


let d1 = document.getElementById("d1")
let d2 = document.getElementById("d2")
let d3 = document.getElementById("d3")
let d4 = document.getElementById("d4")
let OptBtn = document.getElementById("slide-optn-btn")
let slideOPTN = document.getElementById("slide-options")
var check1 = true;
var check2= true;
var check3 = true;
var check4 = true;
var checkSlide = true


function callSlide(){
    if(checkSlide){
        downSlide()
    }
    else{
        upSlide()
    }
}

function downSlide(){
    console.log('hi');
    slideOPTN.style.display = 'inline'
    OptBtn.innerHTML = `<i class="fa-solid fa-xmark fa-2xl"></i>`
    checkSlide = false
    document.getElementById('img1').style.display = "none"
}
function upSlide(){
    OptBtn.innerHTML = `<i class="fa-sharp fa-solid fa-grip-lines fa-2xl">`
    slideOPTN.style.display = 'none'
    checkSlide = true
    document.getElementById('img1').style.display = "inline"

}


function q1(){
    if(check1){
        down1()
        
    }
    else{
        up1()
    }
}
function q2(){
    if(check2){
        down2()
        
    }
    else{
        up2()
    }
}
function q3(){
    if(check3){
        down3()
        
    }
    else{
        up3()
    }
}
function q4(){
    if(check4){
        down4()
        
    }
    else{
        up4()
    }
}


    function down1(){
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


function up1(){
    d1.innerHTML =`<i class="fa-solid fa-chevron-down fa-2xl"></i>`
    q1Ans.innerHTML = ''
    check1 = true
}
    



    function down2(){ 
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
    d2.innerHTML = `<i class="fa-sharp fa-solid fa-chevron-up fa-2xl"></i>`
    check2 = false}
    
    

    function up2(){
        q2Ans.innerHTML = ``
        d2.innerHTML =`<i class="fa-solid fa-chevron-down fa-2xl"></i>`
        check2 = true
    }
    

    function down3(){
        d3.innerHTML = `<i class="fa-sharp fa-solid fa-chevron-up fa-2xl"></i>`
    q3Ans.innerHTML = `<p>Any playlist with the shuffle icon will play on shuffle.
    </p>
    <p>Some playlists won't have the shuffle icon, so you can tap any song to play it.
    </p>`
    check3 = false
    }
    function up3(){
        d3.innerHTML =`<i class="fa-solid fa-chevron-down fa-2xl"></i>`
        q3Ans.innerHTML = ''
        check3 = true
    }

    function down4(){
        d4.innerHTML = `<i class="fa-sharp fa-solid fa-chevron-up fa-2xl"></i>`
    q4Ans.innerHTML = `<p>Tap <a href="">Search.</a> Under <a href="">Browse All</a>, tap Podcasts.
    </p>`
    check4 = false
}
function up4(){
    d4.innerHTML =`<i class="fa-solid fa-chevron-down fa-2xl"></i>`
    q4Ans.innerHTML = ''
    check4 = true
}