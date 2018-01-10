   //        注册框弹出
        var signin = document.getElementById("Bsignin");
        var signin1 = document.getElementById("Bsignin1");
        var login = document.getElementById('Blogin');
        var OTsignin = document.getElementById('Tsignin1');
        var Dusermame = document.getElementById('Dusermame');
        var Dpassword = document.getElementById('Dpassword');
        signin.onclick = function() {
            OTsignin.style.display = 'block';
        }
        //        注册信息获取
        function zhuce() {
            var Ousername = document.getElementById('Ousername');
            var Opassword = document.getElementById('Opassword');
            var Opassword1 = document.getElementById('Opassword1');
            var Oarr = new Array(2);
            if (Ousername.value == '' || Opassword.value == '' || Opassword1.vale == '') {
                alert('用户名与密码不能为空！');
                return 1;
            } else {
                if (Opassword.value != Opassword1.value) {
                    alert("两次填写的密码不同");
                    return 1;
                }
            }
            Oarr[0] = Ousername.value;
            Oarr[1] = Opassword.value;
            Dusermame.value = Oarr[0];
            Dpassword.value = Oarr[1];
//            Ousername.value = '';
//            Opassword.value = '';
//            Opassword1.value = '';
            OTsignin.style.display = 'none';

        }
        
        function shuzu(b){
            var b = document.getElementById('Opassword').value;
           return b;
        }
         function shuzu1(a){
            var a = document.getElementById('Ousername').value;
           return a;
        }

        function judge(){ 
            var bbb= shuzu();
            var ccc= shuzu1();
            var aaa = document.getElementById('Dpassword').value;
            var zh1 = document.getElementById('Dusermame').value;
     
            if (aaa == '' || zh1 == '') {
                alert('账号密码不能为空');
                return 1;
            } else {
                if (aaa != bbb||zh1!=ccc) {
                    alert('账号密码错误~!');
                    return 1;
                } else {
                    window.location.href = 'indext.html';
                }
            }

        }
