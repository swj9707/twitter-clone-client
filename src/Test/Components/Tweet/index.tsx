import React from "react";

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
            <span>@yeah</span>
            <Dot />
            <time> 01 minutes</time>
          </Header>

          <Description>Haha</Description>

          <ImageContent>
            <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--7THYTvyf--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/oj0mjcfvpgzkf18w42n8.png" />
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
