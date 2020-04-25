<template>
    <div class="main-container">
        <div id="main-content">

            <section class="kopa-area kopa-area-16 kopa-area-parallax white-text-style">

                <div class="kopa-area-tg-5">
                    <span></span>
                </div>

                <div class="container">

                    <div class="kopa-breadcrumb">

                        <h3>blog</h3>

                        <div class="breadcrumb-content">
                            <span itemtype="http://data-vocabulary.org/Breadcrumb" itemscope="">
                                <a itemprop="url" href="#">
                                    <span itemprop="title">Home</span>
                                </a>
                            </span>
                            <span>&nbsp;&nbsp;>&nbsp;&nbsp;</span>
                            <span itemtype="http://data-vocabulary.org/Breadcrumb" itemscope="">
                                <a itemprop="url" class="current-page">
                                    <span itemprop="title">blog</span>
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

                            <ul class="blog-article-list-1">

									<!-- <SliderBlog /> -->
									<SliderBlog v-for="sliderblog in sliderblogs" :key="sliderblog.id" :sliderblog="sliderblog" />
                            
							</ul>
                            <!-- blog-article-list-1 --> 

                            <nav class="navigation pagination" role="navigation">
                                <h2 class="screen-reader-text">Posts navigation</h2>
                                <div class="nav-links">
                                    <a class="prev page-numbers" href="#">      
                                        <i class="fa fa-angle-left"></i> 
                                    </a>
                                    <a class="page-numbers" href="#">1</a>
                                    <span class="page-numbers current">2</span>
                                    <a class="page-numbers" href="#">3</a>
                                    <a class="next page-numbers" href="#">
                                        <i class="fa fa-angle-right"></i>
                                    </a>            
                                </div>
                            </nav>
                            <!-- pagination -->
                    
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

                            <div class="widget reading-module-social-1">
                                <h3 class="widget-title style-06">Stay connected</h3>
                                <div class="widget-content">
                                    <ul class="ul-mh clearfix">
		
										<StayConnected v-for="stayconnected in stayconnecteds" :key="stayconnected.id" :stayconnected="stayconnected" />
		

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
import SearchWidget from "../components/ComponentBlogLeft/SearchWidget"
import BlogCategori from "../components/ComponentBlogLeft/BlogCategori"
import SliderBlog from "../components/ComponentBlogLeft/SliderBlog"
import StayConnected from "../components/ComponentBlogLeft/StayConnected"
import PopularPost from "../components/ComponentBlogLeft/PopularPost"
import Instagram from "../components/ComponentBlogLeft/Instagram"
import FindUsOnFacebook from "../components/ComponentBlogLeft/FindUsOnFacebook"
import TwitterWidget from "../components/ComponentBlogLeft/TwitterWidget"
import Top from "../components/ComponentBlogLeft/Top"


export default {
	name:"BlogLeftSlider",
	components:{
		SearchWidget,
		BlogCategori,
		SliderBlog,
		StayConnected,
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
			stayconnecteds:[
				{
					id:1,
					icon:"fa fa-facebook",
					flow:"4.1 m",
					discount:"fans"
				},
								{
					id:2,
					icon:"fa fa-twitter",
					flow:"178",
					discount:"followers"
				},
								{
					id:3,
					icon:"fa fa-google-plus",
					flow:"884.0 K",
					discount:"followers"
				},
								{
					id:4,
					icon:"fa fa-vimeo",
					flow:"232",
					discount:"Subscribers"
				},
								{
					id:5,
					icon:"fa fa-youtube-play",
					flow:"331.7 K",
					discount:"Subscribers"
				},
								{
					id:6,
					icon:"fa fa-share-alt",
					flow:"7.4 K",
					discount:"Shares"
				},
			],
		sliderblogs:[
			{
				id:1,
				image:"images/p21/3.jpg",
				name:"Slider Post",
				title:"Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.",
				date:" 24 October",
				description:"This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti.",

			},
			{
				id:2,
				image:"images/p21/4.jpg",
				name:"Slider Post",
				title:"Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.",
				date:" 24 October",
				description:"This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti.",

			},
						{
				id:3,
				image:"images/p21/5.jpg",
				name:"Slider Post",
				title:"Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.",
				date:" 24 October",
				description:"This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti.",

			},
						{
				id:4,
				image:"images/p21/6.jpg",
				name:"Slider Post",
				title:"Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.",
				date:" 24 October",
				description:"This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti.",

			},
						{
				id:5,
				image:"images/p21/2.jpg",
				name:"Slider Post",
				title:"Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.",
				date:" 24 October",
				description:"This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti.",

			},
						{
				id:6,
				image:"images/p21/1.jpg",
				name:"Slider Post",
				title:"Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.",
				date:" 24 October",
				description:"This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti.",

			},
			{
				id:7,
				image:"images/p21/8.jpg",
				name:"Slider Post",
				title:"Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.",
				date:" 24 October",
				description:"This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti.",

			},
			{
				id:8,
				image:"images/p21/9.jpg",
				name:"Slider Post",
				title:"Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.",
				date:" 24 October",
				description:"This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti.",

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
		]	
		}
	}
}
</script>