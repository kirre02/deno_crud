FROM denoland/deno:1.30.3

EXPOSE 9444

WORKDIR /app

ADD . /app

RUN deno cache src/index.ts

CMD ["run", "--allow-all", "src/index.ts"]
