FROM public.ecr.aws/docker/library/node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5173

CMD ["bash", "-lc", "npx serve . -p 5173"]
