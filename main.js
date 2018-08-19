// function Loadjson(file,callback){
// 	var xhr = new XMLHttpRequest();
//     xhr.overrideMimeType("application/json");
//     xhr.open("GET",file,true);
//     xhr.onreadystatechange=function(){
//     	if(xhr.readyState ===4 && xhr.status=="200"){
//             callback(xhr.responseText);
//     	}
//     };
//     xhr.send(null);
// }
// Loadjson("data.json",function(text){
// 	var data=JSON.parse(text);
// 	console.log(data);
// 	basics(data.details);
//     careerinfo(data.career);
//     educationin(data.educationinfo);
//     techskill(data.technicalskills);
//     achieve(data.achievements);
// })
function Loadjson(file){
    return new Promise((resolve,reject)=>{
         return fetch(file).then(response=>{
            if(response.ok){
                resolve(response.json());
            }
            else{
                reject(new Error('error'));
            }
         })
    })
}
var newfile=Loadjson("data.json");
newfile.then(data=>{
  console.log(data);
  basics(data.details);
  careerinfo(data.career);
  educationin(data.educationinfo);
  techskill(data.technicalskills);
  achieve(data.achievements);  
})
var left=document.querySelector(".left");
function basics(det){
    var img=document.createElement("img");
    img.src=det.Image;
    left.appendChild(img);
    var name1=document.createElement("h3");
    name1.textContent=det.Name;
    left.appendChild(name1);
    var pno=document.createElement("h3");
    pno.textContent=det.Phoneno;
    left.appendChild(pno);
    var email=document.createElement("a");
    email.href="mailto:lalithadevieluri@gmail.com";
    email.textContent=det.Email;
    left.appendChild(email);
    var add=document.createElement("h2");
    add.textContent="Address";
    left.appendChild(add);
    var hrline=document.createElement("hr");
    left.appendChild(hrline);
    var address=document.createElement("h3");
    address.textContent=det.Address;
    left.appendChild(address);
}
var right=document.querySelector(".right");
function careerinfo(info){
    var head1=document.createElement("h3");
    head1.textContent="career objective";
    right.appendChild(head1);
    var hrline1=document.createElement("hr");
    right.appendChild(hrline1);
    var car=document.createElement("h3");
    car.textContent=info.information;
    right.appendChild(car);
    var head2=document.createElement("h3");
    head2.textContent="qualification";
    right.appendChild(head2);
    var hrline2=document.createElement("hr");
    right.appendChild(hrline2);
    var qua=document.createElement("h3");
    qua.textContent=info.qualification;
    right.appendChild(qua);
    
}
function educationin(edu){
 
   var head3=document.createElement("h3");
   head3.textContent="Educational qualifications";
   right.appendChild(head3);
   var hrline3=document.createElement("hr");
    right.appendChild(hrline3);
    var table1=document.createElement("table");
   table1.border="2";
   right.appendChild(table1)
   tabledata="";
   for(i=0;i<edu.length;i++)
   {
    tabledata+="<tr><td>"+edu[i].qualification+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].year+"</td><td>"+edu[i].percentage+"</td></tr>";
    }
   table1.innerHTML=tabledata;
   
}
function techskill(skill){
  var head4=document.createElement("h3");
  head4.textContent="technicalskills";
  right.appendChild(head4);
  var hrline4=document.createElement("hr");
  right.appendChild(hrline4);
  for(i=0;i<skill.length;i++)
  {
    var s=document.createElement("h3");
    s.textContent=skill[i].title;
    right.appendChild(s);
    var ul=document.createElement("ul");
    var li=document.createElement("li");
    li.textContent=skill[i].info;
    ul.appendChild(li);
    right.appendChild(ul);
  }
}
function achieve(ac)
{
    var a=document.createElement("h3");
    a.textContent="Achievements";
    right.appendChild(a);
    var hr5=document.createElement("hr");
    right.appendChild(hr5);
    for(i=0;i<ac.length;i++)
    {    
    var a1=document.createElement("h3");
    a1.textContent=ac[i].achievement;
    right.appendChild(a1);
    var ul=document.createElement("ul");
    var li=document.createElement("li");
    li.textContent=ac[i].info;
    ul.appendChild(li);
    right.appendChild(ul);
   }   
}
function openpage()
{
    window.open("newproject.html","_self",true);
}
