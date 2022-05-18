 const $=document.querySelector.bind(document);
 const $$=document.querySelectorAll.bind(document);
 const cd=$(".header-info-img");
 const header=$(".header-name_song");
 const header_app=$(".header");
 const img=$(".header-info-img");
 const audio=$("audio");
 const play=$(".btn-play_stop");
 const back=$(".btn-back");
 const next=$(".btn-next");
 const loop=$(".btn-loop");
 const random=$(".btn-random");
 const runtime=$(".header-seek input");
 const checksong=$(".main-list-music");
 const seekduration=$(".seek-duration");
 const seekstart=$(".seek-start");
 const boxclose=$(".box-close");
 const volume=$(".volume-input");
 const cdwith=cd.offsetWidth;
 const cdheigth=cd.offsetHeight;
 const a=Math.floor(Math.random()*20);
 let txt,dem,dem1=0;
 const app={
     currentindex: a,
     isrun:false,
     isloop:false,
     israndom:false,
     cdmade:false,
     isop:true,
     songs:[
        {
            name:"Yêu Là Cưới",
            singer:"Phát Hồ",
            img:"./asset/img/yeulacuoi.jfif",
            link:"https://tainhac123.com/listen/yeu-la-cuoi-phat-ho-ft-x2x.sme954UUZsz0.html"
         },
         {
             name:"Thê Lương",
             singer:"Phúc Chinh",
             img:"./asset/img/theluong.jpg",
             link:"https://tainhac123.com/listen/the-luong-phuc-chinh.nmxw6tXZyBQy.html"
         },
         {
            name:"Sài Gòn Đau Lòng Quá",
            singer:"Hứa kim Tuyền,Hoàng Duyên",
            img:"./asset/img/saigondaulongqua.jpg",
            link:"https://tainhac123.com/listen/sai-gon-dau-long-qua-hua-kim-tuyen-ft-hoang-duyen.2hI4xFTa2lxJ.html"
        },
        {
            name:"Khuê Mộc Lang",
            singer:"Hương Ly, Jombie",
            img:"./asset/img/khue_moc_lan.jpg",
            link:"https://tainhac123.com/listen/khue-moc-lan-huong-ly-ft-jombie.77H35ZFNj8z7.html"
        },
        {
            name:"ALOHA",
            singer:"Jo Jung Suk" ,
            img:"./asset/img/alo-ha.jpg",
            link:"https://tainhac123.com/listen/aloha-audition-cool.uMdfDBLHVC.html" 
        },
         {
            name:"Thương Nhau Tới Bến",
            singer:"Nal",
            img:"./asset/img/thương nhau tới bến.jpg",
            link:"https://tainhac123.com/listen/thuong-nhau-toi-ben-nal.rMFcuZCNpjZ5.html"
         },
         {
            name:"Khách Mời / 嘉宾",
            singer:"Lộ Phi Văn(Lu Fei Wen)",
            img:"./asset/img/khachmoi.jpg",
            link:"https://tainhac123.com/listen/khach-moi-lo-phi-van-lu-fei-wen.0FyMSL6D0lt9.html"
         },
         {
            name:"Bao Giờ Anh Quên",
            singer:"Anh Quân Idol",
            img:"./asset/img/baogioanhquen.jpg",
            link:"https://tainhac123.com/listen/bao-gio-anh-quen-anh-quan.QIyoGAtLH1oQ.html"
         },
         {
            name:"Thời Không Sai Lệch / 错位时空",
            singer:"Ngải Thần",
            img:"https://avatar-nct.nixcdn.com/song/2021/01/17/4/1/0/a/1610872364691.jpg",
            link:"https://tainhac123.com/listen/thoi-khong-sai-lech-ngai-than.dKz91dfQFOkc.html"
         },
         {
            name:"Yêu Em Nguyện Không Hối Tiếc/我爱你不问归",
            singer:"Bạch Tiểu Bạch",
            img:"https://i.ytimg.com/vi/kyImqFaE0HY/maxresdefault.jpg",
            link:"https://tainhac123.com/listen/yeu-em-nguyen-khong-hoi-tiec-bach-tieu-bach.KHHR7BrJuKG7.html"
         },
         {
            name:"Đạp Sơn Hà",
            singer:"Thập Thất Thúc Ni",
            img:"https://avatar-ex-swe.nixcdn.com/mv/2021/04/10/6/2/5/9/1618061060966_640.jpg",
            link:"https://tainhac123.com/listen/dap-son-ha-thap-that-thuc-ni.DJh2ekrxhUtD.html"
         },
         {
            name:"Chờ Đợi Có Đáng Sợ",
            singer:"Andiez",
            img:"https://i.ytimg.com/vi/WE05tPmCj8k/maxresdefault.jpg",
            link:"https://tainhac123.com/listen/cho-doi-co-dang-so-andiez.PSm0SS4EC1FZ.html"
         },
         {
            name:"Hàng Ngàn Hàng Vạn / 千千万万",
            singer:"Thâm Hải Ngư Tử Tương",
            img:"https://i.ytimg.com/vi/IiJ9g2U_Wvg/maxresdefault.jpg",
            link:"https://tainhac123.com/listen/hang-ngan-hang-van-tham-hai-ngu-tu-tuong.UPgem9ifUzvP.html"
         },
         {
            name:"Thế Giới Lớn Như Vậy Vẫn Gặp Được Anh",
            singer:"Trình Hưởng",
            img:"./asset/img/love.jpg",
            link:"https://tainhacmienphi.biz/get/song/api/131841",
         },
         {
            name:"Bỏ Em Vào Balo",
            singer:"Út Nhị",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEfKM3EyyD1WETgi1Is9Tj1eL4Dh5jRgJGCQ&usqp=CAU",
            link:"https://tainhac123.com/listen/bo-em-vao-balo-cover-ut-nhi.68h2T5NC8HQR.html"
         },
         {
            name:"Chúng Ta Sau Này",
            singer:" T.R.I",
            img:"https://leecoffee.net/wp-content/uploads/2021/02/Chung-Ta-Sau-Nay-T.R.jpg",
            link:"https://tainhac123.com/listen/chung-ta-sau-nay-tri.61Wkf72FX7be.html"
         },
         {
            name:"Túp Lều Vàng",
            singer:"Nguyễn Đình Vũ",
            img:"https://cms.lichngaytot.com/medias/standard/2016/4/22/Lo-dien-4-con-giap-yeu-khong-so-ngheo-kho-hinh-anh.jpg",
            link:"https://tainhac123.com/listen/tup-leu-vang-nguyen-dinh-vu-ft-nboro.bAfWStLArD8G.html"
         },
         {
             name:"Chỉ Là Không Cùng Nhau",
             singer:"Tăng Phúc, Trươnng Thảo Nhi",
             img:"https://i.ytimg.com/vi/YQqfyEmwmyU/maxresdefault.jpg",
             link:"https://tainhac123.com/listen/chi-la-khong-cung-nhau-lofi-version-tang-phuc-ft-truong-thao-nhi-ft-freak-d.R4fWOhkI6yFb.html"
         },
         {
            name:"Lệ Duyên Tình (Andy Remix)",
            singer:"K-ICM,Long Nón Lá,DJ Andy",
            img:"https://i.ytimg.com/vi/2Jo1So7NDXE/maxresdefault.jpg",
            link:"https://tainhac123.com/listen/le-duyen-tinh-andy-remix-k-icm-ft-long-non-la-ft-dj-andy.UrEErv3Q7EiA.html"
        },
        {
            name:"Hơn Cả Yêu",
            singer:"Tăng Phúc",
            img:"https://youthvoicescount.org/wp-content/uploads/2020/03/ava-nhac.jpg",
            link:"https://data3.chiasenhac.com/downloads/2098/5/2097042-21ed29ac/128/Hon%20Ca%20Yeu%20-%20Nguyen%20Duc%20Phuc.mp3"
        },
        {
            name:"Tình Sầu Thiên Thu Muôn Lối",
            singer:"Doãn Hiếu",
            img:"https://lamhoangmedia.com/wp-content/uploads/2021/04/tinh-sau-thien-thu-muon-loi.jpeg",
            link:"https://tainhac123.com/listen/tinh-sau-thien-thu-muon-loi-wrc-remix-doan-hieu.nPCsD2VOzOmG.html"
        },
        {
            name:"Cô Bé Mùa Đông",
            singer:"Trung Quân, Thùy Chi",
            img:"https://i.ytimg.com/vi/8D6iRK9alj4/maxresdefault.jpg",
            link:"https://tainhacmienphi.biz/get/song/api/34079"
        },
        {
            name:"Cho Anh Say",
            singer:"Phan Duy Anh, ACV",
            img:"https://i.ytimg.com/vi/l65vbNPTX8I/maxresdefault.jpg",
            link:"https://tainhacmienphi.biz/get/song/api/140657"
        },
        {
            name:"Ta Tên Trường An, Chàng Tên Cố Lý",
            singer:"Doãn Tích Miên, Tiểu Điền",
            img:"https://i.ytimg.com/vi/jCTeO4QfCFw/maxresdefault.jpg",
            link:"https://tainhacmienphi.biz/get/song/api/259436"
        },
        {
            name:"Có Chút Ngọt Ngào (有点甜)",
            singer:" Uông Tô Lang",
            img:"https://img4.thuthuatphanmem.vn/uploads/2019/12/09/anh-dep-tinh-yeu-hoat-hinh-3d_040507069.jpg",
            link:"https://tainhacmienphi.biz/get/song/api/8457",
        },
        {
            name:"Ta Là Của Nhau",
            singer:" Đông Nhi, Ông Cao Thắng",
            img:"https://avatar-ex-swe.nixcdn.com/song/2019/09/11/6/d/c/4/1568183645028_640.jpg",
            link:"https://tainhacmienphi.biz/get/song/api/12973"
        },
        {
            name:"Trứng Dán Cần Mỡ",
            singer:"Tân Trần",
            img:"https://avatar-ex-swe.nixcdn.com/song/share/2020/03/10/b/7/d/6/1583822739243.jpg",
            link:"https://tainhac123.com/listen/trung-ran-can-mo-tan-tran.kCWo6P4qqvKZ.html"
        },
        {
            name:"Nếu Một Ngày Ta Chán Nhau",
            singer:"Linh Hee",
            img:"https://blogradio.vn/uploads/cms/source/2020/14/ngaychannhau1.jpg",
            link:"https://tainhacmienphi.biz/get/song/api/3051"
        },
        {
            name:"Thích Nhau Dần Đi",
            singer:"Linh Hee",
            img:"https://i.ytimg.com/vi/2Aqz9zFD0xc/maxresdefault.jpg",
            link:"https://tainhacmienphi.biz/get/song/api/141849"
        },
        {
            name:"Gặp Nhau Làm Ngơ (Remix)",
            singer:"Lương Viết Quang",
            img:"https://d4.violet.vn/uploads/blogs/3702/jd7u5x_12-5.jpg",
            link:"https://tainhac123.com/listen/gap-nhau-lam-ngo-remix-luong-viet-quang.YgYnQpzWoklr.html"
        },
        {
            name:"Yêu Anh Đến Khoảnh Khắc Cuối Cùng",
            singer:" Mạc Khiếu Tỷ Tỷ",
            img:"https://nhactrunghoa.com/images/202107/yeu-anh-den-khoanh-khac-cuoi-cung-ai-ni-dao-zui-hou-yi-ke-ai-ni-dao-zuihou-yike/yeu-anh-den-khoanh-khac-cuoi-cung-ai-ni-dao-zui-hou-yi-ke-ai-ni-dao-zuihou-yike.jpg",
            link:"https://tainhacmienphi.biz/get/song/api/292398"
        },
        {
            name:"Muốn Gặp Em x3 (想見你想見你想見你)",
            singer:"831",
            img:"https://i.ytimg.com/vi/QJWNrvoEscQ/maxresdefault.jpg",
            link:"https://data3.chiasenhac.com/downloads/2126/5/2125416-bb45f366/128/Muon%20Gap%20Em%20Muon%20Gap%20Em%20Muon%20Gap%20Em%20-%2083.mp3"
        },
        {
            name:"Yêu Giang Sơn Càng Yêu Mỹ Nhân",
            singer:" Tiểu A Phong",
            img:"https://gppeace.files.wordpress.com/2015/11/536290_553647614668332_607592915_n.jpg?w=700",
            link:"https://tainhacmienphi.biz/get/song/api/308975"
        },
        {
            name:"Nụ Cười 18 20",
            singer:"Doãn Hiếu",
            img:"./asset/img/love2.jpg",
            link:"https://tainhacmienphi.biz/get/song/api/151840"
        },
        {
            name:"Tháng Năm Không Trở Lại",
            singer:"The Wall Nutszz",
            img:"https://i.ytimg.com/vi/BcLk0ZjAd8k/maxresdefault.jpg",
            link:"https://tainhacmienphi.biz/get/song/api/8747"
        },
        {
            name:"Là Tự Em Đa Tình (是我在做多情种)",
            singer:"Hồ Dương Lâm",
            img:"https://leanhtien.net/wp-content/uploads/2017/11/la-tu-em-da-tinh-1.jpg",
            link:"https://tainhacmienphi.biz/get/song/api/3874",
        },
        {
            name:"Luyến Nhân Tâm (戀人心)",
            singer:"Tiểu Hà Mễ",
            img:"https://i1.sndcdn.com/artworks-000372422157-kabb3g-t500x500.jpg",
            link:"https://tainhacmienphi.biz/get/song/api/12199"
        },
        {
            name:"3107-2 (Lofi Ver.)",
            singer:"Duongg; Nâu; W/N; Freak D",
            img:"https://i.ytimg.com/vi/HoVYSnOBHIE/maxresdefault.jpg",
            link:"https://tainhacmienphi.biz/get/song/api/258052"
        },
        {
            name:"Đường Tôi Chở Em Về (Lofi Version)",
            singer:"buitruonglinh; Freak D",
            img:"https://i.ytimg.com/vi/GLbUes-OOpc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDWxZNKK19hkAzoxxO_21r490Bdzg",
            link:"https://tainhacmienphi.biz/get/song/api/321777"
        },
        {
            name:"Đâu Còn Đây",
            singer:"Lee Ken; Nal",
            img:"https://i.ytimg.com/vi/OZXzVR0MpDg/maxresdefault.jpg",
            link:"https://tainhacmienphi.biz/get/song/api/277868"
        },
        {
            name:"trắc trở",
            singer:"X2X",
            img:"https://i.ytimg.com/vi/U7vjBqQfoqI/maxresdefault.jpg",
            link:"https://tainhacmienphi.biz/get/song/api/303513"
        },
        {
        
            name:"chắc anh có yêu em",
            singer:"Khải Đăng; Ribi Sachi",
            img:"https://i.scdn.co/image/ab67616d0000b273c0c76753ebae12b10f9fb07e",
            link:"https://data.chiasenhac.com/down2/2226/5/2225622-13bc64fb/128/Chac%20Anh%20Co%20Yeu%20Em%20-%20Khai%20Dang_%20Ribi%20Sac.mp3"
        },
        {
            name:"Muôn kiếp là anh em",
            singer:"Du Thiên",
            img:"https://i.scdn.co/image/ab67616d0000b2734e74fb4f614cc82ae93f8972",
            link:"https://tainhac123.com/listen/muon-kiep-la-anh-em-du-thien.wI88Ut9oJ2Qa.html"
        },
     ],
     so_sanh(x,y){
        return x.name.localeCompare(y.name);
     },
     sort_music(){
        this.songs.sort(this.so_sanh);
     },
     Render(){
         const htmls=this.songs.map((song,index) =>{
                return`
            <div class="list-music__item" data-index="${index}">
                <img src="${song.img}" alt="" class="item-img">
                <div class="list-music__item-info">
                    <div class="music-name">${song.name}</div>
                    <div class="music-singer">${song.singer}</div>
                </div>
                <div class="option">
                    <i class="ti-more-alt"></i>
                </div>
            </div>
            `
         });
         $(".main-list-music").innerHTML= htmls.join('');
     },
     defindproperties(){
         Object.defineProperty(this,'currentsong',{
             get: function(){
                 return this.songs[this.currentindex];
             }
         })
     },
     handlevent(){
        const _this=this;
        const cdmade= cd.animate(
            {
               transform:'rotate(360deg)'
            }
        ,{
            duration:20000,
            iterations:Infinity,
        });
        cdmade.pause();
        document.onscroll=function(){
            const scroll=window.scrollY || document.documentElement.scrollTop;
            const newwith=cdwith -scroll;
            const newheigth=cdheigth-scroll;
            cd.style.width=newwith>0?newwith +"px":0;
            cd.style.height=newheigth>0?newheigth +"px":0;
            cd.style.opacity=newwith/cdwith;
        }
        play.onclick=function(){
            if(audio.paused==true){
                audio.play();
                $(".ti-control-play").className="ti-control-pause";
                _this.isrun=true;
            }
            else{
                audio.pause();
                $(".ti-control-pause").className="ti-control-play";
                _this.isrun=false;
            }
        }
        back.onclick=function(){
            if(_this.israndom==false){
                if(_this.currentindex<=0){
                    _this.currentindex=_this.songs.length - 1;
                    // _this.loadcurrentsong();
                }
                else{
                    _this.currentindex--;
                    // _this.loadcurrentsong();
                }
            }
            else{
                _this.randommusic();
            }
            _this.loadcurrentsong();
           if(_this.isrun==true){
               audio.play();
           }
        }
        next.onclick=function(){
            if(_this.israndom==false){
                if(_this.currentindex >= _this.songs.length - 1){
                    _this.currentindex=0;
                    // _this.loadcurrentsong();
                }
                else{
                    _this.currentindex++;
                    // _this.loadcurrentsong();
                }
            }
            else{
                _this.randommusic();
            }
            _this.loadcurrentsong();
            if(_this.isrun==true){
                audio.play();
            }
        }
        audio.onplay=function(){
            cdmade.play();
            _this.runJumpText();
        }
        audio.onerror=function(){
            let k=_this.currentindex;
            let error=document.querySelector('.error');
            error.innerHTML=`<marquee scrollamount='6' width="100% class="error-description">
            link nhạc đang bị lỗi ,xin vui lòng chọn bài khác hoặc chế độ random bài được thực hiện.</marquee>`;
            let marquee=document.querySelector('marquee');
            marquee.style.lineHeight="30px";
            error.style.display ='inline-block';
            setTimeout(function(){
                if(k==_this.currentindex){
                    _this.randommusic();
                    _this.loadcurrentsong();
                    let kt=document.querySelector('.ti-control-pause');
                    if(kt){
                        audio.play();
                    }
                }
                error.style.display="none";
                error.innerHTML='';
            },10000)
        }
        audio.onpause=function(){
            cdmade.pause();
            _this.pauseText();
        }
        audio.onended=function(){
            if(_this.isloop==false){
                if(_this.currentindex>=0 && _this.currentindex<_this.songs.length-1){
                    _this.currentindex++;
                }
                else{
                    _this.currentindex=0;
                }
            }
            if(_this.israndom==true&&_this.isloop==false){
                _this.randommusic();
            }
                _this.loadcurrentsong();
                audio.play();
        }
        audio.ontimeupdate=function(){
            if(audio.duration){
                const timeproces=Math.floor(audio.currentTime/audio.duration *100);
                runtime.value=timeproces;
                seekduration.textContent=_this.mathtime(audio.duration);
                seekstart.textContent=_this.mathtime(audio.currentTime);
            }
        }
        runtime.onchange=function(e){
            const seektime=audio.duration/100 *e.target.value;
            audio.currentTime=seektime;
        }
        loop.onclick=function(){
            _this.isloop=!_this.isloop;
            loop.classList.toggle("active",_this.isloop);
        }
        random.onclick=function(){
            _this.israndom=!_this.israndom;
            random.classList.toggle("active",_this.israndom);
        }
        checksong.onclick=function(e){
            const song=e.target.closest(".list-music__item:not(.activesong)");
            if(song && !e.target.closest(".option")){
                if(song){
                    _this.currentindex=song.dataset.index;
                    _this.loadcurrentsong();
                    audio.play();
                    if(_this.isrun==false){
                        $(".ti-control-play").className="ti-control-pause";
                        _this.isrun=true;
                    }
                }
            }
            const option=e.target.closest(".option");
            if(option){
                $(".box-option").classList.toggle("box-ligth",_this.isop);
                    _this.isop =!_this.isop;
            }
        }
        boxclose.onclick=function(){
            $(".box-option").classList.toggle("box-ligth",_this.isop);
            _this.isop =!_this.isop;
        }
        volume.onchange=function(e){
            audio.volume=volume.value/10;
            let btn_volume=document.querySelector('.item-volume');
            if(volume.value==0){
                btn_volume.classList.add('ti-na');
            }
            else{
                btn_volume.classList.remove('ti-na');
            }
        }
     },
    randommusic(){
        let newindex;
        do{
            newindex=Math.floor(Math.random()*(this.songs.length-1));
        }
        while(this.currentindex===newindex);
        this.currentindex=newindex;
    },
    mathtime(time){
        const minutes=Math.floor(time/59);
        const second=Math.round(time%59);
        return`0${minutes}:${second.toString=second<10 ?'0'+second:second}`;
    },
    loadcurrentsong(){
        clearInterval(txt);
        dem1=0;
        header.innerText=''
        header.appendChild(this.jumpText());
        header_app.style.backgroundImage=`Url("${this.currentsong.img}")`
        img.src=this.currentsong.img;
        audio.src=this.currentsong.link;
        const active= $$(".list-music__item");
        active.forEach(element => {
            element.classList.remove("activesong");
        });
        active[this.currentindex].classList.add("activesong");
        // $$(".item-img")[this.currentindex].classList.add("item-img-active");
        setTimeout(() => {
            active[this.currentindex].scrollIntoView({
                behavior: "smooth", 
                block: "center", 
            });  
        }, 300);
    },
    jumpText(){
        const text=this.songs[this.currentindex].name;
        const arr=text.split("");
        const div=document.createElement("div");
        div.className="jumpText";
        for(var i=0;i<arr.length;i++){
           const span=document.createElement("span");
           span.innerText=arr[i].toUpperCase();
           div.appendChild(span);
        }
        return div;
    },
     runJumpText(){
        const text=document.querySelectorAll('.jumpText span');
        dem=dem1;
        for(let i=0;i<text.length;i++){
            if(text[i].innerHTML==" "){
                text[i].innerHTML='&nbsp;';
            }
            text[i].style.display="inline-block";
        }
        txt=setInterval(function(){
            if(dem==0){
                text[text.length-1].style.color='#000';
                text[text.length-1].style.textShadow='none';
            }
            for(let z=0;z<dem;z++){
                text[z].style.color='#000';
                text[z].style.textShadow='none';
            }
            if(text[dem].innerHTML=="&nbsp;"){
                dem++;
            }
            text[dem].style.color='#fff';
            text[dem].style.textShadow='#fff 0.1em 0.1em 0.2em';
            dem++;
            if(dem>=text.length){
                text[dem-1].style.color='#fff';
                text[dem-1].style.textShadow='#fff 0.1em 0.1em 0.2em';
                dem=0;
            }
        },1000)
     },
     
     pauseText(){
        const text=document.querySelectorAll('.jumpText span');
        dem1=dem;
        clearInterval(txt);
     },
     start(){
         this.sort_music();
         this.defindproperties();
         this.Render();
         this.handlevent();
         this.loadcurrentsong();
     }
}
app.start();