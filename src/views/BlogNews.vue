<template>
	    <div class="main-container">
        <div id="main-content">

            <section class="kopa-area kopa-area-16 kopa-area-parallax white-text-style">

                <div class="kopa-area-tg-5">
                    <span></span>
                </div>

                <div class="container">

                    <div class="kopa-breadcrumb">

                        <h3>news</h3>

                        <div class="breadcrumb-content">
                            <span itemtype="http://data-vocabulary.org/Breadcrumb" itemscope="">
                                <a itemprop="url" href="#">
                                    <span itemprop="title">Home</span>
                                </a>
                            </span>
                            <span>&nbsp;&nbsp;>&nbsp;&nbsp;</span>
                            <span itemtype="http://data-vocabulary.org/Breadcrumb" itemscope="">
                                <a itemprop="url" class="current-page">
                                    <span itemprop="title">news</span>
                                </a>
                            </span>
                        </div>

                    </div>  
                    <!-- kopa-breadcrumb -->
                
                </div>
                <!-- container -->
                
            </section>
            <!-- kopa-area-16 -->

            <section class="kopa-area kopa-area-20">

                <div class="container">

                    <div class="row">
                    
                        <div class="col-md-12 col-sm-12 col-xs-12">

                            <div class="widget reading-module-article-list-5">
                                <div class="widget-content">

                                    <ul class="row ul-mh">

                                        <li class="col-md-12 col-sm-12 col-xs-12">
                                            <article class="entry-item">
                                                <h5>
                                                    News March, 2016
                                                </h5>
                                            </article>
                                        </li>
										<NewsSlider v-for="newsslider in newssliders" :key="newsslider.id" :newsslider="newsslider" />

                                    </ul>

                                    <div class="ct-loadmore text-center">
                                        <button class="kopa-btn-14" id="lm-btn-2">Load More</button>
                                    </div>
                                                        
                                </div>
                            </div>
                            <!-- widget --> 
                    
                        </div>
                        <!-- col-md-12 -->
                    
                    </div>
                    <!-- row --> 
                
                </div>
                <!-- container -->
                
            </section>
            <!-- kopa-area-18 -->

        </div>
	    </div>
</template>
<script>
import NewsSlider from "../components/ComponentNews/NewsSlider"
export default {
	name:"BlogNews",
	components:{
		NewsSlider,
	},
	data(){
		return{
			newssliders:[
				{
					id:1,
					image:"images/p19/1.jpg",
					description:"In eleifend sapien a faucibus elementum. Sed use ndrerit purus et dignissim. Nulla luctus sequat ue a eleifend. Fusce nec ante vel mi pulvinar ultrics. Nulla sodales lorem nisi.",
					title:"Aenean condimentum felis non ante tepus sit amet gravida nullam",
					date:"24 October"
				},
								{
					id:2,
					image:"images/p19/2.jpg",
					description:"In eleifend sapien a faucibus elementum. Sed use ndrerit purus et dignissim. Nulla luctus sequat ue a eleifend. Fusce nec ante vel mi pulvinar ultrics. Nulla sodales lorem nisi.",
					title:"Aenean condimentum felis non ante tepus sit amet gravida nullam",
					date:"24 October"
				},
											{
					id:3,
					image:"images/p19/3.jpg",
					description:"In eleifend sapien a faucibus elementum. Sed use ndrerit purus et dignissim. Nulla luctus sequat ue a eleifend. Fusce nec ante vel mi pulvinar ultrics. Nulla sodales lorem nisi.",
					title:"Aenean condimentum felis non ante tepus sit amet gravida nullam",
					date:"24 October"
				},
											{
					id:4,
					image:"images/p19/4.jpg",
					description:"In eleifend sapien a faucibus elementum. Sed use ndrerit purus et dignissim. Nulla luctus sequat ue a eleifend. Fusce nec ante vel mi pulvinar ultrics. Nulla sodales lorem nisi.",
					title:"Aenean condimentum felis non ante tepus sit amet gravida nullam",
					date:"24 October"
				},
											{
					id:5,
					image:"images/p19/5.jpg",
					description:"In eleifend sapien a faucibus elementum. Sed use ndrerit purus et dignissim. Nulla luctus sequat ue a eleifend. Fusce nec ante vel mi pulvinar ultrics. Nulla sodales lorem nisi.",
					title:"Aenean condimentum felis non ante tepus sit amet gravida nullam",
					date:"24 October"
				},
											{
					id:6,
					image:"images/p19/6.jpg",
					description:"In eleifend sapien a faucibus elementum. Sed use ndrerit purus et dignissim. Nulla luctus sequat ue a eleifend. Fusce nec ante vel mi pulvinar ultrics. Nulla sodales lorem nisi.",
					title:"Aenean condimentum felis non ante tepus sit amet gravida nullam",
					date:"24 October"
				},
											{
					id:7,
					image:"images/p19/2.jpg",
					description:"In eleifend sapien a faucibus elementum. Sed use ndrerit purus et dignissim. Nulla luctus sequat ue a eleifend. Fusce nec ante vel mi pulvinar ultrics. Nulla sodales lorem nisi.",
					title:"Aenean condimentum felis non ante tepus sit amet gravida nullam",
					date:"24 October"
				},
											{
					id:8,
					image:"images/p19/1.jpg",
					description:"In eleifend sapien a faucibus elementum. Sed use ndrerit purus et dignissim. Nulla luctus sequat ue a eleifend. Fusce nec ante vel mi pulvinar ultrics. Nulla sodales lorem nisi.",
					title:"Aenean condimentum felis non ante tepus sit amet gravida nullam",
					date:"24 October"
				},
											{
					id:9,
					image:"images/p19/2.jpg",
					description:"In eleifend sapien a faucibus elementum. Sed use ndrerit purus et dignissim. Nulla luctus sequat ue a eleifend. Fusce nec ante vel mi pulvinar ultrics. Nulla sodales lorem nisi.",
					title:"Aenean condimentum felis non ante tepus sit amet gravida nullam",
					date:"24 October"
				},
											{
					id:10,
					image:"images/p19/5.jpg",
					description:"In eleifend sapien a faucibus elementum. Sed use ndrerit purus et dignissim. Nulla luctus sequat ue a eleifend. Fusce nec ante vel mi pulvinar ultrics. Nulla sodales lorem nisi.",
					title:"Aenean condimentum felis non ante tepus sit amet gravida nullam",
					date:"24 October"
				},
											{
					id:11,
					image:"images/p19/3.jpg",
					description:"In eleifend sapien a faucibus elementum. Sed use ndrerit purus et dignissim. Nulla luctus sequat ue a eleifend. Fusce nec ante vel mi pulvinar ultrics. Nulla sodales lorem nisi.",
					title:"Aenean condimentum felis non ante tepus sit amet gravida nullam",
					date:"24 October"
				},
											{
					id:12,
					image:"images/p19/2.jpg",
					description:"In eleifend sapien a faucibus elementum. Sed use ndrerit purus et dignissim. Nulla luctus sequat ue a eleifend. Fusce nec ante vel mi pulvinar ultrics. Nulla sodales lorem nisi.",
					title:"Aenean condimentum felis non ante tepus sit amet gravida nullam",
					date:"24 October"
				},

			]
		}
	}
}
</script>