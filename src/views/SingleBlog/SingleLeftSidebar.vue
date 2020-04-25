<template>
	    <div class="main-container">
        <div id="main-content">

            <section class="kopa-area kopa-area-16 kopa-area-parallax white-text-style">

                <div class="kopa-area-tg-5">
                    <span></span>
                </div>

                <div class="container">

                    <div class="kopa-breadcrumb">

                        <h3>single blog</h3>

                        <div class="breadcrumb-content">
                            <span itemtype="http://data-vocabulary.org/Breadcrumb" itemscope="">
                                <a itemprop="url" href="#">
                                    <span itemprop="title">Home</span>
                                </a>
                            </span>
                            <span>&nbsp;&nbsp;>&nbsp;&nbsp;</span>
                            <span itemtype="http://data-vocabulary.org/Breadcrumb" itemscope="">
                                <a itemprop="url" class="current-page">
                                    <span itemprop="title">single blog</span>
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
                    
                        <div class="main-col col-md-8 col-sm-8 col-xs-8">

							<CenterSlider />
                    
                        </div>
                        <!-- col-md-8 -->
                    
                        <div class="sidebar style-01 col-md-4 col-sm-4 col-xs-4">

								<SearchWidget />
 
                            <div class="widget widget_categories">
                                <h3 class="widget-title style-06">Blog Categories</h3>
                                <ul class="clearfix">
									<BlogCategori v-for="blogcategori in blogcategoris" :key="blogcategori.id" :blogcategori="blogcategori" />
                                </ul>
                            </div>
                            <!-- widget -->

                            <div class="widget reading-module-article-list-4">
                                <h3 class="widget-title style-06">Popular post</h3>
                                <div class="widget-content">
                                    <ul>
										<PopularPost v-for="popularpost in popularposts" :key="popularpost.id" :popularpost="popularpost" />
                                    </ul>                
                                </div>
                            </div>
                            <!-- widget --> 

                            <div class="widget reading-module-instagram-1">

                                <h3 class="widget-title style-06">instagram</h3>
                                <div class="widget-content">
                                    <ul class="clearfix">
										<Instagram v-for="instagram in instagrams" :key="instagram.id" :instagram="instagram" />
                                    </ul>
                                </div>
                                <!-- widget-content --> 

                            </div>
                            <!-- widget -->

                            <div class="widget widget_archive">
                                <h3 class="widget-title style-06">Blog Categories</h3>
                                <ul class="clearfix">

									<BlogCategori v-for="blogcategori in blogcategoris" :key="blogcategori.id" :blogcategori="blogcategori" />

                                </ul>
                            </div>
                            <!-- widget -->

								<FindUsOnFacebook />

								<TwitterWidget />

								<Top />
                    
                        </div>
                        <!-- col-md-4 -->
                    
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
import CenterSlider from "../../components/ComponentSingle/CenterSlider"
import SearchWidget from "../../components/ComponentBlogLeft/SearchWidget"
import BlogCategori from "../../components/ComponentBlogLeft/BlogCategori"
import PopularPost from "../../components/ComponentBlogLeft/PopularPost"
import Instagram from "../../components/ComponentBlogLeft/Instagram"
import FindUsOnFacebook from "../../components/ComponentBlogLeft/FindUsOnFacebook"
import TwitterWidget from "../../components/ComponentBlogLeft/TwitterWidget"
import Top from "../../components/ComponentBlogLeft/Top"


export default {
	name:"SingleLeftSidebar",
	components:{
		CenterSlider,
		SearchWidget,
		BlogCategori,
		PopularPost,
		Instagram,
		FindUsOnFacebook,
		TwitterWidget,
		Top
	},
	data(){
		return{
			instagrams:[
				{
					id:1,
					image:"images/p22/1.jpg",
				},
								{
					id:2,
					image:"images/p22/2.jpg",
				},
								{
					id:3,
					image:"images/p22/3.jpg",
				},
								{
					id:4,
					image:"images/p22/4.jpg",
				},
								{
					id:5,
					image:"images/p22/5.jpg",
				},
								{
					id:6,
					image:"images/p22/6.jpg",
				},

			],
			popularposts:[
				{
					id:1,
					date:"May 1, 2016",
					icon:"fa fa-calendar-o",
					title:"Aenean condime ntum felis non...",
					image:"images/p15/2.jpg",

				},
								{
					id:2,
					date:"May 1, 2016",
					icon:"fa fa-calendar-o",
					title:"Aenean condime ntum felis non...",
					image:"images/p15/3.jpg",

				},
								{
					id:3,
					date:"May 1, 2016",
					icon:"fa fa-calendar-o",
					title:"Aenean condime ntum felis non...",
					image:"images/p15/3.jpg",

				},
								{
					id:4,
					date:"May 1, 2016",
					icon:"fa fa-calendar-o",
					title:"Aenean condime ntum felis non...",
					image:"images/p15/4.jpg",

				},
			],
				blogcategoris:[
			{
				id:1,
				name:"All",
				year:"5501"
			},
			{
				id:2,
				name:"Magazinez",
				year:"2021"
			},
						{
				id:3,
				name:"Comics",
				year:"214"
			},
									{
				id:4,
				name:"Books",
				year:"1457"
			},
									{
				id:5,
				name:"Articles",
				year:"2021"
			},
									{
				id:6,
				name:"Other",
				year:"6543"
			},
		]	,
		}
	}
}
</script>