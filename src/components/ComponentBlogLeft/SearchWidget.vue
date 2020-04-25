<template>
	                            <div class="widget widget_search">
                                <h3 class="widget-title style-06">Search Widget</h3>
                                <div class="search-box">
                                    <form action="#" class="search-form clearfix" method="get">
                                        <input type="text" onblur="if (this.value == '') this.value = this.defaultValue;" onfocus="if (this.value == this.defaultValue) this.value = '';" value="Search Text" name="s" class="search-text">
                                        <button type="submit" class="search-submit">
                                            search
                                        </button>
                                    </form>
                                    <!-- search-form -->
                                </div>
                            </div>
                            <!-- widget -->
</template>
<script>
export default {
	name:"SearchWidget"
}
</script>