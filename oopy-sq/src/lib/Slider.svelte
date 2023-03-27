<script>
    import { register } from "swiper/element/bundle";
    register();

    const spaceBetween = 10;
    const onProgress = (e) => {
        const [swiper, progress] = e.detail;
        console.log(progress);
    };
    const onSlideChange = (e) => {
        console.log("slide changed");
    };

    let bullet = ['1' ,'2', '3', '4', '5', '6']
</script>

<div id='logo-border'>
    <div id='logo'>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="717.155" height="458.525" viewBox="0 0 717.155 458.525">
                <path id="Path_15434" data-name="Path 15434" d="M7394.5,928.79s-15.063-5.886-31.43-13.607c-13.156-6.207-36.546-20.648-36.546-20.648-51.834-33.214-82.717-74.464-83.326-119.482l0-.268c-1.235-113.376,189.864-207.653,426.974-210.6,106.4-1.321,203.993,15.984,279.408,45.7-74.766-49.03-185.7-80.1-309.526-80.1-225.13,0-407.629,102.637-407.629,229.265,0,55.068,34.531,105.591,92.074,145.139,0,0,15.944,11.056,31.885,19.648s34.575,16.685,34.575,16.685c68.891,29.955,155.286,47.789,249.1,47.789,78.669,0,152.129-12.545,214.426-34.255-54.459,12.7-115.146,20.169-179.206,20.965-107.044,1.33-205.171-16.2-280.772-46.232" transform="translate(-7232.424 -529.787)" fill="#004391"/>
            </svg>
        </div>
    </div>
</div>
<span class="custom-pagination">
    <h1>hi</h1>
</span>

<swiper-container
    slides-per-view={3}
    space-between={spaceBetween}
    centered-slides={true}
    pagination={{
        el: '.custom-pagination',
        clickable: true,
        renderBullet: function (index, className) {
    	return `<button class="${className}">${bullet[index]}</button>`;
  	}
    }}
    breakpoints={{
        768: {
            slidesPerView: 6,
        },
    }}
    on:progress={onProgress}
    on:slidechange={onSlideChange}
>
    <swiper-slide>
        <h3>스위스 원산지</h3>
        <p>
            이름은 같은 성분일지라도 원산지는 다릅니다. 유스트 제품은 언제나
            아름답고 맑은 스위스의 자연에 기반합니다. 유스트는 다양한 식물과
            허브로부터 가치있는 자연의 성분을 얻습니다.
        </p>
    </swiper-slide>
    <swiper-slide>
        <h3>재배 및 수확</h3>
        <p>
            이름은 같은 성분일지라도 원산지는 다릅니다. 유스트 제품은 언제나
            아름답고 맑은 스위스의 자연에 기반합니다. 유스트는 다양한 식물과
            허브로부터 가치있는 자연의 성분을 얻습니다.
        </p>
    </swiper-slide>
    <swiper-slide>
        <h3>품질 관리</h3>
        <p>
            이름은 같은 성분일지라도 원산지는 다릅니다. 유스트 제품은 언제나
            아름답고 맑은 스위스의 자연에 기반합니다. 유스트는 다양한 식물과
            허브로부터 가치있는 자연의 성분을 얻습니다.
        </p>
    </swiper-slide>
    <swiper-slide>
        <h3>가공</h3>
        <p>
            이름은 같은 성분일지라도 원산지는 다릅니다. 유스트 제품은 언제나
            아름답고 맑은 스위스의 자연에 기반합니다. 유스트는 다양한 식물과
            허브로부터 가치있는 자연의 성분을 얻습니다.
        </p>
    </swiper-slide>
    <swiper-slide>
        <h3>포장</h3>
        <p>
            이름은 같은 성분일지라도 원산지는 다릅니다. 유스트 제품은 언제나
            아름답고 맑은 스위스의 자연에 기반합니다. 유스트는 다양한 식물과
            허브로부터 가치있는 자연의 성분을 얻습니다.
        </p>
    </swiper-slide>
    <swiper-slide>
        <h3>직접 판매</h3>
        <p>
            이름은 같은 성분일지라도 원산지는 다릅니다. 유스트 제품은 언제나
            아름답고 맑은 스위스의 자연에 기반합니다. 유스트는 다양한 식물과
            허브로부터 가치있는 자연의 성분을 얻습니다.
        </p>
    </swiper-slide>
</swiper-container>


<style>
    #logo-border {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        pointer-events: none;
        position: relative;
    }
    
    
    #logo div{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #logo div svg{
        width: 80%;
    }

</style>