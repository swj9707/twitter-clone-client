import { WidgetsInput, Widgets, WidgetsContainer } from "@/Styles/HomeStyles";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Widget = () => {
  return (
    <Widgets>
      <WidgetsInput>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input type="text" placeholder="Search Twitter" />
      </WidgetsInput>
      <WidgetsContainer>
        <h2>What's happening?</h2>
        {/* <blockquote className="twitter-tweet">
          <p lang="en" dir="ltr">
            Sunsets don&#39;t get much better than this one over
            <a href="https://twitter.com/GrandTetonNPS?ref_src=twsrc%5Etfw">
              @GrandTetonNPS
            </a>
            .
            <a href="https://twitter.com/hashtag/nature?src=hash&amp;ref_src=twsrc%5Etfw">
              #nature
            </a>
            <a href="https://twitter.com/hashtag/sunset?src=hash&amp;ref_src=twsrc%5Etfw">
              #sunset
            </a>
            <a href="http://t.co/YuKy2rcjyU">pic.twitter.com/YuKy2rcjyU</a>
          </p>
          &mdash; US Department of the Interior (@Interior)
          <a href="https://twitter.com/Interior/status/463440424141459456?ref_src=twsrc%5Etfw">
            May 5, 2014
          </a>
        </blockquote> */}
      </WidgetsContainer>
    </Widgets>
  );
};

export default Widget;
