import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  Retweeted,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  ComentIcon,
  RetweetIcon,
  LikeIcon,
} from "./styles";

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RetweetIcon />
        Wassup
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Yeah</strong>
            <FontAwesomeIcon
              icon={faCheckCircle}
              style={{
                fontSize: "14px",
                color: "#50b7f5",
                marginRight: "5px",
              }}
            />
            <span>@yeah</span>
            <Dot />
            <time> 15 m</time>
          </Header>

          <Description>Haha</Description>

          <ImageContent>
            <img src="https://twitter.clone.swj-dev.p-e.kr/cdn/test/testGif.gif" />
            {/* <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--7THYTvyf--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/oj0mjcfvpgzkf18w42n8.png" /> */}
          </ImageContent>

          <Icons>
            <Status>
              <ComentIcon />
              187
            </Status>

            <Status>
              <RetweetIcon />
              7832
            </Status>

            <Status>
              <LikeIcon />
              8.945
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
