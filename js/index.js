
const animation = {
    topContentsMain: {
        opacity: [1, 0, { start: 0, end: 0.1}],
    },
    topContentsVideoImg : {
        transform : [1, 1.5, {start: 0, end: 0.1}],
    },
    topContentsBack : {
        opacity: [0, 0.4, { start: 0, end: 0.12 }],
        
    },
    topContents : {
        opacity: [1, 0, { start: 0.85, end: 1 }],
        // opacity_out: [1, 0, { start: 1, end: 0.8 }],
    },

    //서브 contents
    desc1 : {
        opacity: [0, 1, { start: 0.4, end: 0.8 }],
        transform : [0, -20, { start: 0.4, end: 0.6 }],
    }


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




    const setLayout = () => {
        //스크롤 크기

        mainVisual.style.height = `${scrollHeight}px`
    }
    //스크롤 셋팅











    const calcValues = (values) => {
        let rv = 0;
        const partScrollStart = values[2].start * scrollHeight
        const partScrollEnd = values[2].end * scrollHeight
        const partScrollY = partScrollEnd - partScrollStart
        rv = (scrollY - partScrollStart) / partScrollY * (values[1] - values[0]) + values[0]
        if(Math.sign(rv) === -1) rv = Math.abs(rv)

        return rv
    }


    const playAnimation = () => {

        // 현재 스크롤 값
        let scrollRatio = scrollY / scrollHeight
        
        if(scrollRatio <= 0.2) {

            // topContentsMain.style.opacity = calcValues(animation.topContentsMain.opacity)

            // let scale = calcValues(animation.topContentsVideoImg.transform)
            // if(scale > 1.5) scale = 1.5
            // topContentsVideoImg.style.transform = `scale3d(${scale},${scale},${scale})`

            // let topContentsBackOpacity =  calcValues(animation.topContentsBack.opacity)
            // if(topContentsBackOpacity > 0.4) topContentsBackOpacity = 0.4
            // topContentsBack.style.background = `rgba(0,0,0, ${topContentsBackOpacity})`

        } else if(scrollRatio <= 0.4) {

            let desc1_opacity = calcValues(animation.desc1.opacity)
            console.log(desc1_opacity)
            desc1.style.opacity = desc1_opacity
         

        } else if (scrollRatio <= 0.95) {
            // topContents.style.opacity = calcValues(animation.topContents.opacity)
            // topContentsInner.style.display = 'block'
        } else  {
            // topContentsInner.style.display = 'none'
        }

        
        // if(scrollRatio >= 0.8) {

        //     topContents.style.opacity = calcValues(animation.topContents.opacity_out)
        //     topContentsInner.style.display = 'none'
            
        // } else {
        //     topContentsInner.style.display = 'block'
        //     topContents.style.opacity = calcValues(animation.topContents.opacity_in)
        // }


        // if (scrollRatio <= 0.1) {
        //     // 10% 이하일떄



        // } else if (scrollRatio <= 0.12) {
        //     // 12% 이하일떄



        // } else if (scrollRatio <= 0.9) {
        //     // 90% 이하일떄
        //     topContents.style.opacity = calcValues(animation.topContents.opacity_out)
        //     topContentsInner.style.display = 'block'
            
            
            
        // } else if (scrollRatio <= 0.95) {
            
        // } else if (scrollRatio <= 1 ) {
        //     // topContentsInner.style.display = 'none'
        //     // topContents.style.opacity = calcValues(animation.topContents.opacity_out)
        // }


        // opacity_in: [0, 1, { start: 0.9, end: 1 }],
        // opacity_out: [1, 0, { start: 1, end: 0.9 }],


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
})