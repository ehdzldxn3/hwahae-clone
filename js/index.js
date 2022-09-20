// 
const animation = {
    topContentsMain: {
        opacity_in: [1, 0, { start: 0, end: 0.2}],
        opacity_out: [1,0, { start: 0, end: 0}],

    },
    topContentsVideoImg : {
        transform_in : [1, 2, {start: 0, end: 1}],
        transform_out : [2, 1, {start: 1, end: 0}],
    },
    topContentsBack : {
        opacity_in: [0, 0.4, { start: 0, end: 0.15}],
        opacity_out: [0, 0.4, { start: 0, end: 0 }],
        
    },
    topContents : {
        opacity_in: [0.5, 1, { start: 0.9, end: 1 }],
        opacity_out: [1, 0.5, { start: 1, end: 0.9 }],
    },

    //서브 contents
    desc1 : {
        opacity_in: [0, 1, { start: 0.25, end: 0.4 }],
        opacity_out: [0, 1, { start: 0.4, end: 0.25 }],
        transform_in : [40, 0, { start: 0.25, end: 0.35}],
        transform_out : [0, 0, { start: 0.35, end: 0.25 }],
    },

    desc2 : {
        opacity_in: [0, 1, { start: 0.45, end: 0.55 }],
        opacity_out: [0, 1, { start: 0.55, end: 0.45 }],
        transform_in : [40, 0, { start: 0.45, end: 0.55}],
        transform_out : [0, 0, { start: 0.55, end: 0.45 }],
    },

    desc3 : {
        opacity_in: [0, 1, { start: 0.65, end: 0.75 }],
        opacity_out: [0, 1, { start: 0.75, end: 0.65 }],
        transform_in : [40, 0, { start: 0.65, end: 0.75}],
        transform_out : [0, 0, { start: 0.75, end: 0.65 }],
    },


}


document.addEventListener("DOMContentLoaded", () => {

    let scrollY = 0; //Y축 값

    let header = document.getElementById('header')

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
        
        if(scrollY >= partScrollStart && scrollY <= partScrollEnd ) {
            rv = (scrollY - partScrollStart) / partScrollY * (values[1] - values[0]) + values[0]
            
        } else if(scrollY < partScrollStart) {
            
            rv = values[0]
        } else if (scrollY > partScrollEnd) {
            
            rv = values[1]
        }

        
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
            desc1.style.opacity = calcValues(animation.desc1.opacity_in)            
            desc1.style.transform = `translate3d(0, ${calcValues(animation.desc1.transform_in)}%, 0)`;
        } else {
            desc1.style.opacity = calcValues(animation.desc1.opacity_out)
            desc1.style.transform = `translate3d(0, ${calcValues(animation.desc1.transform_out)}%, 0)`;

        }

        if(scrollRatio >= 0.45) {
            desc2.style.opacity = calcValues(animation.desc2.opacity_in)
            desc2.style.transform = `translate3d(0, ${calcValues(animation.desc2.transform_in)}%, 0)`;
        } else {
            desc2.style.opacity = calcValues(animation.desc2.opacity_out)
            desc2.style.transform = `translate3d(0, ${calcValues(animation.desc2.transform_out)}%, 0)`;
        }

        if(scrollRatio >= 0.65) {
            desc3.style.opacity = calcValues(animation.desc3.opacity_in)
            desc3.style.transform = `translate3d(0, ${calcValues(animation.desc3.transform_in)}%, 0)`;
        } else {
            desc3.style.opacity = calcValues(animation.desc3.opacity_out)
            desc3.style.transform = `translate3d(0, ${calcValues(animation.desc3.transform_out)}%, 0)`;
        }

        if(scrollRatio >= 0.85) {
            topContents.style.opacity = calcValues(animation.topContents.opacity_in)
            
        } else {
            topContents.style.opacity = calcValues(animation.topContents.opacity_out)
            
        }

        if(scrollRatio >= 0.9) {
            header.classList.add('header-nomal')
            headerBtn.classList.add('nomal')
            topContentsInner.style.display = 'none'
        } else {
            header.classList.remove('header-nomal')
            headerBtn.classList.remove('nomal')
            topContentsInner.style.display = 'block'
        }
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




    $('.info-counting-list').slick({
        autoplay: true, //자동자생
        autoplaySpeed: 2500,    //자동재생 시간
        infinite: true, //  무한반복
        dots: false,    //네비게이션 
        arrows: false,  //화살표
        vertical: true, //세로모드
        slidesToShow: 4,
    })


    
    let img = document.querySelectorAll('.info-image')[0]
    //slick 바꾸기전 지운다
    $('.info-counting-list').on('beforeChange', (e, s, cl, ns) => {
        document.querySelectorAll('.info-counting-item').forEach((item, index) => {
            item.classList.remove('selected')
        })
        
    })
    $('.info-counting-list').on('afterChange', (e, s, cl) =>{

        if ($($('.info-image')[0]).is(':visible')) {
            $($('.info-image')[1]).show()
            $($('.info-image')[0]).hide()
        } else {
            $($('.info-image')[0]).show()
            $($('.info-image')[1]).hide()
        }


        document.querySelectorAll('.info-counting-item.slick-slide.slick-active').forEach((item, index) => {
            item.classList.remove('selected')
            if(index === 1 ) {
                item.classList.add('selected')
                $(item.children[1]).counterUp({
                    delay: 10,
                    time: 800
                });
            }
        })
    })


    


    $('.review-card-wrap').slick({
        autoplay: true, //자동자생
        autoplaySpeed: 2000,    //자동재생 시간
        infinite: true, //  무한반복
        dots: false,    //네비게이션 
        arrows: false,  //화살표
        vertical: false, //세로모드
        slidesToShow: 1,
    })

    
    // $('.shopping-thumb-section').slick({
    //     autoplay: false, //자동자생
    //     autoplaySpeed: 500,    //자동재생 시간
    //     infinite: true, //  무한반복
    //     dots: false,    //네비게이션 
    //     arrows: false,  //화살표
    //     vertical: false, //세로모드
    //     slidesToShow: 1,
    // })
    
    

    // 동그란거 움직이기
    const reviewSectionTag = () => {

        let firstTag = document.querySelectorAll('.review-tag-list.first')[0].children
        let secondTag = document.querySelectorAll('.review-tag-list.second')[0].children
        let thirdTag = document.querySelectorAll('.review-tag-list.third')[0].children


        //첫번째 라인
        document.querySelectorAll('.review-tag-list.first .review-tag-indicator').forEach((item,index) => {  
            if(item.classList.contains('first-line-first')) {
                item.classList.remove('first-line-first')
                item.classList.add('first-line-third')
                firstTag[1].classList.remove('tag-selected')
                firstTag[3].classList.add('tag-selected')
            } else if (item.classList.contains('first-line-third')) {
                item.classList.remove('first-line-third')
                item.classList.add('first-line-fourth')
                firstTag[3].classList.remove('tag-selected')
                firstTag[4].classList.add('tag-selected')
            } else if (item.classList.contains('first-line-fourth')) {
                item.classList.remove('first-line-fourth')
                item.classList.add('first-line-first')
                firstTag[4].classList.remove('tag-selected')
                firstTag[1].classList.add('tag-selected')
            }
        })

        document.querySelectorAll('.review-tag-list.second .review-tag-indicator').forEach((item, index) => {
            if(item.classList.contains('second-line-third')) {
                item.classList.remove('second-line-third')
                item.classList.add('second-line-fourth')
                secondTag[3].classList.remove('tag-selected')
                secondTag[4].classList.add('tag-selected')
            } else if (item.classList.contains('second-line-fourth')) {
                item.classList.remove('second-line-fourth')
                item.classList.add('second-line-second')
                secondTag[4].classList.remove('tag-selected')
                secondTag[2].classList.add('tag-selected')
            } else if (item.classList.contains('second-line-second')) {
                item.classList.remove('second-line-second')
                item.classList.add('second-line-third')
                secondTag[2].classList.remove('tag-selected')
                secondTag[3].classList.add('tag-selected')
            }
        })
        document.querySelectorAll('.review-tag-list.third .review-tag-indicator').forEach((item, index) => {
            if(item.classList.contains('third-line-first')) {
                item.classList.remove('third-line-first')
                item.classList.add('third-line-third')
                thirdTag[1].classList.remove('tag-selected')
                thirdTag[3].classList.add('tag-selected')
            } else if (item.classList.contains('third-line-third')) {
                item.classList.remove('third-line-third')
                item.classList.add('third-line-second')
                thirdTag[3].classList.remove('tag-selected')
                thirdTag[2].classList.add('tag-selected')
            } else if (item.classList.contains('third-line-second')) {
                item.classList.remove('third-line-second')
                item.classList.add('third-line-first')
                thirdTag[2].classList.remove('tag-selected')
                thirdTag[1].classList.add('tag-selected')
            }
        })




    }

    const shoppingSectionThumb = () => {

        let ctl = document.querySelectorAll('.shopping-controller .controller-link')
        let thumb = document.querySelectorAll('.shopping-thumb-section .shopping-thumb')

        thumb.forEach((item, index)=> {

            if( item.classList.contains('thumb-img1') ) {
                item.classList.remove('thumb-img1')
                item.classList.add('thumb-img2')
                
                ctl[0].classList.remove('controller-link-selected')
                ctl[1].classList.add('controller-link-selected')
            } else if ( item.classList.contains('thumb-img2') ) {
                item.classList.remove('thumb-img2')
                item.classList.add('thumb-img3')
                ctl[1].classList.remove('controller-link-selected')
                ctl[2].classList.add('controller-link-selected')
            } else if ( item.classList.contains('thumb-img3') ) {
                item.classList.remove('thumb-img3')
                item.classList.add('thumb-img1')
                ctl[2].classList.remove('controller-link-selected')
                ctl[0 ].classList.add('controller-link-selected')
            }
        })


        document.querySelectorAll('.shopping-controller .controller-link').forEach((item, index) => {
            if( index === 0 && item.classList.contains('controller-link-selected') ) {
                item.classList.remove('controller-link-selected')
                item.classList.add('controller-link-selected')
            } else if ( index === 1 && item.classList.contains('controller-link-selected') ) {

            } else if ( index === 2 && item.classList.contains('controller-link-selected') ) {

            }
        })
    }

    const categorySectionList = () => {
        
        document.querySelectorAll('.category-item').forEach((item, index) => {

        })

    }


    // reviewSectionTag()
    setInterval(reviewSectionTag,2000)
    setInterval(shoppingSectionThumb,2000)
    // setInterval(categorySectionList,2000)

    // shoppingSectionThumb()
});