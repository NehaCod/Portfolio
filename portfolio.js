var tablinks= document.getElementsByClassName("ablinks");
var tabcontents= document.getElementsByClassName("tab-contents");
var tablink;
var tabcontent;
function opentab(tabname){
    
    for( tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for( tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
    
}

//form-Sheet//

const scriptURL = 'https://script.google.com/macros/s/AKfycbwEJ0BODJM4QonaAEttzF6q2LsBOCqoTITgEvrzNmW0x5mncGThBMmri4PGhFPya_AO/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
             msg.innerHTML="Message sent successfully!";
             setTimeout(function(){
                msg.innerHTML="";
             },5000)
             form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })