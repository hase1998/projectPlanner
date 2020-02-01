const http = require('http');
const fs = require('fs');
const url = require('url');

function templateIndex(){
    return `
      <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width">
            <title>Just do it!</title>
            <link rel="stylesheet" href="C:\Users\Hi\Desktop\project\style.css">
        </head>

        <body>
            <script type="text/javascript" src="C:\Users\Hi\Desktop\project\script.js"></script>
            <h1>하루 플래너</h1>

            <div>이 페이지는 나의 하루를 관리하기 위해서 만든 페이지이다.
                추가할 부분 : 달력의 날짜를 클릭할 시에 그 날짜에 해당하는 메모 작성(계획, 
                계획의 우선순위, 계획의 달성 여부ox), 독후감상문, 필요한 파일 업로드 등의 기능, 유용한 사이트 저장. 
                 
                
            </div>

            <br>      
            <div>
                <a href="C:\Users\Hi\Desktop\project\dayday\dayday.html">하루마다 나의 웹페이지 발전</a>
            </div>
            <br>

            <p id="clock">
            </p>   
            <script>
                currentTime();
            </script>

            
            <table class="calendar">
                <thead id="ymHeader">
                <div></div>
                </thead>

                <tbody id="dateBody">
                    <tr id="dayHeader">
                        <td>일</td>
                        <td>월</td>
                        <td>화</td>
                        <td>수</td>
                        <td>목</td>
                        <td>금</td>
                        <td>토</td>
                    </tr>
                </tbody>
            </table>
            
            <script>
                calendar();
            </script>

            
            <div><br>
                유용한 사이트 모음<br>
                <input type="text" id="title">
                <input type="text" id="address">
                <input type="button" value="추가하기" onclick="addSite()">
            </div>
                <ul id="site">
                    <li><a target = "_blank" href="http://csw.sogang.ac.kr/csw/index_new.html">서강대 융합SW연계전공</a></li>
                    <li><a target = "_blank" href="https://www.sogang.ac.kr/bachelor/bulletin/sogang2017/autoalbum/page/170412092927007/view.html?FdirectPageNum[]=1">2017 대학요람</a></li>
                    <li><a target = "_blank" href="http://sis109.sogang.ac.kr/sap/bc/webdynpro/sap/zcmw9016?sap-language=KO&sap-cssurl=http%3a%2f%2fsaint.sogang.ac.kr%3a80%2fcom.sap.portal.design.urdesigndata%2fthemes%2fportal%2fcustom_tradeshow_01%2fls%2fls_sf3.css%3fv%3d10.30.7.261448.1491647873000#">개설 교과목 정보</a></li>
                    <li><a target = "_blank" href="https://everytime.kr/timetable">에브리타임</a></li>
                    <li><a target = "_blank" href="https://cafe.naver.com/securityplusua/835">연합정보보안동아리</a></li>
                </ul>
            
            <br><br>    
            <div id = "Checklist">
                Checklist
                
                    <div>
                        <input type="button"  id = "1tier"  onclick = "fold(this.id)" value="1순위">
                        <div id = "1tierlist">
                            <li>
                                방구하기
                            </li>
                            <li>
                                이과 수학 공부하기
                            </li>
                            <li>
                                node.js
                            </li>
                        </div>
                    </div>    
                        
                    
                    <div>
                        <input type="button" id = "2tier" onclick = "fold(this.id)" value="2순위">
                        <div id = "2tierlist">
                            
                        </div>
                    </div>    
                       
                    
                    <div>
                        <input type="button" id = "etc" onclick = "fold(this.id)" value="기타"> 
                        <div id = "etclist">
                            오픈소스 입문자를 위한 핸즈온워크샵
                            2/7(금)까지 신청서 이메일 제출(csadmin@sogang.ac.kr)
                            2월 18일(화) ~ 19일(수) 오후 1:00 ~ 5:00 (하루 4시간 * 2일 = 총 8시간)
                            오픈소스가 방법론, 공유문화 등 여러 면에서 영향력을 가지고, 소프트웨어 분야에서 오픈소스에 대한
                            경험이 경력에 영향을 미치는 부분도 있어서, 효과적인 입문의 기회를 제공하고자 함.
                        </div>   
                    </div>

                    <div>
                        <input type="button" id = "workout" onclick = "fold(this.id)" value="운동 및 식이">
                        <div id = "workoutlist">
                            <li>
                                과식하지 않기
                            </li>   
                        </div>    
                    </div>
                    

            </div>        




    
            
        </body>
    </html>
      `;
}

 var app = http.createServer(function(request,response){

    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id;

    if(_url == '/'){
      _url = '/index.html';
      template = templateIndex();
        response.writeHead(200);
        response.end(template);
    }


    if(_url == '/favicon.ico'){
      response.writeHead(404);
      response.end("Not Found");
      return;
    }
    
 
});
app.listen(8080);