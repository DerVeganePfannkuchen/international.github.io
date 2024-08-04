const scriptURL = 'https://script.google.com/macros/s/AKfycbx4x4YhNYetbgcVLCwigPKox3zTnTxl799cUPYZDbVlOsP_BOiaj39hBZkXEom14FCpEw/exec'
            const form = document.forms['submit-to-google-sheet']
            const msg = document.getElementById("msg");
            form.addEventListener('submit', e => {
                
                msg.innerHTML= "Processing...";
                e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => {
                    msg.classList.add("confr")
                    msg.innerHTML= "Thank You! Your information has been captured";
                    setTimeout(function() {
                        msg.innerHTML= "";
                        msg.classList.remove("confr")
                    },5000);
                    form.reset();
                    
                })
                .catch(error => {
                    msg.classList.add("error")
                    msg.innerHTML= "Error: Form not submitted. Please try again later";
                    setTimeout(function() {
                        msg.innerHTML= "";
                        msg.classList.remove("error")
                    },5000);
                })
            })