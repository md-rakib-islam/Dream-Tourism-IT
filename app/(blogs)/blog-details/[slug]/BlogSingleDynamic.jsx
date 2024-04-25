"use client";
import CallToActions from "@/components/common/CallToActions";
// import DefaultHeader from "@/components/header/default-header";
// import DefaultFooter from "@/components/footer/default";
import Loading from "@/app/loading";
import BlogNavigator from "@/components/blog/blog-details/BlogNavigator";
import Comments from "@/components/blog/blog-details/Comments";
// import DetailsContent from "@/components/blog/blog-details/DetailsContent";
import FormReply from "@/components/blog/blog-details/FormReply";
import RelatedBlog from "@/components/blog/blog-details/RelatedBlog";
import TopComment from "@/components/blog/blog-details/TopComment";
import LocationTopBar from "@/components/common/LocationTopBar";
import blogsData from "@/data/blogs";
import {
  useGetAllBlogContentsQuery,
  useGetAllContentQuery,
} from "@/features/content/contentApi";
import { useGetImagesByMenuIdQuery } from "@/features/image/imageApi";
import { Interweave } from "interweave";
import { useSelector } from "react-redux";

// export const metadata = {
//   title: "Blog Single || GoTrip - Travel & Tour React NextJS Template",
//   description: "GoTrip - Travel & Tour React NextJS Template",
// };

const BlogSingleDynamic = ({ params }) => {
  const id = params.slug;
  const { menuItems } = useSelector((state) => state.menus);
  const { currentPage, PageSize } = useSelector((state) => state.pagination);
  const blogId = menuItems.find((item) => item.name === "Blog")?.id;
  const { isSuccess, data, isLoading } = useGetImagesByMenuIdQuery(blogId);
  const {
    isSuccess: isBlogDetailSuccess,
    data: blogDetails,
    isLoading: isBlogDetailsLoading,
  } = useGetAllBlogContentsQuery(id);
  const {
    isSuccess: isContentSuccess,
    data: contentItems,
    isLoading: isBlogContentLoading,
  } = useGetAllContentQuery(blogId);

  let relatedPosts = [];
  if (isContentSuccess) {
    relatedPosts = contentItems?.filter(
      (item) => item.category === blogDetails?.category
    );
    relatedPosts = relatedPosts?.filter((item) => item.id != id);
    console.log("related", relatedPosts);
  }

  const blog = blogsData.find((item) => item.id == id) || blogsData[0];

  let blogItem = {};

  if (isSuccess && isBlogDetailSuccess) {
    blogItem = {
      id: blogDetails.id,
      img: data.content_images[blogDetails.name],
      title: blogDetails.name,
      date: "Jan 06, 2023",
      delayAnimation: "100",
      details: blogDetails.value,
      tag: "art",
      tags: ["adventure_travel", "food_drink"],
    };
  }

  return (
    <>
      <div className="header-margin"></div>
      {/* header top margin */}

      {/* <DefaultHeader /> */}
      {/* End Header 1 */}

      <LocationTopBar />
      {/* End location top bar section */}

      {isLoading && isBlogDetailsLoading ? (
        <div
          style={{
            width: "1200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loading />
        </div>
      ) : (
        <section className="layout-pt-md layout-pb-md">
          <div className="container">
            <div className="row y-gap-40 justify-center text-center">
              <div className="col-auto">
                <div className="text-15 fw-500 text-blue-1 mb-8 text-capitalize">
                  {blogItem?.tag}
                </div>
                <h1 className="text-30 fw-600">{blogItem?.title}</h1>
                <div className="text-15 text-light-1 mt-10">
                  {blogItem?.date}
                </div>
              </div>
              <div className="col-12">
                <img
                  src={`${blogItem?.cloudflare_image}`}
                  alt={blogItem?.title}
                  className="col-12 rounded-8 w-100 img_large_details"
                />
              </div>
            </div>
            {/* End .row top bar image and title */}

            <div className="row y-gap-30 justify-center">
              <div className="col-xl-8 col-lg-10 layout-pt-md">
                <Interweave
                  allowAttributes
                  allowElements
                  disableLineBreaks={false}
                  content={blogItem.details}
                />
                {/* <DetailsContent /> */}
                {/* Details content */}

                <div className="border-top-light border-bottom-light py-30 mt-30">
                  <TopComment />
                </div>
                {/* End  topcommnet  */}
                <div className="border-bottom-light py-30">
                  <BlogNavigator />
                </div>
                {/* End BlogNavigator */}

                <h2 className="text-22 fw-500 mb-15 pt-30">Guest reviews</h2>
                <Comments />
                {/* End comments components */}

                <div className="border-top-light pt-40 mt-40" />

                <div className="row">
                  <div className="col-auto">
                    <h3 className="text-22 fw-500">Leave a Reply</h3>
                    <p className="text-15 text-dark-1 mt-5">
                      Your email address will not be published.
                    </p>
                  </div>
                </div>
                {/* End Leave a repy title */}

                <FormReply />
              </div>
              {/* End .col */}
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}
        </section>
      )}
      {/* Details Blog Details Content */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Related content</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40">
            <RelatedBlog relatedPosts={relatedPosts} />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Related Content */}

      {/* <DefaultFooter /> */}
      {/* End Call To Actions Section */}
    </>
  );
};

export default BlogSingleDynamic;
