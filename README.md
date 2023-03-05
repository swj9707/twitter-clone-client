# twitter-clone-client

<img src="https://user-images.githubusercontent.com/36991763/208076544-576595e4-f601-4ba4-9ba5-719a68dc84fb.png" width="230" height="200"/>

트위터 클론코딩 토이 프로젝트 Web Client  
서버 :  https://github.com/swj9707/twitter-clone-api-server  
어드민 : https://github.com/swj9707/twitter-clone-admin 

SNS 서비스의 프론트엔드 설계 및 개발 공부 목적의 프로젝트입니다.

위키 : https://github.com/swj9707/twitter-clone-client/wiki

현재 v1.0.0 가 프리 릴리즈 되었습니다. 안정화 후 최종 배포 예정입니다. 

# Tech Stacks
<div>
  <row>
    <img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white"/>
    <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
    <img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"/>
    <img src="https://img.shields.io/badge/styled-components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/>
  </row>
</div> 

# Features
- JWT 기반 인증
- 트윗 생성 및 삭제
- 좋아요, 리트윗
- 댓글 
- 프로필 조회 및 수정
- 자신이 작성한 트윗, 리트윗, 댓글 및 좋아요 조회

# Demo
## 로그인 화면
![image](https://user-images.githubusercontent.com/36991763/222965661-d202174a-ec3b-4542-888c-adb6bd42b108.png)
## 메인 화면
![image](https://user-images.githubusercontent.com/36991763/222965721-a2dd0193-1ee8-4d48-9ba2-1e26802d0bd2.png)
## 트윗 생성
![image](https://user-images.githubusercontent.com/36991763/222965729-34634dd8-f19e-4f77-b17c-b32613f65851.png)
## 프로필 화면
![image](https://user-images.githubusercontent.com/36991763/222965765-5e42b8b2-c5b2-4591-bba3-a7fdd8845024.png)

# How to use?
## 로컬에 셋업하는 법
- API 서버를 다운로드 받는다.
  - https://github.com/swj9707/twitter-clone-api-server 
- Docker compose 를 통해 인프라 셋업을 한다.
  ```yaml
  version: "3.8"
  services:
    cdn-server:
      container_name: twitter-clone-cdn-server
      image: nginx:latest
      restart: always
      ports:
        - 8082:8082
      volumes:
        - ./cdn/nginx.conf:/etc/nginx/nginx.conf
        - ./cdn/data:/static_files
      environment:
        - TZ=Asia/Seoul

    mysql:
      container_name: twitter-clone-db
      image: mariadb:latest
      volumes:
        - ./db/conf.d:/etc/mysql/conf.d
        - ./db/data:/var/lib/mysql
        - ./db/initdb.d:/docker-entrypoint-initdb.d
      ports:
        - 3306:3306
      env_file: .env
      command:
        - "--character-set-server=utf8mb4"
        - "--collation-server=utf8mb4_unicode_ci"

    redis:
      image: redis:alpine
      command: redis-server --port 6379
      container_name: twitter-cloud-redis
      hostname: twitter-clone-redis
      labels:
        - "name=redis"
        - "mode=standalone"
      ports:
        - 6379:6379
  ```
  로컬에서 돌릴 땐 위의 셋업으로 진행합니다. 
  nginx.conf는 아래와 같습니다. 
  ```conf
  events {}
  http {
      server {
          listen 8082;
          root /static_files;

          location /files/ {
              add_header Content-disposition 'attachment; filename="$1"';
          }

          location / {
              index index.html index.htm;
          }
      }
  }
  ```
- API 서버 내 Application.yml 설정을 해 준 후 DB 설정을 해 준다.
  - 자세한 설정 법은 https://github.com/swj9707/twitter-clone-api-server 
