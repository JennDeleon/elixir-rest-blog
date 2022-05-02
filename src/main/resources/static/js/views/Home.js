export default function Home(props) {
    return `
<head>    
<link rel="stylesheet" href="../../home.css"><title></title>
</head>
        <header>
            <h1>WELCOME TO MY BLOG. <br><p style="color: red; font-style: italic;"> IF WISH TO CONTINUE AS A GUEST:</p><br> YOU <b>MUST</b> ANSWER THE RIDDLE</h1>
        </header>
        <main class="riddle">
           <br>
               <div class="p1">
                    A man goes to work one day to discover that he could not log on to his computer.
               </div>
               <div class="p2"> 
                    His password won't work. Then he remembers that the passwords are reset every month for
               </div>
               <div class="p3">
                    security reasons. So he goes to his boss's office and had this conversation:
                </div>
           <br>
               <div class="p4">
                    Man: "Hey, boss, my password is out of date."
               </div>
           <br>
               <div class="p5">
                    Boss: "Yes. The password is different, but if you listen carefully
               </div>
               <div class="p6">
                 you can figure out the new password. It has the
               </div>
               <div class="p7">
                    same number of letters as your old one, but only 4 of the letters are the same."
               </div>
           </br>
               <div class="p8">
                    Man: "Thanks, boss!"
               </div>
           <br>
               <div class="p9">
                    The man then goes to his computer and logs on successfully. 
               </div>   
           <br>
               <div class="p10">
                    Question: What is his new password, and what was the old one?
               </div>
               
               <!-- GUEST HAS LIMITED ACCESS, PASSWORD DOES NOT NEED TO BE SECURE-->
                <!--  THE BELOW FUNCTION IS NOT RUNNING, NEED TO FIGURE OUT WHY-->
                <script>
                    function guessRiddle(e) {
                        let answer=document.getElementById("input-field").value;
                        if(answer==="different"){
                            document.location.href="http://localhost:8081/about";
                        }
                        else{
                            alert("TRY AGAIN")
                        }
                    }
                </script>
                <!--   CALLING GUESS RIDDLE FUNCTION TO EVENT HANDLER ON BUTTON     -->
                 <form action="#">
                        <input type="password" id="input-field" name="password" class="form-control">
                      <button onclick="guessRiddle()" class="btn btn-block">Answer</button>
                 </form>
        </main>
        
    `;
}
