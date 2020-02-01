function addSite()
    {
        var addtitle = document.getElementById("title").value;
        var addaddress = document.getElementById("address").value;
        var litag = document.createElement("li");
        var atag = document.createElement("a");
        atag.setAttribute("target", "_blank");
        atag.href = addaddress;
        atag.innerText = addtitle;
        litag.appendChild(atag);
        document.getElementById("site").appendChild(litag);
    }
    
function currentTime()
    {
        date = new Date();
        var hour=date.getHours();
        var min=date.getMinutes();
        var sec=date.getSeconds();
        hour=update(hour);
        min=update(min);
        sec=update(sec);
        var temp = document.getElementById("clock");
        temp.innerHTML=hour+ " : " +min+ " : " +sec ;
        setInterval(currentTime,60000);   
    }
        
function update(k)
    {       
        if (k<10)
        {
            return "0"+k;
        }
        else
        {
            return k;
        }    
    }     
function calendar()
    {
        today=new Date();
        var year=today.getFullYear();
        var month=today.getMonth();
        var date=today.getDate();
        var first=new Date(today.getFullYear(),today.getMonth(),1);
        var daylist=['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        var ymheader = document.getElementById("ymHeader");
        ymheader.innerHTML = year+ "년 " +month+1 + "월";
        
        var pageyear=first.getFullYear();
        var leapyear=[31,29,31,30,31,30,31,31,30,31,30,31];
        var noleapyear=[31,30,31,30,31,30,31,31,30,31,30,31];
        if (pageyear%4===0)
        {
            pageyear=leapyear;
        }
        else
        {
            pageyear=noleapyear;
        }

        var count=1;
        for(var i=0; i<6; i++)
        {
            var tr = document.createElement("tr");
            for(var j=0; j<7; j++)
            {
                if((i===0 && j<first.getDay()) || count>pageyear[first.getMonth()])
                {
                    var td = document.createElement("td");
                    tr.appendChild(td);
                }

                else
                {
                    var td = document.createElement("td");
                    td.textContent =count;
                    td.setAttribute("id", count);
                    if(date===count)
                    {
                        td.style.borderRadius = "100%";
                        td.style.border = "3px rgb(230, 84, 84) dashed";    
                    }
                    tr.appendChild(td);
                    count ++ ;
                }

            var Body = document.getElementById("dateBody");
            Body.appendChild(tr);

            }
        }
    }

function fold(idvalue)
    {
        var listid = document.getElementById(idvalue+"list");
        


        if (listid.style.display == "none")
        {
            listid.style.display = "block";
        }
        else
        {
            listid.style.display = "none";
        }
       
    }

    


