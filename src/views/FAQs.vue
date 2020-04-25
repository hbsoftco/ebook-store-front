<template>
	    <div class="main-container">
        <div id="main-content">

            <section class="kopa-area kopa-area-16 kopa-area-parallax white-text-style">

                <div class="kopa-area-tg-5">
                    <span></span>
                </div>

                <div class="container">

                    <div class="kopa-breadcrumb">

                        <h3>Frequently Ask Question</h3>

                        <div class="breadcrumb-content">
                            <span itemtype="http://data-vocabulary.org/Breadcrumb" itemscope="">
                                <a itemprop="url" href="#">
                                    <span itemprop="title">Home</span>
                                </a>
                            </span>
                            <span>&nbsp;&nbsp;>&nbsp;&nbsp;</span>
                            <span itemtype="http://data-vocabulary.org/Breadcrumb" itemscope="">
                                <a itemprop="url" class="current-page">
                                    <span itemprop="title">FAQs</span>
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

                    <div class="row ct-row-3">
                    
						<ReadingFAQ />
                    
                        <div class="sidebar col-md-3 col-sm-3 col-xs-3 col-md-pull-9">

								<ComponentFAQs />

								<UserfullLink />
                    
                        </div>
                        <!-- col-md-3 -->
                    
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
import ComponentFAQs from "../components/ComponentFAQs/ComponentFAQs"
import UserfullLink from "../components/ComponentFAQs/UserfullLink"
import ReadingFAQ from "../components/ComponentFAQs/ReadingFAQ"
export default {
	name:"FAQs",
	components:{
		ComponentFAQs,
		UserfullLink,
		ReadingFAQ
	}
}
</script>