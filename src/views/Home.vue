<template>
  <div>
    <div id="main-content">
      <section class="kopa-area kopa-area-1 kopa-area-parallax white-text-style">
        <div class="kopa-area-tg-1">
          <span></span>
        </div>

        <div class="container">
			<TextCenterHome />
          <div class="row">
            <!-- col-md-12 -->
			<Search />
          </div>
          <!-- row -->
        </div>
      </section>
      <!-- kopa-area-1 -->
		<Responsive />

      <section class="kopa-area kopa-area-3">
        <div class="kopa-area-tg-2">
          <span></span>
        </div>

        <div class="kopa-area-tg-3">
          <span></span>
        </div>

        <div class="ct-icon-2">
          <span class="ti-microsoft-alt"></span>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="widget reading-module-filter-1">
                <header class="widget-header style-01">
                  <h3 class="widget-title style-02">
                    latest
                    <span>Products</span>
                  </h3>
                  <p>
                    Suspendisse ac tellus congue, eleifend leo eu, elementum
                    ligula. Suspendisse eget interdum
                    <br />est. Nam suscipit
                    diam nulla, porttitor blandit risus viverra sed. In hac...
                  </p>
                </header>
                <div class="widget-content">
                  <header class="masonry-header">
                    <div class="masonry-filter style-01">
                      <a href="#" data-val="*" class="style-01 active">
                        <span></span>All
                      </a>
                      <a href="#" data-val="1" class="style-02">
                        <span></span>Magazines
                      </a>
                      <a href="#" data-val="2" class="style-03">
                        <span></span>Comics
                      </a>
                      <a href="#" data-val="3" class="style-04">
                        <span></span>Books
                      </a>
                      <a href="#" data-val="4" class="style-05">
                        <span></span>Articles
                      </a>
                    </div>
                    <!-- masonry-filter -->
                    <a href="#" class="kopa-btn-5">see all</a>
                  </header>

                  <div class="masonry-container row">
                    
                  </div>
                  <!-- masonry-container -->

                  <div class="text-center">
                    <a class="kopa-btn-6" href="#">view all</a>
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
      <!-- kopa-area-3 -->

      <section class="kopa-area kopa-area-4">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="widget reading-module-scroll reading-module-scroll-1 ct-scroll-theme-1">
                <header class="widget-header style-01">
                  <h3 class="widget-title style-02">
                    our
                    <span>blog</span>
                  </h3>
                  <p>
                    Suspendisse ac tellus congue, eleifend leo eu, elementum
                    ligula. Suspendisse eget interdum
                    <br />est. Nam suscipit
                    diam nulla, porttitor blandit risus viverra sed. In hac...
                  </p>
                </header>
                <div class="widget-content">
                  <ul class="item-list clearfix">                    
                    <Post v-for="post in posts" :key="post.id" :post="post"/>
                  </ul>
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
      <!-- kopa-area-4 -->

      <section class="kopa-area kopa-area-5 kopa-area-parallax white-text-style">
        <div class="kopa-area-tg-4">
          <span></span>
        </div>

        <div class="kopa-area-tg-5">
          <span></span>
        </div>

        <div class="ct-icon-2">
          <span class="fa fa-star"></span>
        </div>

        <div class="container">
          <div class="row">
			  <BlackPage />
          </div>
          <!-- row -->
        </div>
        <!-- container -->
      </section>
      <!-- kopa-area-5 -->

      <section class="kopa-area kopa-area-6">
        <div class="kopa-area-tg-3">
          <span></span>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div
                class="widget reading-module-scroll widget reading-module-scroll-2 ct-scroll-theme-1"
              >
                <header class="widget-header style-01">
                  <h3 class="widget-title style-02">
                    special
                    <span>products</span>
                  </h3>
                  <p>
                    Suspendisse ac tellus congue, eleifend leo eu, elementum
                    ligula. Suspendisse eget interdum
                    <br />est. Nam suscipit
                    diam nulla, porttitor blandit risus viverra sed. In hac...
                  </p>
                </header>
                <div class="row">
                  <div class="widget-content">
                    <ul class="item-list">
                      <Book2 v-for="book in books" :key="book.id" :book="book" />
                    </ul>
                  </div>
                </div>
                <!-- row -->
              </div>
              <!-- widget -->
            </div>
            <!-- col-md-12 -->
          </div>
          <!-- row -->
        </div>
        <!-- container -->
      </section>
      <!-- kopa-area-6 -->

      <section class="kopa-area kopa-area-7">
		  <Tablet />
      </section>
      <!-- kopa-area-7 -->
    </div>
    <!-- main-content -->
  </div>
</template>
<script>
import Book from "../components/Books/Book";
import Book2 from "../components/Books/Book2";
import Post from "../components/Blog/Post";
import Search from '../components/Search/Search';  
import TextCenterHome from '../components/TextCenterHome/TextCenterHome';   
import Responsive from '../components/Responsive/Responsive';
import BlackPage from '../components/BlackPage/BlackPage';
import Tablet from '../components/Tablet/Tablet';
export default {
  name: "Home",
  components: {
    Book,
    Book2,
    Post,
	Search,
	TextCenterHome,
	Responsive,
	BlackPage,
	Tablet,
  },
  data() {
    return {
      books: [
        {
          id: 1,
          name: "Put a Title Here",
          image: "images/p2/1.jpg",
          discunt: "20%",
          rate: "3",
          description:
            " Suspendisse ac tellus congue and eleifend leo eu, elementum. "
        },
        {
          id: 2,
          name: "Hoseein bajan",
          image: "images/p2/2.jpg",
          discunt: "20%",
          rate: "3",
          description: " hossein bajan hastan. "
        },
        {
          id: 3,
          name: "Adell bajan",
          image: "images/p2/3.jpg",
          discunt: "20%",
          rate: "3",
          description: " salam bande . "
        },
        {
          id: 4,
          name: "Sara etemadian",
          image: "images/p2/4.jpg",
          discunt: "20%",
          rate: "3",
          description: "lorbgdgfbvvdfd"
        },
        {
          id: 5,
          name: "Milad saeedi",
          image: "images/p2/5.jpg",
          discunt: "20%",
          rate: "3",
          description:
            " Suspendisse ac tellus congue and eleifend leo eu, elementum. "
        },
        {
          id: 6,
          name: "Put a Title Here",
          image: "images/p2/6.jpg",
          discunt: "20%",
          rate: "3",
          description:
            " Suspendisse ac tellus congue and eleifend leo eu, elementum. "
        },
        {
          id: 7,
          name: "Put a Title Here",
          image: "images/p2/7.jpg",
          discunt: "20%",
          rate: "3",
          description:
            " Suspendisse ac tellus congue and eleifend leo eu, elementum. "
        },
        {
          id: 8,
          name: "Put a Title Here",
          image: "images/p2/8.jpg",
          discunt: "20%",
          rate: "3",
          description:
            " Suspendisse ac tellus congue and eleifend leo eu, elementum. "
        }
      ],
      posts: [
        {
          id: 1,
          name:
            " Aenean condimentum felis non ante tepus sit amet gravida nullam. ",
		  image: "images/p3/1.jpg",
		  commentCount:"4",
          date: "24 Octobr",
          description:
            "  In eleifend sapien a faucibus elementum. Sed use ndrerit purus et dignissim. Nulla luctus sequat ue a eleifend. Fusce nec ante vel mi pulvinar ultrics. Nulla sodales lorem nisi. "
        },
        {
          id: 2,
          name:
            " Aenean condimentum felis non ante tepus sit amet gravida nullam. ",
		  image: "images/p3/2.jpg",
		  commentCount:"4",
          date: "24 Octobr",
          description:
            "  In eleifend sapien a faucibus elementum. Sed use ndrerit purus et dignissim. Nulla luctus sequat ue a eleifend. Fusce nec ante vel mi pulvinar ultrics. Nulla sodales lorem nisi. "
		},
		{
          id: 3,
          name:
            " Aenean condimentum felis non ante tepus sit amet gravida nullam. ",
		  image: "images/p3/3.jpg",
		  commentCount:"4",
          date: "24 Octobr",
          description:
            "  In eleifend sapien a faucibus elementum. Sed use ndrerit purus et dignissim. Nulla luctus sequat ue a eleifend. Fusce nec ante vel mi pulvinar ultrics. Nulla sodales lorem nisi. "
		},
		{
          id: 4,
          name:
            " Aenean condimentum felis non ante tepus sit amet gravida nullam. ",
		  image: "images/p3/1.jpg",
		  commentCount:"4",
          date: "24 Octobr",
          description:
            "  In eleifend sapien a faucibus elementum. Sed use ndrerit purus et dignissim. Nulla luctus sequat ue a eleifend. Fusce nec ante vel mi pulvinar ultrics. Nulla sodales lorem nisi. "
        },
        {
          id: 5,
          name:
            " Aenean condimentum felis non ante tepus sit amet gravida nullam. ",
		  image: "images/p3/2.jpg",
		  commentCount:"4",
          date: "24 Octobr",
          description:
            "  In eleifend sapien a faucibus elementum. Sed use ndrerit purus et dignissim. Nulla luctus sequat ue a eleifend. Fusce nec ante vel mi pulvinar ultrics. Nulla sodales lorem nisi. "
		},
		{
          id: 6,
          name:
            " Aenean condimentum felis non ante tepus sit amet gravida nullam. ",
		  image: "images/p3/3.jpg",
		  commentCount:"4",
          date: "24 Octobr",
          description:
            "  In eleifend sapien a faucibus elementum. Sed use ndrerit purus et dignissim. Nulla luctus sequat ue a eleifend. Fusce nec ante vel mi pulvinar ultrics. Nulla sodales lorem nisi. "
        }
      ]
    };
  }
};
</script>