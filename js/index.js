
const animation = {
    topContentsMain: {
        opacity_in: [1, 0, { start: 0, end: 0.2}],
        opacity_out: [1,0, { start: 0, end: 0}],

    },
    topContentsVideoImg : {
        transform_in : [1, 2, {start: 0, end: 1}],
        transform_out : [2, 1, {start: 0.15, end: 1}],
    },
    topContentsBack : {
        opacity_in: [0, 0.4, { start: 0, end: 0.15}],
        opacity_out: [0, 0.4, { start: 0, end: 0 }],
        
    },
    topContents : {
        opacity_in: [0, 1, { start: 0.9, end: 1 }],
        opacity_out: [1, 0, { start: 1, end: 0.9 }],
    },

    //서브 contents
    desc1 : {
        opacity_in: [0, 1, { start: 0.25, end: 1 }],
        opacity_out: [1, 0, { start: 1, end: 0.25 }],
        transform_in : [40, 0, { start: 0.25, end: 0.35}],
        transform_out : [0, 0, { start: 0.35, end: 0.25 }],
    },

    desc2 : {
        opacity_in: [0, 1, { start: 0.35, end: 1 }],
        opacity_out: [1, 0, { start: 1, end: 0.35 }],
        transform_in : [40, 0, { start: 0.35, end: 0.45}],
        transform_out : [0, 0, { start: 0.45, end: 0.35 }],
    },

    desc3 : {
        opacity_in: [0, 1, { start: 0.45, end: 1 }],
        opacity_out: [1, 0, { start: 1, end: 0.45 }],
        transform_in : [40, 0, { start: 0.45, end: 0.55}],
        transform_out : [0, 0, { start: 0.55, end: 0.45 }],
    },


}


document.addEventListener("DOMContentLoaded", () => {

    let scrollY = 0; //Y축 값

    let mainVisual = document.getElementById('main_visual')
    let headerTitle = document.getElementById('header_title')
    let headerBtn = document.getElementById('header_btn')
    let headerInner = document.getElementById('header_inner')
    let headerMenu = document.getElementById('header_menu')
    let topContentsBack = document.getElementById('top_contents_back')

    //메인 글씨
    let topContentsMain = document.getElementById('top_contents_main')

    let topContentsVideoImg = document.getElementById('top_contents_video_img')

    let topContentsInner = document.getElementById('top_contents_inner')
    let topContents = document.getElementById('top_contents')


    //서브 글씨
    let desc1 = document.getElementById('desc1')
    let desc2 = document.getElementById('desc2')
    let desc3 = document.getElementById('desc3')


    


    // 브라우저의 높이 넓이
    let height = window.innerHeight
    let width = window.innerWidth
    //1번 섹션
    let scrollHeight = height * 4.5



    //스크롤 크기
    const setLayout = () => {   
        mainVisual.style.height = `${scrollHeight}px`
    }











    const calcValues = (values) => {

        let rv;

        const partScrollStart = values[2].start * scrollHeight
        const partScrollEnd = values[2].end * scrollHeight
        const partScrollY = partScrollEnd - partScrollStart
        // console.log('scrollY : ', scrollY)
        // console.log('partScrollStart : ', partScrollStart)
        // console.log('partScrollEnd : ', partScrollEnd)
        
        if(scrollY >= partScrollStart && scrollY <= partScrollEnd ) {
            
            rv = (scrollY - partScrollStart) / partScrollY * (values[1] - values[0]) + values[0]
            
        } else if(scrollY < partScrollStart) {
            
            rv = values[0]
        } else if (scrollY > partScrollEnd) {
            
            rv = values[1]
        }

        // console.log('rv : ', rv)
        
        return rv
    }


    const playAnimation = () => {

        //현재 스크롤 진행도
        const scrollRatio = scrollY / scrollHeight

        if(scrollRatio >= 0.2) {
            topContentsMain.style.opacity = calcValues(animation.topContentsMain.opacity_out)
            topContentsBack.style.background = `rgba(0,0,0, ${calcValues(animation.topContentsBack.opacity_out)})`
            // let scale = calcValues(animation.topContentsVideoImg.transform_out)
            // topContentsVideoImg.style.transform = `scale3d(${scale},${scale},${scale})`
        } else {
            topContentsMain.style.opacity = calcValues(animation.topContentsMain.opacity_in)
            topContentsBack.style.background = `rgba(0,0,0, ${calcValues(animation.topContentsBack.opacity_in)})`
            let scale = calcValues(animation.topContentsVideoImg.transform_in)
            topContentsVideoImg.style.transform = `scale3d(${scale},${scale},${scale})`
        }


        if(scrollRatio >= 0.25) {
            desc1.style.opacity = calcValues(animation.desc1.opacity_out)
            desc1.style.transform = `translate3d(0, ${calcValues(animation.desc1.transform_in)}%, 0)`;
        } else {
            desc1.style.opacity = calcValues(animation.desc1.opacity_in)
            desc1.style.transform = `translate3d(0, ${calcValues(animation.desc1.transform_out)}%, 0)`;

        }

        if(scrollRatio >= 0.35) {
            desc2.style.opacity = calcValues(animation.desc2.opacity_out)
            desc2.style.transform = `translate3d(0, ${calcValues(animation.desc2.transform_in)}%, 0)`;
        } else {
            desc2.style.opacity = calcValues(animation.desc2.opacity_in)
            desc2.style.transform = `translate3d(0, ${calcValues(animation.desc2.transform_out)}%, 0)`;
        }

        if(scrollRatio >= 0.45) {
            desc3.style.opacity = calcValues(animation.desc3.opacity_out)
            desc3.style.transform = `translate3d(0, ${calcValues(animation.desc3.transform_in)}%, 0)`;
        } else {
            desc3.style.opacity = calcValues(animation.desc3.opacity_in)
            desc3.style.transform = `translate3d(0, ${calcValues(animation.desc3.transform_out)}%, 0)`;
        }

        if(scrollRatio >= 0.9) {

            topContents.style.opacity = calcValues(animation.topContents.opacity_in)
            
        } else {
            topContents.style.opacity = calcValues(animation.topContents.opacity_out)
        }

        if(scrollRatio >= 0.95) {
            topContentsInner.style.display = 'none'
        } else {
            topContentsInner.style.display = 'block'
        }

        
    

        // if(scrollRatio <= 0.2) {
            // topContentsBack.style.opacity = 0.4
            // let aniStart =  10 //애니메이션 시작점 전체의 (%)
            // let aniEnd = 30 // 애니메이션 끝점 전체의 (%)
            // let startHeight = (scrollHeight / 100) * aniStart //전체에서 애니메이션 시작점
            // let endHeight = (scrollHeight / 100 ) * aniEnd
            // let aniHeight = endHeight - startHeight //애니메이션의 높이
            // let aniScroll = (scrollRatio - startHeight) / aniHeight * 100   //애니메이션 안에서의 스크롤 위치 (%)
            // let opacity = ( 100 - aniScroll ) / 100
            
            

        //     let scale = calcValues(animation.topContentsVideoImg.transform)
        //     if(scale > 1.5) scale = 1.5
        //     topContentsVideoImg.style.transform = `scale3d(${scale},${scale},${scale})`

        //     let topContentsBackOpacity =  calcValues(animation.topContentsBack.opacity)
        //     if(topContentsBackOpacity > 0.4) topContentsBackOpacity = 0.4
        //     topContentsBack.style.background = `rgba(0,0,0, ${topContentsBackOpacity})`




        // } else if(scrollRatio <= 0.4) {

         

        // } else if (scrollRatio <= 0.95) {
        //     topContents.style.opacity = calcValues(animation.topContents.opacity)
        //     topContentsInner.style.display = 'block'
        // } else if(scrollRatio <= 0.98) {
        //     topContentsInner.style.display = 'none'
        // }






        // }
        


    }

    setLayout()
    //브라우저 사이지 재설정할시 높이 재설정
    window.addEventListener('resize', setLayout)

    //브라우저 스크롤 할떄
    window.addEventListener('scroll', () => {
        scrollY = window.scrollY
        playAnimation()
    })


    //모바일 화면 버튼
    headerBtn.onclick = () => {
        if (!headerInner.classList.contains('header-bg')) {
            //메뉴 열린상태
            console.log('menu open')
            headerInner.classList.add('header-bg')
            headerTitle.classList.add('header-color')
            headerBtn.classList.add('header-btn-open')
            headerMenu.classList.add('menu-open')
        } else {
            //메뉴 닫힘
            console.log('menu close')
            headerInner.classList.remove('header-bg')
            headerTitle.classList.remove('header-color')
            headerBtn.classList.remove('header-btn-open')
            headerMenu.classList.remove('menu-open')
        }
    }


    // var controller = new ScrollMagic.Controller();
    // var timeline = new TimelineMax();

    // // 여기 애니메이션 코드가 들어갈 거예요.

    // var scene_main = new ScrollMagic.Scene({
    // triggerElement: ".trigger",
    // duration: "1500px"  // 적당히 조절해 주시면 됩니다.
    // })
    // .setTween(timeline)
    // .addTo(controller)


    // var tween_opacity = new TimelineMax();

    // tween_opacity
    // .to(".animate", 0.3, {    // 0.3은 애니메이션이 진행되는 길이입니다.
    //     ease: Linear.easeNone,  // Linear 애니메이션은 값이 직선형으로 일정하게 변한다는 뜻입니다.
    //     opacity: 1              // Opacity가 0으로 (to) 바뀜
    // })
    // .to(".animate", 0.3, {
    //     ease: Linear.easeNone,
    //     opacity: 0
    // }, "+=0.4");              // 여기 있는 0.4는 앞의 애니메이션 이 끝난 후 0.4만큼 기다리고 실행하라는 뜻입니다.
    //                             // 텍스트가 페이드 인 한 뒤 일정 기간 나타나 있어야 하니까요.

    // timeline.add(tween_opacity, 0);

    // var tween_move = TweenMax.fromTo(".animate", 1, {
    //     ease: SlowMo.ease.config(0.7, 0.7, false),  // SlowMo가 우리가 원하는 애니메이션의 이름입니다.
    //     y: 50                                       // GSAP은 CSS와는 조금 달라서 transalateY 대신 y라는 이름으로 사용됩니다.
    //   }, {
    //     ease: SlowMo.ease.config(0.7, 0.7, false),
    //     y: -50
    //   });


});