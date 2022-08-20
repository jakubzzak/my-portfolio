import React from "react";

const GoodReadsWidget = () => {
  return (
    <div id="gr_updates_widget">
      <iframe
        title="goodreads-updates"
        sandbox
        id="the_iframe"
        src="https://www.goodreads.com/widgets/user_update_widget?height=400&num_updates=3&user=41121845&width=250"
        width="248"
        height="330"
        frameborder="0"
      ></iframe>
      <div id="gr_footer">
        <a href="https://www.goodreads.com/">
          <img
            alt="Goodreads: Book reviews, recommendations, and discussion"
            rel="nofollow"
            src="https://s.gr-assets.com/images/layout/goodreads_logo_140.png"
          />
        </a>
      </div>
    </div>
  );
};

export default GoodReadsWidget;
