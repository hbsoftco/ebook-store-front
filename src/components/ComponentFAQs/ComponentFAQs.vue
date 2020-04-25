<template>
	                            <div class="widget reading-module-form-1">
                                <div class="widget-content">
                                    <div class="ct-form-box style-01">
                                        <div id="respond" class="comment-respond">
                                            <form class="ct-form-2" action="http://dinhvankiem.com/demo/e-reading/html/processForm.php" method="post" novalidate="novalidate">

                                                <span></span>

                                                <h4>Do you have Question?</h4>

                                                <p class="input-block">
                                                    <input type="text" value="Name" onfocus="if(this.value=='Name')this.value='';" onblur="if(this.value=='')this.value='Name';" name="name" class="valid">
                                                </p>

                                                <p class="input-block">
                                                    <input type="text" value="Email" onfocus="if(this.value=='Email')this.value='';" onblur="if(this.value=='')this.value='Email';" name="email" class="valid">
                                                </p>

                                                <p class="textarea-block">
                                                    <textarea name="message" placeholder="Question?" cols="88" rows="3"></textarea>
                                                </p>
                                                
                                                <p class="input-block btn-block clearfix text-center">           
                                                    <input type="submit" value="Send Question" class="ct-submit-2">
                                                </p>
                                                
                                            </form>

                                            <div id="response-2"></div>
                                        </div>
                                    </div>
                                    <!-- form-box -->
                                </div>
                            </div>
                            <!-- widget --> 
</template>
<script>
export default {
	name:"ComponentFAQs"
}
</script>